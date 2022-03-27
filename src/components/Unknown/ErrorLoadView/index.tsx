import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './useStyleMUI';

const ErrorLoadView = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography
        className={classes.title}
        p={50}
        color="secondary"
        variant="h3"
      >
        Failed to load the flat
      </Typography>
    </Box>
  );
};
export default ErrorLoadView;
