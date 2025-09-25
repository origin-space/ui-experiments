"use client";

import { useSliderWithInput } from "@/hooks/use-slider-with-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiRefreshLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

interface SliderControlProps {
  className?: string;
  minValue: number;
  maxValue: number;
  initialValue: [number];
  defaultValue: [number];
  step: number;
  label: string;
}

export default function SliderControl({
  className,
  minValue,
  maxValue,
  initialValue,
  defaultValue,
  step,
  label,
}: SliderControlProps) {
  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
    showReset,
  } = useSliderWithInput({ minValue, maxValue, initialValue, defaultValue });

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-2">
        <Label className="font-normal">{label}</Label>
        <div className="flex items-center gap-1">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "size-7 transition-all text-muted-foreground/70 hover:text-foreground hover:bg-transparent",
                    showReset ? "opacity-100" : "opacity-0 pointer-events-none",
                  )}
                  aria-label="Reset"
                  onClick={resetToDefault}
                >
                  <RiRefreshLine size={16} aria-hidden="true" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="dark px-2 py-1 text-xs">
                Reset to default
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            className="h-6 w-11 px-1 py-0 border-none tabular-nums text-right bg-transparent shadow-none focus:bg-background"
            type="text"
            inputMode="decimal"
            value={inputValues[0]}
            onChange={(e) => handleInputChange(e, 0)}
            onBlur={() => validateAndUpdateValue(inputValues[0] ?? "", 0)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                validateAndUpdateValue(inputValues[0] ?? "", 0);
              }
            }}
            aria-label="Enter value"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Slider
          className="grow [&>*:first-child]:bg-black/10"
          value={sliderValue}
          onValueChange={handleSliderChange}
          min={minValue}
          max={maxValue}
          step={step}
          aria-label={label}
        />
      </div>
    </div>
  );
}
