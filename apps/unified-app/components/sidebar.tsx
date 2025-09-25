"use client";

import Link from "next/link";
import { useScramble } from "use-scramble";

interface MarketLink {
  id: string;
  base: string;
  quote: string;
  value: number;
  isPositive: boolean;
}

export function Sidebar() {
  const links: MarketLink[] = [
    {
      id: "sap-tok",
      base: "SAP",
      quote: "TOK",
      value: 12089,
      isPositive: true,
    },
    {
      id: "map-tok",
      base: "MAP",
      quote: "TOK",
      value: 88749,
      isPositive: true,
    },
    {
      id: "btk-tok",
      base: "BTK",
      quote: "TOK",
      value: 12921,
      isPositive: false,
    },
    { id: "wap-tok", base: "WAP", quote: "TOK", value: 4982, isPositive: true },
    {
      id: "lup-tok",
      base: "LUP",
      quote: "TOK",
      value: 10801,
      isPositive: true,
    },
    {
      id: "suv-tok",
      base: "SUV",
      quote: "TOK",
      value: 1047,
      isPositive: false,
    },
    { id: "ark-tok", base: "ARK", quote: "TOK", value: 1994, isPositive: true },
  ];

  // Format number with commas
  const formatValue = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <aside className="md:-order-1 dark md:w-60 rounded-3xl shadow-2xl bg-sidebar text-foreground p-5 flex flex-col gap-4 border border-transparent dark:border-border/64">
      {/* Logo */}
      <div className="mb-4">
        <Link href="/">
          <span className="sr-only">Logo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="32"
            fill="none"
          >
            <path
              fill="#D4D4D8"
              d="M13.53 1.641h17.287l-12.71 18.85H.82L13.53 1.64Z"
            />
            <path
              fill="#D4D4D8"
              fillOpacity=".32"
              d="m14.286 22.238-4.923 7.3H27.47l12.71-18.85H26.815l-7.787 11.55h-4.743Z"
            />
          </svg>
        </Link>
      </div>
      {/* Navigation menu */}
      <div className="flex-1">
        <div className="uppercase font-medium text-xs text-muted-foreground/64 mb-2">
          Live market
        </div>
        <nav>
          <ul className="text-[13px] font-semibold divide-y divide-border/64">
            {links.map((link) => (
              <li key={link.id}>
                <ScrambleLink link={link} formatValue={formatValue} />
              </li>
            ))}
            <li>
              <Link
                className="flex justify-end text-muted-foreground hover:text-foreground transition-colors gap-2 py-2"
                href="#"
              >
                MORE
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Market sentiment */}
      <div>
        <div className="uppercase font-medium text-xs text-muted-foreground/64 mb-4">
          Market sentiment
        </div>
        <div className="flex items-center text-[13px] font-semibold gap-2 mb-2">
          <div className="text-emerald-500">27%</div>
          <div
            className="h-1.5 flex items-center gap-1 flex-1"
            aria-hidden="true"
          >
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "27%" }}
            ></div>
            <div
              className="h-full bg-rose-500 rounded-full"
              style={{ width: "73%" }}
            ></div>
          </div>
          <div className="text-rose-500">73%</div>
        </div>
        <div className="text-[13px] flex justify-between text-muted-foreground/64">
          <div>Bullish</div>
          <div>Bearish</div>
        </div>
      </div>
    </aside>
  );
}

interface ScrambleLinkProps {
  link: MarketLink;
  formatValue: (value: number) => string;
}

function ScrambleLink({ link, formatValue }: ScrambleLinkProps) {
  const { ref: pairRef, replay: replayPair } = useScramble({
    text: `${link.base} : ${link.quote}`,
    speed: 1,
    step: 1,
    scramble: 4,
    seed: 0,
    chance: 1,
    range: [65, 90],
    overdrive: false,
  });

  const { ref: valueRef, replay: replayValue } = useScramble({
    text: formatValue(link.value),
    speed: 0.6,
    step: 1,
    scramble: 4,
    seed: 0,
    chance: 1,
    range: [48, 57],
    overdrive: false,
  });

  const handleScramble = () => {
    replayPair();
    replayValue();
  };

  return (
    <Link
      className="flex items-center justify-between gap-2 py-2"
      href="#"
      onClick={handleScramble}
      onMouseEnter={handleScramble}
      onFocus={handleScramble}
    >
      <span ref={pairRef}></span>
      <span aria-hidden="true">&nbsp;</span>
      <span
        ref={valueRef}
        className={link.isPositive ? "text-emerald-500" : "text-rose-500"}
      ></span>
    </Link>
  );
}
