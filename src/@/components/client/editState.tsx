"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "~/@/lib/utils";

export function EditState({ className }: { className: string }) {
  const [isEditMode, setIsEditMode] = useState<boolean>(true);

  const setPreview = () => {
    setIsEditMode(false);
  };

  return (
    <div className={className}>
      <Button
        size={"sm"}
        variant={"ghost"}
        className={cn("font-normal hover:bg-blue-400/10 hover:text-blue-600", {
          "font-normal": isEditMode,
          "font-light": !isEditMode,
        })}
        onClick={() => setIsEditMode(true)}
      >
        edit
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        className={cn("font-normal hover:bg-blue-400/10 hover:text-blue-600", {
          "font-light": isEditMode,
          "font-normal": !isEditMode,
        })}
        onClick={() => setIsEditMode(false)}
      >
        preview
      </Button>
    </div>
  );
}
