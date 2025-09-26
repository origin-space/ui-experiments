import type { Metadata } from "next";
import Header from "@/components/blocks/header";
import SchemaVisualizer from "@/components/blocks/schema-visualizer";
export const metadata: Metadata = {
  title: "Experiment 07 - Crafted.is",
};

export default function Page() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <SchemaVisualizer />
    </div>
  );
}
