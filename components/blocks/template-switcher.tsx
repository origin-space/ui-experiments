"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const templates = [
  {
    name: "Schema-Visualizer",
    href: "/templates/schema-visualizer",
  },
  {
    name: "Component-Explorer",
    href: "/templates/component-explorer",
  },
  {
    name: "Dashboard-Builder",
    href: "/templates/dashboard-builder",
  },
  {
    name: "Form-Generator",
    href: "/templates/form-generator",
  },
];

export default function TemplateSwitcher() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0] ?? null);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="max-sm:hidden">
          <BreadcrumbLink href="#">Templates</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-border max-sm:hidden">
          {" "}
          /{" "}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground">
              {activeTemplate?.name ?? "Select Template"}
              <ChevronDownIcon
                className="-me-1 opacity-60"
                size={16}
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              {templates.map((template) => (
                <DropdownMenuItem
                  key={template.name}
                  onClick={() => setActiveTemplate(template)}
                >
                  {template.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
