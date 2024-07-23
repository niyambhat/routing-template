import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="body1">My sticky footer can be found here.</Typography>
        <Typography variant="body2" color="inherit">
          © 2024 My Application
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
