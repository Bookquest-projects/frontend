import { Button } from '@nextui-org/button';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import clsx from 'clsx';
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon, Logo } from '@/components/icons';
import { useAuth } from '@/auth/AuthProvider.tsx';
import { UserCard } from '@/components/UserCard.tsx';

export const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  return (
    <NextUINavbar
      className="bg-gradient-to-r from-primary-500 to-[#ffffff] dark:from-primary"
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent justify="center">
        <NavbarMenuToggle />
        <NavbarBrand className="gap-4">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            to="/"
          >
            <Logo />
            <p className="font-bold text-inherit hidden sm:block">Bookquest</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link to={siteConfig.links.github}>
          <GithubIcon className="text-foreground" />
        </Link>
        <ThemeSwitch />
        {isAuthenticated ? (
          <Popover showArrow placement="bottom">
            <PopoverTrigger className={clsx('cursor-pointer')}>
              <Avatar size="sm" />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard />
            </PopoverContent>
          </Popover>
        ) : (
          <Button
            color="secondary"
            onClick={() => {
              navigate('/login');
            }}
          >
            <p>Login</p>
          </Button>
        )}
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={item.label === 'Search' ? 'primary' : 'foreground'}
                to={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {isAuthenticated
            ? siteConfig.authNavMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link color="foreground" to={item.href}>
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))
            : null}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
