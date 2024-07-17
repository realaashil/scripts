import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";
import { Nav } from "./Navbar";
import { ParticlesEffect } from "./components/ParticlesEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Next.js",
  description: "A Portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
