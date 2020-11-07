import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    }
  })
)


export const Sample2 = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container justify="center" className={classes.root}>
          <Grid container item xs={12} justify="center">
            <Typography>テスト</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>テスト1</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>テスト2</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>テスト3</Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
        </Grid>
        <Grid container justify="center" spacing={4}>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
          <Grid container justify="center" item xs={4}><Paper className={classes.paper}>test</Paper></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}