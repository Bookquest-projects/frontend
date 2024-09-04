export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bookquest',
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Search',
      href: '/search',
    },
  ],
  links: {
    github: 'https://github.com/Bookquest-projects',
  },
  authNavMenuItems: [
    {
      label: 'Bookshelf',
      href: '/bookshelf',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
};
