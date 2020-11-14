import React from 'react';
// import { theme } from './materialui/theme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Router } from './Router';
import { theme } from './materialui/theme';


function App() {
  return (
    <Box pt={10} pb={2} component="main" bgcolor={theme.palette.background.default}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Router />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
