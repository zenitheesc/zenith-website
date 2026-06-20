import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Menu, List, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './NavLinks';

export default function NavHeader() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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

          <IconButton
            onClick={menuOpen ? handleClose : handleOpen}
            sx={menuButtonSx}
            aria-label={menuOpen ? 'fechar menu' : 'abrir menu'}
          >
            {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        slotProps={menuSlotProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <List sx={menuListSx} aria-label="links de navegação">
          <NavLinks mobile onNavigate={handleClose} />
        </List>
      </Menu>
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

const menuSlotProps = {
  paper: {
    sx: {
      backgroundColor: 'black',
      width: '100vw',
      maxWidth: '100vw',
      left: '0 !important'
    }
  }
};

const menuListSx = { backgroundColor: 'black', width: '100%' };
