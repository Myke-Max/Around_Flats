import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './useStyleMUI';

const LoadingFlatView = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography
        className={classes.title}
        p={50}
        color="secondary"
        variant="h3"
      >
        Loading flat details
      </Typography>
    </Box>
  );
};
export default LoadingFlatView;
