import React from 'react';
// MATERIAL UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import heroImg from '../../../images/Hero.jpg';
import logoImg from '../../../images/logo.svg';

interface GuestLayoutProps {
  children: React.ReactElement;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <Box display="flex">
      <Box>
        <img src={heroImg} alt="house with three" />
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <Container fixed maxWidth="sm">
          <Grid mt={6} mb={3} textAlign="center">
            <img src={logoImg} alt="logo" />
          </Grid>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default GuestLayout;
