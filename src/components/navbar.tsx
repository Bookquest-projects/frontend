import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { SearchInput } from "@/components/SearchInput.tsx";
import { useAuth } from "@/auth/AuthProvider.tsx";
import { UserCard } from "@/components/UserCard.tsx";

export const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-4 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/frontend/"
          >
            <Logo />
            <p className="font-bold text-inherit">Bookquest</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-foreground" />
        </Link>
        <ThemeSwitch />
        {isAuthenticated ? (
          <Popover showArrow placement="bottom">
            <PopoverTrigger className={clsx("cursor-pointer")}>
              <Avatar size="sm" />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard />
            </PopoverContent>
          </Popover>
        ) : (
          <Button
            color={"secondary"}
            variant={"shadow"}
            onClick={() => {
              navigate("/frontend/login");
            }}
          >
            <p>Login</p>
          </Button>
        )}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={item.label === "Projects" ? "primary" : "foreground"}
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
