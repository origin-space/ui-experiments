import Link from "next/link";
import Participants from "@/components/participants";
import TemplateSwitcher from "@/components/template-switcher";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
      <div className="border border-border/80 rounded-xl bg-card/80 backdrop-blur-md h-12 md:h-16 flex justify-between items-center gap-2 px-4 shadow-lg/2">
        {/* Left area */}
        <div className="flex-1 flex items-center">
          <Link className="inline-flex" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="32"
              aria-label="Schema Visualizer"
            >
              <path
                fill="currentColor"
                d="M0 12v12.8h4.028a3.242 3.242 0 0 1 2.278.937A3.199 3.199 0 0 1 7.25 28v4h9.667L29 20V7.2h-4.028a3.242 3.242 0 0 1-2.278-.937A3.2 3.2 0 0 1 21.75 4V0h-9.667L0 12Zm13.694 12H8.056v-8.8l7.25-7.2h5.638v8.8l-7.25 7.2Z"
              />
            </svg>
          </Link>
        </div>
        {/* Center area */}
        <div className="grow flex justify-center">
          <TemplateSwitcher />
        </div>
        {/* Right area */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Participants />
          <Button size="sm" className="text-sm rounded-lg">
            Share
          </Button>
          <Separator orientation="vertical" className="min-h-6 max-sm:hidden" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
