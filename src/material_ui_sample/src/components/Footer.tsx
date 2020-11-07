import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: '#ddd',
      padding: theme.spacing(6),
    },
  }),
)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Takuma Totani
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography variant="h6" align="center" gutterBottom>
        Emoi
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  )
}