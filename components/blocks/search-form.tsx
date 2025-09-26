import { useId } from "react";
import { SidebarInput } from "@/components/ui/sidebar";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { RiSearch2Line } from "@remixicon/react";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const id = useId();

  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <div className="relative">
            <SidebarInput id={id} className="ps-9 pe-9" aria-label="Search" />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/60 peer-disabled:opacity-50">
              <RiSearch2Line size={20} aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
              <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded bg-input px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                /
              </kbd>
            </div>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
