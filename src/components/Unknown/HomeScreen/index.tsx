import { Box, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './useStyleMUI';

const HomeScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Link
        color="common.white"
        className={classes.nav_flats}
        component={RouterLink}
        to="/flats"
      >
        Explore Flats
      </Link>
    </Box>
  );
};

export default HomeScreen;
