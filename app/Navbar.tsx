'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { NavBarMenu } from "./NavBarMenu";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./components/ThemeSwitcher";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold">PortFolio Website</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="success" isBlock href="/resume.pdf">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="https://github.com/realaashil" aria-current="page" color="danger" isExternal isBlock>
            Github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" isExternal isBlock href="https://linkedin.com/in/realaashil">
            LinkedIn
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" isBlock isExternal href="#" className="pb-2">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar >
  )
}
