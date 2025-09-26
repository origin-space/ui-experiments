"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiCloseLine,
  RiRefreshLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  date: string;
  in: {
    symbol: string;
    name: string;
    icon: string[];
  };
  out: {
    symbol: string;
    name: string;
    icon: string[];
  };
  fees: string;
  change: {
    received: string;
    spent: string;
  };
  status: "completed" | "failed";
  spent: string;
}

const basePath = "https://raw.githubusercontent.com/dlzlfasou/image/upload/";

const items: Transaction[] = [
  {
    id: "1",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi",
      icon: [
        "v1741861900/coin-01-sm-light_hgzpka.svg",
        "v1741861900/coin-01-sm-dark_hkrvvm.svg",
      ],
    },
    out: {
      symbol: "TOK",
      name: "Token",
      icon: [
        "v1741861900/coin-02-sm-light_t1qflr.svg",
        "v1741861900/coin-02-sm-dark_iqldgv.svg",
      ],
    },
    fees: "$31.2",
    change: {
      received: "14,972",
      spent: "7,872.1",
    },
    status: "completed",
    spent: "$2,867.14",
  },
  {
    id: "2",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi",
      icon: [
        "v1741861900/coin-01-sm-light_hgzpka.svg",
        "v1741861900/coin-01-sm-dark_hkrvvm.svg",
      ],
    },
    out: {
      symbol: "TOK",
      name: "Token",
      icon: [
        "v1741861900/coin-02-sm-light_t1qflr.svg",
        "v1741861900/coin-02-sm-dark_iqldgv.svg",
      ],
    },
    fees: "$22.3",
    change: {
      received: "19,883",
      spent: "12,327",
    },
    status: "completed",
    spent: "$21,314.24",
  },
  {
    id: "3",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi",
      icon: [
        "v1741861900/coin-01-sm-light_hgzpka.svg",
        "v1741861900/coin-01-sm-dark_hkrvvm.svg",
      ],
    },
    out: {
      symbol: "TOK",
      name: "Token",
      icon: [
        "v1741861900/coin-02-sm-light_t1qflr.svg",
        "v1741861900/coin-02-sm-dark_iqldgv.svg",
      ],
    },
    fees: "$7.4",
    change: {
      received: "12,487",
      spent: "4,494.2",
    },
    status: "completed",
    spent: "$1,429.1",
  },
  {
    id: "4",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi",
      icon: [
        "v1741861900/coin-01-sm-light_hgzpka.svg",
        "v1741861900/coin-01-sm-dark_hkrvvm.svg",
      ],
    },
    out: {
      symbol: "TOK",
      name: "Token",
      icon: [
        "v1741861900/coin-02-sm-light_t1qflr.svg",
        "v1741861900/coin-02-sm-dark_iqldgv.svg",
      ],
    },
    fees: "$42.1",
    change: {
      received: "13,229",
      spent: "7,872.1",
    },
    status: "completed",
    spent: "$3,411.21",
  },
  {
    id: "5",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi",
      icon: [
        "v1741861900/coin-01-sm-light_hgzpka.svg",
        "v1741861900/coin-01-sm-dark_hkrvvm.svg",
      ],
    },
    out: {
      symbol: "TOK",
      name: "Token",
      icon: [
        "v1741861900/coin-02-sm-light_t1qflr.svg",
        "v1741861900/coin-02-sm-dark_iqldgv.svg",
      ],
    },
    fees: "$24.7",
    change: {
      received: "14,457",
      spent: "12,226",
    },
    status: "completed",
    spent: "$12,317.9",
  },
];

export function TransactionsTable() {
  const [currentPage] = useState(1);
  const totalPages = 12;

  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table className="px-6 border-separate border-spacing-0 [&_tr_td]:border-b [&_tr_td]:border-border/64 dark:[&_tr_td]:border-card/80">
          <TableHeader>
            <TableRow className="hover:bg-transparent border-0">
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal">
                Date
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal">
                Conversion
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal">
                Fees
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal">
                Change
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal text-center">
                Status
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal">
                Spent
              </TableHead>
              <TableHead className="relative h-8 select-none bg-muted dark:bg-card/48 border-0 first:rounded-l-lg last:rounded-r-lg font-normal text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="hover:bg-transparent">
                <TableCell className="text-foreground/70 whitespace-nowrap">
                  {item.date}
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="max-[1320px]:hidden shrink-0 rounded-full shadow-xs">
                        <img
                          className="dark:hidden"
                          src={basePath + item.in.icon[0]}
                          alt={item.in.name}
                        />
                        <img
                          className="hidden dark:block"
                          src={basePath + item.in.icon[1]}
                          alt={item.in.name}
                        />
                      </div>
                      <span>{item.in.symbol}</span>
                    </div>
                    <RiArrowRightLine
                      size={16}
                      className="text-muted-foreground/50"
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-2">
                      <div className="max-[1320px]:hidden shrink-0 rounded-full shadow-xs">
                        <img
                          className="dark:hidden"
                          src={basePath + item.out.icon[0]}
                          alt={item.out.name}
                        />
                        <img
                          className="hidden dark:block"
                          src={basePath + item.out.icon[1]}
                          alt={item.out.name}
                        />
                      </div>
                      <span>{item.out.symbol}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-foreground/70">
                  {item.fees}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Badge className="text-sm font-normal bg-emerald-500/12 text-emerald-600 border-0 py-0.5 px-2">
                      {item.change.received}
                    </Badge>
                    <RiArrowRightLine
                      size={16}
                      className="text-muted-foreground/50"
                      aria-hidden="true"
                    />
                    <Badge className="text-sm font-normal bg-red-500/12 text-red-500 border-0 py-0.5 px-2">
                      {item.change.spent}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {item.status === "completed" && (
                    <>
                      <span className="sr-only">Completed</span>
                      <RiCheckLine
                        size={16}
                        className="inline-flex text-emerald-500"
                      />
                    </>
                  )}
                  {item.status === "failed" && (
                    <>
                      <span className="sr-only">Failed</span>
                      <RiCloseLine
                        size={16}
                        className="inline-flex text-red-500"
                      />
                    </>
                  )}
                </TableCell>
                <TableCell className="font-medium">{item.spent}</TableCell>
                <TableCell className="py-0 text-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="shadow-none text-muted-foreground/50 dark:hover:bg-card/64"
                    aria-label="Edit item"
                  >
                    <RiRefreshLine size={16} aria-hidden="true" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-5 px-6">
          <PaginationContent className="w-full justify-between">
            <PaginationItem>
              <PaginationLink
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "size-8 p-0 aria-disabled:pointer-events-none aria-disabled:text-muted-foreground/50 border-none hover:bg-muted/50 dark:bg-card/64 dark:hover:bg-card/80 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0_1px_1px_rgba(0,0,0,0.05),0_2px_2px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] dark:inset-shadow-[0_1px_rgb(255_255_255/0.15)]",
                )}
                href={
                  currentPage === 1 ? undefined : `#/page/${currentPage - 1}`
                }
                aria-label="Go to previous page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <RiArrowLeftSLine
                  className="size-5"
                  size={20}
                  aria-hidden="true"
                />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <p className="text-muted-foreground text-sm" aria-live="polite">
                Page <span className="text-foreground">{currentPage}</span> of{" "}
                <span className="text-foreground">{totalPages}</span>
              </p>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "size-8 p-0 aria-disabled:pointer-events-none aria-disabled:text-muted-foreground/50 border-none hover:bg-muted/50 dark:bg-card/64 dark:hover:bg-card/80 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0_1px_1px_rgba(0,0,0,0.05),0_2px_2px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] dark:inset-shadow-[0_1px_rgb(255_255_255/0.15)]",
                )}
                href={
                  currentPage === totalPages
                    ? undefined
                    : `#/page/${currentPage + 1}`
                }
                aria-label="Go to next page"
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? "link" : undefined}
              >
                <RiArrowRightSLine
                  className="size-5"
                  size={20}
                  aria-hidden="true"
                />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
