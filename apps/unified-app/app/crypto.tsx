import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiment 04 - Crafted.is",
};

import { useId } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import UserDropdown from "@/components/user-dropdown";
import { RiSearch2Line } from "@remixicon/react";
import ThemeToggle from "@/components/theme-toggle";
import { Converter } from "@/components/converter";
import { CoinChart } from "@/components/coin-chart";
import { TransactionsTable } from "@/components/transactions-table";

export default function Page() {
  const id = useId();

  return (
    <div className="flex h-svh">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-auto px-4 md:px-6 lg:px-8">
          <header className="bg-sidebar/90 backdrop-blur-sm sticky top-0 z-50 -mx-2 px-2">
            <div className="flex shrink-0 items-center gap-2 border-b py-4 w-full max-w-7xl mx-auto">
              <div className="flex-1">
                <div className="relative inline-flex">
                  <Input
                    id={id}
                    className="h-8 ps-9 pe-9 bg-border border-transparent w-fit min-w-65"
                    aria-label="Search"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground peer-disabled:opacity-50">
                    <RiSearch2Line size={20} aria-hidden="true" />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                    <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded bg-background shadow-xs px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                      /
                    </kbd>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <UserDropdown />
              </div>
            </div>
          </header>
          <div className="flex max-lg:flex-col flex-1 gap-6 py-6 w-full max-w-7xl mx-auto">
            {/* Converter widget */}
            <div className="lg:order-1 lg:w-90 shrink-0">
              <Converter />
            </div>
            {/* Chart and table */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              <CoinChart />
              <TransactionsTable />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
