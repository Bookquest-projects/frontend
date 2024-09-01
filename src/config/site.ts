export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bookquest',
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Search',
      href: '/search',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ],
  links: {
    github: 'https://github.com/Bookquest-projects',
  },
};
