
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scheme-only-dark">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <header style={{ padding: "1rem", borderBottom: "1px solid #333" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/chat">Chat</Link>
            <Link href="/charts">Charts</Link>
            <Link href="/crypto">Crypto</Link>
            <Link href="/stocks">Stocks</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/schemavisualizer">Schema Visualizer</Link>
          </nav>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
