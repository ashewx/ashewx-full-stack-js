import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,Image} from "@heroui/react";

export const WebsiteLogo = () => {
  return (
    <Image src="/android-chrome-512x512.png" height={36} viewBox="0 0 32 32" width={36} />
  );
};

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <WebsiteLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Link 1
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Link 2
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Link 3
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}