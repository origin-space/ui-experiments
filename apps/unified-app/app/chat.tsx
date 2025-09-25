import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiment 02 - Crafted.is",
};

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserDropdown from "@/components/user-dropdown";
import {
  SettingsPanelProvider,
  SettingsPanel,
} from "@/components/settings-panel";
import Chat from "@/components/chat";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-sidebar group/sidebar-inset">
        <header className="dark flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground relative before:absolute before:inset-y-3 before:-left-px before:w-px before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 before:z-50">
          <SidebarTrigger className="-ms-2" />
          <div className="flex items-center gap-8 ml-auto">
            <nav className="flex items-center text-sm font-medium max-sm:hidden">
              <a
                className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
                href="#"
                aria-current
              >
                Playground
              </a>
              <a
                className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
                href="#"
              >
                Docs
              </a>
              <a
                className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
                href="#"
              >
                API Reference
              </a>
            </nav>
            <UserDropdown />
          </div>
        </header>
        <SettingsPanelProvider>
          <div className="flex h-[calc(100svh-4rem)] bg-[hsl(240_5%_92.16%)] md:rounded-s-3xl md:group-peer-data-[state=collapsed]/sidebar-inset:rounded-s-none transition-all ease-in-out duration-300">
            <Chat />
            <SettingsPanel />
          </div>
        </SettingsPanelProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}
