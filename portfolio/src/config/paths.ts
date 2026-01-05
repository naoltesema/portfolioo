// Simple path configuration for client-side routing
export const paths = {
  home: {
    getHref: () => '/',
  },
  app: {
    blogs: {
      getHref: () => '/blogs',
    },
    projects: {
      getHref: () => '/projects',
    },
    bucketList: {
      getHref: () => '/bucket-list',
    },
  },
  landing: {
    projects: {
      getHref: () => '/projects',
    },
    blogs: {
      getHref: () => '/blogs',
    },
  },
  social: {
    twitter: {
      getHref: () => '#',
    },
  },
};

