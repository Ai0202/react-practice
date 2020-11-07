import React from 'react';
// import { theme } from './materialui/theme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Router } from './Router';
import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      backgroundColor: theme.palette.background.default
    }
  })
)

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.bg} maxWidth={false}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Router />
        </Box>
      </Container>
    </Container>
  );
}

export default App;
