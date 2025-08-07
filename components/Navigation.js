import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image
} from "@heroui/react";
import React from "react";
import { usePathname } from "next/navigation";
import NextImage from "next/image";
import NextLink from "next/link"

export const WebsiteLogo = () => {
  return (
    <NextLink href="/">
      <Image
        src="/android-chrome-512x512.png"
        height={36} viewBox="0 0 32 32"
        width={36}
        as={NextImage}
      />
    </NextLink>
  );
};

export default function Navigation() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "Blog", href: "/blog" },
    { title: "Photography", href: "/photography" },
    { title: "Pokémon", href: '/pokemon' },
    { title: "Videos", href: "/videos" },
  ]
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <WebsiteLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <WebsiteLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`} isActive={pathname == item.href}>
              <Link color={pathname == item.href ? "primary":"foreground"} href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="dark bg-black text-foreground bg-opacity-80">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`} isActive={pathname == item.href}>
            <Link
              className="w-full"
              color={
                pathname == item.href ? "primary" : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}