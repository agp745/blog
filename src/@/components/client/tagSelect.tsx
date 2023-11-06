"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export function TagSelect() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <Button onClick={() => setTags([...tags, "go"])}>
      {tags.length > 0 ? "+" : "add tags"}
    </Button>
  );
}
