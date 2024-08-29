import { Button } from "@nextui-org/button";
<<<<<<< HEAD
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
=======
>>>>>>> cdce760 (feat: add login/logout logic)
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
<<<<<<< HEAD
=======
  NavbarItem,
>>>>>>> cdce760 (feat: add login/logout logic)
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
<<<<<<< HEAD
import { Tooltip } from "@nextui-org/react";

import { GithubIcon, Logo, SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
=======
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
>>>>>>> cdce760 (feat: add login/logout logic)

export const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  return (
    <NextUINavbar maxWidth="2xl" position="static">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-4">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/bookquest"
          >
            <Logo />
            <p className="font-bold text-inherit">Bookquest</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-foreground" />
        </Link>
        <ThemeSwitch />
<<<<<<< HEAD
        <Tooltip color="secondary" content="Not available yet">
          <Button isExternal as={Link} color="secondary" variant="shadow">
=======
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
>>>>>>> cdce760 (feat: add login/logout logic)
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
                color={item.label === "Search" ? "primary" : "foreground"}
                href={item.href}
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
