import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiment 06 - Crafted.is",
};

import { AppSidebar } from "@/components/blocks/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import BigCalendar from "@/components/blocks/big-calendar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-2 pt-0">
          <BigCalendar />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
