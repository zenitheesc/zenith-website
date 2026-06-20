import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Box, Button, ListItem } from '@mui/material';
import { NAV_LINKS } from '@/src/shared/consts/navLinks.const';

interface NavLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
  sx?: object;
}

export default function NavLinks({ mobile, onNavigate, sx }: NavLinksProps) {
  const { t } = useTranslation();

  const buttonSx = {
    color: 'white',
    fontWeight: 300,
    fontSize: '18px',
    textTransform: 'none',
    '&:hover': { color: 'lightgray', backgroundColor: 'transparent' }
  };

  const mobileItemSx = {
    borderBottom: '1px solid rgba(169, 169, 169, 0.3)',
    py: '1.2em',
    px: '1.5em'
  };

  if (mobile) {
    return (
      <>
        {NAV_LINKS.map((link) => (
          <ListItem key={link.href} sx={mobileItemSx}>
            <Button component={link.external ? 'a' : Link} href={link.href} onClick={onNavigate} disableRipple sx={buttonSx}>
              {t(link.labelKey)}
            </Button>
          </ListItem>
        ))}
      </>
    );
  }

  return (
    <Box component="nav" sx={{ display: 'flex', gap: 1, ...sx }}>
      {NAV_LINKS.map((link) => (
        <Button key={link.href} component={link.external ? 'a' : Link} href={link.href} disableRipple sx={buttonSx}>
          {t(link.labelKey)}
        </Button>
      ))}
    </Box>
  );
}
