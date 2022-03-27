import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useUser } from 'reactfire';
import firebase from 'firebase';
import useStyles from './useStyleMUI';
import clearFirestoreCache from '../../../common/clearFirestoreCache';
import { UIContext } from '../UIContext';

const getInitials = (user: string) => {
  const names = user.split(' ');
  let initials = names[0]?.substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export default function AccountMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const classes = useStyles();

  const {
    data: user,
    // hasEmitted,
    firstValuePromise,
  } = useUser();

  const { setAlert } = useContext(UIContext);
  const handleSignout = async () => {
    try {
      await firebase.auth().signOut();

      clearFirestoreCache();
      history.push('/login');
    } catch (error) {
      if (error) {
        setAlert({
          show: true,
          severity: 'error',
          message: `Logout fail ${user?.email}`,
        });
      }
    }
  };
  return (
    <>
      <Box className={classes.box}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ ml: -0.5, mr: 1 }}>
              {user.displayName ? getInitials(user?.displayName) : 'U'}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleSignout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
