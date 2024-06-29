import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Providers } from "./provider";
import "./globals.css";

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
          <Navbar maxWidth="full">
            <NavbarBrand>
              <Link href="/" color="foreground" className="font-bold">
                ABOUT ME
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link isBlock download color="success" href="/resume.pdf">
                  Resume
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link isExternal isBlock href="https://github.com/realaashil" color="danger">
                  Github
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link isExternal isBlock color="primary" href="https://www.linkedin.com/in/realaashil/">
                  LinkedIn
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
              <NavbarItem>
                <Link href="#" color="foreground">
                  Contact Me
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
