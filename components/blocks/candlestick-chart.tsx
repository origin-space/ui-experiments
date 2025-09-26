"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  ReferenceLine,
  TooltipProps,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const data = [
  // November 2024
  { date: "2024-11-01", openClose: [0.9188, 0.9201], high: 0.9232, low: 0.917 },
  { date: "2024-11-04", openClose: [0.9193, 0.9181], high: 0.92, low: 0.9162 },
  {
    date: "2024-11-05",
    openClose: [0.9193, 0.9171],
    high: 0.9197,
    low: 0.9144,
  },
  {
    date: "2024-11-06",
    openClose: [0.9149, 0.9252],
    high: 0.9361,
    low: 0.9144,
  },
  { date: "2024-11-07", openClose: [0.932, 0.9286], high: 0.9334, low: 0.9238 },
  {
    date: "2024-11-08",
    openClose: [0.9257, 0.9305],
    high: 0.9357,
    low: 0.9254,
  },
  {
    date: "2024-11-11",
    openClose: [0.9339, 0.9365],
    high: 0.9409,
    low: 0.9322,
  },
  {
    date: "2024-11-12",
    openClose: [0.9384, 0.9408],
    high: 0.9438,
    low: 0.9378,
  },
  { date: "2024-11-13", openClose: [0.9413, 0.943], high: 0.9473, low: 0.9388 },
  { date: "2024-11-14", openClose: [0.9467, 0.9488], high: 0.9526, low: 0.945 },
  {
    date: "2024-11-15",
    openClose: [0.9497, 0.9475],
    high: 0.9509,
    low: 0.9441,
  },
  {
    date: "2024-11-18",
    openClose: [0.9497, 0.9462],
    high: 0.9497,
    low: 0.9428,
  },
  {
    date: "2024-11-19",
    openClose: [0.9435, 0.9467],
    high: 0.9501,
    low: 0.9433,
  },
  {
    date: "2024-11-20",
    openClose: [0.9438, 0.9471],
    high: 0.9517,
    low: 0.9425,
  },
  {
    date: "2024-11-21",
    openClose: [0.9484, 0.9516],
    high: 0.9558,
    low: 0.9474,
  },
  {
    date: "2024-11-22",
    openClose: [0.9547, 0.9601],
    high: 0.9677,
    low: 0.9526,
  },
  { date: "2024-11-25", openClose: [0.9542, 0.9533], high: 0.957, low: 0.9497 },
  {
    date: "2024-11-26",
    openClose: [0.9528, 0.9537],
    high: 0.9592,
    low: 0.9483,
  },
  {
    date: "2024-11-27",
    openClose: [0.9534, 0.9496],
    high: 0.9547,
    low: 0.9445,
  },
  { date: "2024-11-28", openClose: [0.9464, 0.948], high: 0.9499, low: 0.9461 },
  {
    date: "2024-11-29",
    openClose: [0.9474, 0.9462],
    high: 0.9486,
    low: 0.9437,
  },

  // December 2024
  {
    date: "2024-12-02",
    openClose: [0.9454, 0.9507],
    high: 0.9559,
    low: 0.9454,
  },
  {
    date: "2024-12-03",
    openClose: [0.9525, 0.9517],
    high: 0.9541,
    low: 0.9492,
  },
  {
    date: "2024-12-04",
    openClose: [0.9515, 0.9516],
    high: 0.9549,
    low: 0.9484,
  },
  { date: "2024-12-05", openClose: [0.9514, 0.948], high: 0.9516, low: 0.9444 },
  {
    date: "2024-12-06",
    openClose: [0.9445, 0.9447],
    high: 0.9485,
    low: 0.9408,
  },
  { date: "2024-12-09", openClose: [0.947, 0.9467], high: 0.9495, low: 0.9439 },
  {
    date: "2024-12-10",
    openClose: [0.9476, 0.9494],
    high: 0.9525,
    low: 0.9463,
  },
  {
    date: "2024-12-11",
    openClose: [0.9499, 0.9515],
    high: 0.9542,
    low: 0.9488,
  },
  {
    date: "2024-12-12",
    openClose: [0.9527, 0.9526],
    high: 0.9557,
    low: 0.9496,
  },
  {
    date: "2024-12-13",
    openClose: [0.9554, 0.9534],
    high: 0.9566,
    low: 0.9502,
  },
  { date: "2024-12-16", openClose: [0.953, 0.9525], high: 0.9547, low: 0.9503 },
  {
    date: "2024-12-17",
    openClose: [0.9513, 0.9518],
    high: 0.9543,
    low: 0.9493,
  },
  { date: "2024-12-18", openClose: [0.9532, 0.959], high: 0.9667, low: 0.9512 },
  {
    date: "2024-12-19",
    openClose: [0.9659, 0.9629],
    high: 0.9664,
    low: 0.9595,
  },
  { date: "2024-12-20", openClose: [0.965, 0.962], high: 0.9668, low: 0.9572 },
  { date: "2024-12-23", openClose: [0.9583, 0.9601], high: 0.963, low: 0.9573 },
  { date: "2024-12-24", openClose: [0.9609, 0.9618], high: 0.963, low: 0.9606 },
  {
    date: "2024-12-26",
    openClose: [0.9614, 0.9606],
    high: 0.9624,
    low: 0.9588,
  },
  { date: "2024-12-27", openClose: [0.9594, 0.9593], high: 0.961, low: 0.9575 },
  {
    date: "2024-12-30",
    openClose: [0.9588, 0.9602],
    high: 0.9642,
    low: 0.9562,
  },
  { date: "2024-12-31", openClose: [0.9609, 0.963], high: 0.9667, low: 0.9593 },

  // January 2025
  { date: "2025-01-02", openClose: [0.9656, 0.971], high: 0.9781, low: 0.9639 },
  { date: "2025-01-03", openClose: [0.974, 0.9722], high: 0.9745, low: 0.9699 },
  {
    date: "2025-01-06",
    openClose: [0.9704, 0.9648],
    high: 0.9713,
    low: 0.9582,
  },
  {
    date: "2025-01-07",
    openClose: [0.9624, 0.9627],
    high: 0.9671,
    low: 0.9584,
  },
  {
    date: "2025-01-08",
    openClose: [0.9671, 0.9694],
    high: 0.9733,
    low: 0.9655,
  },
  {
    date: "2025-01-09",
    openClose: [0.9691, 0.9706],
    high: 0.9724,
    low: 0.9689,
  },
  {
    date: "2025-01-10",
    openClose: [0.9709, 0.9743],
    high: 0.9789,
    low: 0.9698,
  },
  {
    date: "2025-01-13",
    openClose: [0.9768, 0.9791],
    high: 0.9826,
    low: 0.9756,
  },
  {
    date: "2025-01-14",
    openClose: [0.9762, 0.9734],
    high: 0.9767,
    low: 0.9701,
  },
  {
    date: "2025-01-15",
    openClose: [0.9701, 0.9703],
    high: 0.9747,
    low: 0.9659,
  },
  { date: "2025-01-16", openClose: [0.9718, 0.972], high: 0.9745, low: 0.9695 },
  {
    date: "2025-01-17",
    openClose: [0.9707, 0.9711],
    high: 0.9741,
    low: 0.9681,
  },
  { date: "2025-01-20", openClose: [0.9725, 0.9662], high: 0.974, low: 0.9585 },
  { date: "2025-01-21", openClose: [0.96, 0.9626], high: 0.9669, low: 0.9583 },
  { date: "2025-01-22", openClose: [0.959, 0.9592], high: 0.9621, low: 0.9563 },
  { date: "2025-01-23", openClose: [0.9606, 0.961], high: 0.964, low: 0.958 },
  {
    date: "2025-01-24",
    openClose: [0.9601, 0.9554],
    high: 0.9604,
    low: 0.9505,
  },
  { date: "2025-01-27", openClose: [0.9541, 0.953], high: 0.9565, low: 0.9494 },
  {
    date: "2025-01-28",
    openClose: [0.9531, 0.9566],
    high: 0.9603,
    low: 0.9529,
  },
  {
    date: "2025-01-29",
    openClose: [0.9587, 0.9603],
    high: 0.9631,
    low: 0.9575,
  },
  {
    date: "2025-01-30",
    openClose: [0.9596, 0.9591],
    high: 0.9628,
    low: 0.9553,
  },
  {
    date: "2025-01-31",
    openClose: [0.9623, 0.9652],
    high: 0.9661,
    low: 0.9585,
  },

  // February 2025
  {
    date: "2025-02-03",
    openClose: [0.9775, 0.9729],
    high: 0.9796,
    low: 0.9662,
  },
  {
    date: "2025-02-04",
    openClose: [0.9667, 0.9681],
    high: 0.9735,
    low: 0.9627,
  },
  { date: "2025-02-05", openClose: [0.9635, 0.961], high: 0.9643, low: 0.9576 },
  { date: "2025-02-06", openClose: [0.9612, 0.9635], high: 0.9659, low: 0.961 },
  {
    date: "2025-02-07",
    openClose: [0.9631, 0.9655],
    high: 0.9702,
    low: 0.9607,
  },
  { date: "2025-02-10", openClose: [0.9691, 0.97], high: 0.9726, low: 0.9675 },
  {
    date: "2025-02-11",
    openClose: [0.9702, 0.9674],
    high: 0.9716,
    low: 0.9632,
  },
  {
    date: "2025-02-12",
    openClose: [0.9651, 0.9641],
    high: 0.9693,
    low: 0.9589,
  },
  { date: "2025-02-13", openClose: [0.9631, 0.9597], high: 0.964, low: 0.9554 },
  {
    date: "2025-02-14",
    openClose: [0.9555, 0.9541],
    high: 0.9572,
    low: 0.9511,
  },
  { date: "2025-02-17", openClose: [0.954, 0.9536], high: 0.9554, low: 0.9518 },
  { date: "2025-02-18", openClose: [0.9539, 0.956], high: 0.9583, low: 0.9536 },
  {
    date: "2025-02-19",
    openClose: [0.9573, 0.9587],
    high: 0.9615,
    low: 0.9559,
  },
  {
    date: "2025-02-20",
    openClose: [0.9594, 0.9559],
    high: 0.9598,
    low: 0.9521,
  },
  { date: "2025-02-21", openClose: [0.9523, 0.9545], high: 0.957, low: 0.9519 },
  {
    date: "2025-02-24",
    openClose: [0.9541, 0.9533],
    high: 0.9567,
    low: 0.9498,
  },
  {
    date: "2025-02-25",
    openClose: [0.9553, 0.9535],
    high: 0.9563,
    low: 0.9507,
  },
  { date: "2025-02-26", openClose: [0.951, 0.9522], high: 0.9546, low: 0.9499 },
  {
    date: "2025-02-27",
    openClose: [0.9538, 0.9574],
    high: 0.9618,
    low: 0.9531,
  },
  {
    date: "2025-02-28",
    openClose: [0.9617, 0.9625],
    high: 0.9653,
    low: 0.9597,
  },
];

interface CandlestickData {
  date: string;
  openClose: [number, number];
  high: number;
  low: number;
}

const chartConfig = {
  openClose: {
    label: "Price",
    color: "var(--chart-1)",
  },
  high: {
    label: "High",
    color: "var(--chart-2)",
  },
  low: {
    label: "Low",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

interface CandlestickProps {
  x: number;
  y: number;
  width: number;
  height: number;
  low: number;
  high: number;
  openClose: [number, number];
}

const Candlestick = (props: CandlestickProps) => {
  const {
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;
  const isGrowing = open < close;
  const ratio = Math.abs(height / (open - close));

  return (
    <g>
      <path
        className={`${isGrowing ? "fill-emerald-500" : "fill-rose-500"}`}
        d={`
            M ${x},${y}
            L ${x},${y + height}
            L ${x + width},${y + height}
            L ${x + width},${y}
            L ${x},${y}
          `}
      />
      <g
        className={`${isGrowing ? "stroke-emerald-500" : "stroke-rose-500"}`}
        strokeWidth="1"
      >
        {/* bottom line */}
        {isGrowing ? (
          <path
            d={`
                M ${x + width / 2}, ${y + height}
                v ${(open - low) * ratio}
              `}
          />
        ) : (
          <path
            d={`
                M ${x + width / 2}, ${y}
                v ${(close - low) * ratio}
              `}
          />
        )}
        {/* top line */}
        {isGrowing ? (
          <path
            d={`
                M ${x + width / 2}, ${y}
                v ${(close - high) * ratio}
              `}
          />
        ) : (
          <path
            d={`
                M ${x + width / 2}, ${y + height}
                v ${(open - high) * ratio}
              `}
          />
        )}
      </g>
    </g>
  );
};

const renderCandlestick = (props: any) => {
  // Extract the necessary data from the props
  const { x, y, width, height, payload } = props;

  // If we have valid payload, use its data
  if (
    payload &&
    payload.low !== undefined &&
    payload.high !== undefined &&
    payload.openClose
  ) {
    return (
      <Candlestick
        x={x}
        y={y}
        width={width}
        height={height}
        low={payload.low}
        high={payload.high}
        openClose={payload.openClose}
      />
    );
  }

  // Return an empty candlestick with default values if payload is missing
  return (
    <Candlestick
      x={x || 0}
      y={y || 0}
      width={width || 0}
      height={height || 0}
      low={0}
      high={0}
      openClose={[0, 0]}
    />
  );
};

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload as CandlestickData | undefined;
    if (!data) return null;

    return (
      <div className="bg-popover text-popover-foreground grid min-w-32 items-start gap-1.5 rounded-lg border px-3 py-1.5 text-xs">
        <p className="font-medium">
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-muted-foreground">
          Open:{" "}
          <span className="text-foreground font-medium">
            {data.openClose[0]}
          </span>
        </p>
        <p className="text-muted-foreground">
          High: <span className="text-foreground font-medium">{data.high}</span>
        </p>
        <p className="text-muted-foreground">
          Low: <span className="text-foreground font-medium">{data.low}</span>
        </p>
        <p className="text-muted-foreground">
          Close:{" "}
          <span className="text-foreground font-medium">
            {data.openClose[1]}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

function CandlestickChart() {
  const minValue = data.reduce(
    (minValue: number | null, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low ?? 0, open ?? 0, close ?? 0);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    },
    null as number | null,
  );
  const maxValue = data.reduce(
    (maxValue: number, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high ?? 0, open ?? 0, close ?? 0);
      return maxValue === null || currentMax > maxValue ? currentMax : maxValue;
    },
    minValue || 0,
  );

  // Format date to "Jan '25" style
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(2);
    return `${month} '${year}`;
  };

  // Custom tick formatter to show each month only once
  const customTickFormatter = (value: string, index: number) => {
    const currentDate = new Date(value);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // For the first item, always show the month
    if (index === 0) return formatDate(value);

    // Get previous date safely
    const prevItem = data[index - 1];
    if (!prevItem) return formatDate(value);

    const prevDate = new Date(prevItem.date);
    const prevMonth = prevDate.getMonth();
    const prevYear = prevDate.getFullYear();

    // Only show the month if it's different from the previous one
    if (currentMonth !== prevMonth || currentYear !== prevYear) {
      return formatDate(value);
    }

    return "";
  };

  // Get the most recent day's close value
  const mostRecentData = data[data.length - 1];
  const mostRecentClose = mostRecentData ? mostRecentData.openClose[1] : null;

  // Add this line to define isGrowing
  const isGrowing =
    mostRecentData &&
    mostRecentData.openClose &&
    mostRecentData.openClose[1] !== undefined &&
    mostRecentData.openClose[0] !== undefined
      ? mostRecentData.openClose[1] > mostRecentData.openClose[0]
      : undefined;

  return (
    <div className="w-full">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-110 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-zinc-950/5 dark:[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-zinc-950/25 [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/64 [&_.recharts-cartesian-axis-line]:stroke-border/64 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground/72 dark:[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground/64"
      >
        <BarChart data={data} maxBarSize={20} margin={{ left: 20, right: -5 }}>
          <CartesianGrid vertical={false} strokeWidth={1} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickFormatter={customTickFormatter}
            interval={0}
            minTickGap={5}
            tickMargin={12}
          />
          <YAxis
            domain={[
              minValue !== null
                ? minValue - (maxValue - (minValue ?? 0)) * 0.1
                : 0,
              maxValue + (maxValue - (minValue ?? 0)) * 0.1,
            ]}
            tickCount={7}
            tickLine={false}
            orientation="right"
            tickFormatter={(value) => value.toFixed(4)}
          />

          {/* Reference line for most recent close value */}
          {mostRecentClose && (
            <ReferenceLine
              y={mostRecentClose}
              stroke="var(--muted-foreground)"
              opacity={0.5}
              strokeWidth={1}
              strokeDasharray="2 2"
              label={({ viewBox }) => (
                <g
                  transform={`translate(${viewBox.x + viewBox.width + 5},${viewBox.y})`}
                >
                  <rect
                    x={-2}
                    y={-10}
                    width={50}
                    height={20}
                    fill={
                      isGrowing
                        ? "var(--color-emerald-500)"
                        : "var(--color-rose-500)"
                    }
                    rx={4}
                  />
                  <text
                    x={2}
                    y={4}
                    fill="#fff"
                    fontSize={12}
                    fontWeight="500"
                    textAnchor="start"
                  >
                    {mostRecentClose.toFixed(4)}
                  </text>
                </g>
              )}
            />
          )}

          <ChartTooltip content={<CustomTooltip />} />
          <Bar dataKey="openClose" shape={renderCandlestick}>
            {data.map(({ date }: any) => (
              <Cell key={`cell-${date}`} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export { CandlestickChart };
