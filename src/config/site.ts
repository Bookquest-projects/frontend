export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bookquest',
  navMenuItems: [
    {
      label: 'Profile',
      href: '/bookquest/profile',
    },
    {
      label: 'Search',
      href: '/bookquest/search',
    },
    {
      label: 'Projects',
      href: '/bookquest/projects',
    },
    {
      label: 'Bookshelf',
      href: '/bookshelf',
    },
  ],
  links: {
    github: 'https://github.com/Bookquest-projects',
  },
};
