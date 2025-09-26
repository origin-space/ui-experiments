"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMoreFill } from "@remixicon/react";
import { useState } from "react";

export default function Component() {
  const [period, setPeriod] = useState("1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full border-border/80 bg-background hover:bg-background text-muted-foreground/80 hover:text-foreground aria-expanded:text-foreground"
          aria-label="Open edit menu"
        >
          <RiMoreFill className="size-4.5" size={18} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit min-w-28">
        <DropdownMenuRadioGroup value={period} onValueChange={setPeriod}>
          <DropdownMenuRadioItem value="1">1 week</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">1 month</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">1 year</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
