import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default PageLayout;
