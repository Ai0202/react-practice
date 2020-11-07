import React from 'react';
// import { theme } from './materialui/theme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Router } from './Router';


function App() {
  return (
    <Container maxWidth="md">
      <Box py={3}>
        <Router />
      </Box>
    </Container>
  );
}

export default App;
