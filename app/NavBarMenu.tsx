import { NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';

export function NavBarMenu() {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link href='/resume.pdf' color='success' className='font-bold'>Resume</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='https://github.com/realaashil' color='danger' isExternal className='font-bold'>Github</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='https://linkedin.com/in/realaashil' color='primary' isExternal className='font-bold'>LinkedIn</Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
