"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { Hash, Plus, X } from "lucide-react";
import type { Tag } from "~/@/lib/types";

interface TagStruct {
  value: Tag;
  label: string;
}

const tags: TagStruct[] = [
  {
    value: "typescript",
    label: "Typescript",
  },
  {
    value: "go",
    label: "Go",
  },
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "backend",
    label: "Backend",
  },
  {
    value: "webdev",
    label: "Web Dev",
  },
  {
    value: "adventofcode",
    label: "Advent of Code",
  },
  {
    value: "leetcode",
    label: "Leetcode",
  },
];

export function Tags() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <div className="flex gap-2">
          {selectedTags.map((tag) => (
            <Badge
              className={cn("flex items-center justify-center gap-2", {
                "bg-[#3178C6]": tag === "typescript",
                "bg-[#00ADD8]": tag === "go",
                "bg-green-600": tag === "adventofcode",
                "bg-amber-500": tag === "leetcode",
              })}
            >
              <div>{tag}</div>
              <X
                className="h-4 w-4 cursor-pointer"
                onClick={() =>
                  setSelectedTags(
                    selectedTags.filter((tagName) => tagName !== tag),
                  )
                }
              />
            </Badge>
          ))}
        </div>
        <PopoverTrigger asChild>
          {selectedTags.length > 0 ? (
            <Plus className="h-5 w-5 cursor-pointer" />
          ) : (
            <div>add tags...</div>
            // <Button
            //   variant={"ghost"}
            //   role="combobox"
            //   aria-expanded={isOpen}
            //   className="w-fit"
            // >
            //   add tags...
            // </Button>
          )}
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandEmpty>No tag found</CommandEmpty>
          <CommandGroup>
            {tags.map((tag) => {
              if (selectedTags.includes(tag.value)) {
                return;
              }
              return (
                <CommandItem
                  key={tag.value}
                  value={tag.value}
                  onSelect={(currVal) => {
                    setSelectedTags([...selectedTags, currVal as Tag]);
                    setIsOpen(false);
                  }}
                  className="group"
                >
                  <Hash
                    className={cn(
                      "mr-2 h-3 w-3 text-slate-600 group-hover:text-black",
                      {
                        "group-hover:text-[#3178C6]":
                          tag.value === "typescript",
                        "group-hover:text-[#00ADD8]": tag.value === "go",
                        "group-hover:text-green-600":
                          tag.value === "adventofcode",
                        "group-hover:text-amber-500": tag.value === "leetcode",
                      },
                    )}
                  />
                  <div
                    className={cn("text-slate-600 group-hover:text-black", {
                      "group-hover:text-[#3178C6]": tag.value === "typescript",
                      "group-hover:text-[#00ADD8]": tag.value === "go",
                      "group-hover:text-green-600":
                        tag.value === "adventofcode",
                      "group-hover:text-amber-500": tag.value === "leetcode",
                    })}
                  >
                    {tag.label}
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
