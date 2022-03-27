import React from 'react';
import { AppBar, Button, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from '../AccountMenu';

const NavBar: React.FC = () => {
  return (
    <AppBar>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            // className={classes.burger_menu}
            color="primary"
          >
            <MenuIcon color="secondary" />
          </Button>
          <Typography fontSize={20} color="secondary">
            Voypost
          </Typography>
        </Box>
        <AccountMenu />
      </Box>
    </AppBar>
  );
};

export default NavBar;
