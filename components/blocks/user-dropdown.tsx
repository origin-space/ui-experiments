import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RiGlobalLine, RiWalletLine, RiLogoutBoxLine } from "@remixicon/react";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 hover:bg-transparent rounded-full"
        >
          <Avatar>
            <AvatarImage
              src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp4/user_i02xph.png"
              width={32}
              height={32}
              alt="Profile image"
            />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 dark:border-none" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">
            Lucy Bennett
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            l.bennett@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <RiGlobalLine size={16} className="opacity-60" aria-hidden="true" />
            <span>Currency</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiWalletLine size={16} className="opacity-60" aria-hidden="true" />
            <span>Wallet</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuItem>
          <RiLogoutBoxLine
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
