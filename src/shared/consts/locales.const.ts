export const LAUNCHES = {
  META_TAGS: {
    PAGE_NAME: 'allLaunches:metaTags.pageName',
    LANG: 'allLaunches:metaTags.lang',
    PAGE_TITLE: 'allLaunches:metaTags.pageTitle',
    TITLE: 'allLaunches:metaTags.title',
    DESCRIPTION: 'allLaunches:metaTags.description',
    SUBTITLE: 'allLaunches:metaTags.subtitle'
  },
  ACTIONS: {
    REFRESH: 'allLaunches:actions.refresh',
    REFRESH_SUCCESS: 'allLaunches:actions.refreshSuccess'
  }
} as const;

export const LOCALE = {
  LAUNCHES
};
