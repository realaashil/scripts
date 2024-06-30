'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { NavBarMenu } from "./NavBarMenu";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-pink-500">PortFolio Website</p>
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
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Contact Me
          </Button>
        </NavbarItem>
        < NavBarMenu />
      </NavbarContent>
    </Navbar>
  )
}
