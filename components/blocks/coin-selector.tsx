"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useId, useState } from "react";

const coins = [
  {
    value: "TRX",
    name: "Tronix",
    icon: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp5/coin-01_tidmpi.svg",
  },
  {
    value: "TOK",
    name: "Turbo Koin",
    icon: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp5/coin-02_a6ineb.svg",
  },
  {
    value: "SAP",
    name: "Swap",
    icon: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp5/coin-03_w8kee9.svg",
  },
  {
    value: "SUV",
    name: "SuvFi",
    icon: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp5/coin-04_hfq2hc.svg",
  },
];

interface CoinSelectorProps {
  defaultValue?: string;
}

export default function CoinSelector({ defaultValue }: CoinSelectorProps) {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue || "");

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="p-2 pe-3 h-9 rounded-full border-border bg-background hover:bg-background"
          >
            {value ? (
              <span className="flex min-w-0 items-center gap-2">
                {(() => {
                  const selectedCoin = coins.find(
                    (coin) => coin.value === value,
                  );
                  return (
                    <>
                      <img
                        src={selectedCoin?.icon}
                        alt={selectedCoin?.name}
                        className="size-5"
                      />
                      <span className="truncate">{selectedCoin?.value}</span>
                    </>
                  );
                })()}
              </span>
            ) : (
              <span className="flex min-w-0 items-center gap-2">
                <span className="size-5 rounded-full bg-muted flex items-center justify-center">
                  <ChevronDownIcon
                    size={12}
                    className="text-muted-foreground"
                  />
                </span>
                <span className="text-muted-foreground text-sm">
                  Select coin
                </span>
              </span>
            )}
            <ChevronDownIcon
              size={16}
              className="text-muted-foreground/80 shrink-0"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="max-w-48 min-w-[var(--radix-popper-anchor-width)] p-0"
          align="end"
        >
          <Command
            filter={(value, search) => {
              if (!search) return 1;
              const item = coins.find((coin) => coin.value === value);
              if (!item) return 0;

              const nameMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());
              const valueMatch = item.value
                .toLowerCase()
                .includes(search.toLowerCase());

              return nameMatch || valueMatch ? 1 : 0;
            }}
          >
            <CommandInput placeholder="Search coin..." className="h-9" />
            <CommandList>
              <CommandEmpty>No coin found.</CommandEmpty>
              <CommandGroup className="p-1">
                {coins.map((coin) => (
                  <CommandItem
                    key={coin.value}
                    value={coin.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    <img
                      src={coin.icon}
                      alt={coin.name}
                      className="size-5"
                      width={20}
                      height={20}
                    />
                    <span className="truncate">
                      {coin.name} ({coin.value})
                    </span>
                    {value === coin.value && (
                      <CheckIcon
                        size={16}
                        className="ms-auto text-muted-foreground/80"
                      />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
