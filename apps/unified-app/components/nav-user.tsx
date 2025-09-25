"use client";

import {
  RiMore2Line,
  RiTimer2Line,
  RiUserLine,
  RiPulseLine,
  RiFindReplaceLine,
  RiLogoutCircleLine,
} from "@remixicon/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="in-data-[state=expanded]:size-6 transition-[width,height] duration-200 ease-in-out">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight ms-1">
                <span className="truncate font-medium">{user.name}</span>
              </div>
              <div className="size-8 rounded-lg flex items-center justify-center bg-sidebar-accent/50 in-[[data-slot=dropdown-menu-trigger]:hover]:bg-transparent">
                <RiMore2Line className="size-5 opacity-40" size={20} />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem className="gap-3 px-1">
              <RiTimer2Line
                size={20}
                className="text-muted-foreground/70"
                aria-hidden="true"
              />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 px-1">
              <RiUserLine
                size={20}
                className="text-muted-foreground/70"
                aria-hidden="true"
              />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 px-1">
              <RiPulseLine
                size={20}
                className="text-muted-foreground/70"
                aria-hidden="true"
              />
              <span>Changelog</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 px-1">
              <RiFindReplaceLine
                size={20}
                className="text-muted-foreground/70"
                aria-hidden="true"
              />
              <span>History</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 px-1">
              <RiLogoutCircleLine
                size={20}
                className="text-muted-foreground/70"
                aria-hidden="true"
              />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
