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
import { SearchInput } from '@/components/SearchInput.tsx';

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
            to="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Bookquest</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
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
            variant="shadow"
            onClick={() => {
              navigate('/login');
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
                color={item.label === 'Search' ? 'primary' : 'foreground'}
                to={item.href}
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
