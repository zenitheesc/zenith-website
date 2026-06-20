import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Drawer, List, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './NavLinks';

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar position="relative" elevation={0} sx={appBarSx}>
        <Toolbar sx={toolbarSx}>
          <a href="./">
            <img src="/images/NavigationBar/logo.svg" alt="Zenith Logo" width="150px" height="79px" />
          </a>

          <Box sx={desktopNavSx}>
            <NavLinks />
          </Box>

          <IconButton onClick={() => setMenuOpen(true)} sx={menuButtonSx} aria-label="abrir menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={menuOpen} onClose={() => setMenuOpen(false)} slotProps={drawerSlotProps}>
        <List sx={drawerListSx} aria-label="links de navegação">
          <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
        </List>
        <Box sx={drawerHeaderSx}>
          <IconButton onClick={() => setMenuOpen(false)} sx={closeButtonSx} aria-label="fechar menu" size="large">
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}

const appBarSx = {
  backgroundColor: 'transparent',
  zIndex: 3
};

const toolbarSx = {
  justifyContent: 'space-between',
  alignItems: 'center',
  px: { xs: '1.5em', md: '2em' },
  height: '90px',
  minHeight: '90px !important'
};

const desktopNavSx = { display: { xs: 'none', md: 'flex' } };

const menuButtonSx = { display: { xs: 'flex', md: 'none' }, color: 'white' };

const drawerHeaderSx = {
  display: 'flex',
  justifyContent: 'center',
  px: '1.5em',
  pt: 1,
  backgroundColor: 'black'
};

const closeButtonSx = { color: 'white' };

const drawerSlotProps = {
  paper: { sx: { backgroundColor: 'black' } }
};

const drawerListSx = { backgroundColor: 'black', height: '100%' };
