import { TooltipProps } from "recharts";

interface CustomTooltipContentProps extends TooltipProps<number, string> {
  colorMap?: Record<string, string>;
  labelMap?: Record<string, string>;
  // Optional array to define display order
  dataKeys?: string[];
  // Optional formatter for values
  valueFormatter?: (value: number) => string;
}

export function CustomTooltipContent({
  active,
  payload,
  label,
  colorMap = {},
  labelMap = {},
  dataKeys, // If provided, will be used to order the items
  valueFormatter = (value) => `$${value.toLocaleString()}`,
}: CustomTooltipContentProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  // Create a map of payload items by dataKey for easy lookup
  const payloadMap = payload.reduce(
    (acc, item) => {
      acc[item.dataKey as string] = item;
      return acc;
    },
    {} as Record<string, (typeof payload)[0]>,
  );

  // If dataKeys is provided, use it to order the items
  // Otherwise, use the original payload order
  const orderedPayload = dataKeys
    ? dataKeys
        .filter((key) => payloadMap[key]) // Only include keys that exist in the payload
        .map((key) => payloadMap[key])
    : payload;

  return (
    <div className="bg-popover text-popover-foreground grid min-w-32 items-start gap-1.5 rounded-lg border px-3 py-1.5 text-xs">
      <div className="font-medium">{label}</div>
      <div className="grid gap-1.5">
        {orderedPayload.map((entry, index) => {
          // Skip undefined entries
          if (!entry) return null;

          const name = entry.dataKey as string;
          const value = entry.value as number;

          // Get color and label from maps, with fallbacks
          const color = colorMap[name] || "var(--chart-1)";
          const displayLabel = labelMap[name] || name;

          return (
            <div
              key={`item-${index}`}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-xs"
                  style={{ backgroundColor: color }}
                />
                <span className="text-muted-foreground">{displayLabel}</span>
              </div>
              <span className="text-foreground font-mono font-medium tabular-nums">
                {valueFormatter(value)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
