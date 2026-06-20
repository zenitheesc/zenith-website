type NavLinkType = {
  href: string;
  labelKey: string;
  external?: boolean;
};

export const NAV_LINKS: readonly NavLinkType[] = [
  { href: '/zenith', labelKey: 'common:NAVBAR.ABOUT_US' },
  { href: '/projetos', labelKey: 'common:NAVBAR.PROJECTS' },
  { href: '/kurumim', labelKey: 'common:NAVBAR.KURUMIM' },
  { href: '/processo-seletivo', labelKey: 'common:NAVBAR.RECRUITMENT_PROCESS' },
  { href: '/launches', labelKey: 'common:NAVBAR.LAUNCHES' }
  // { href: 'https://ob-site.vercel.app/', labelKey: 'common:NAVBAR.OBSAT', external: true }
] as const;
