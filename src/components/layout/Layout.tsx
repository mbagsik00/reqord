import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Sidebar from '../sidebar/Sidebar';
import { Copyright } from '../copyright/Copyright';
import Header from '../header/Header';

const mdTheme = createTheme();

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Header */}
        <Header open={open} toggleDrawer={toggleDrawer}/>

        {/* Sidebar Navigation */}
        <Sidebar open={open} toggleDrawer={toggleDrawer} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Contents will be here */}
            {children}

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
