import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
      // backgroundColor: '#ddd',
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: "none",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      color: theme.palette.primary.main,
    },
    list: {
      listStyle: "none",
      display: "flex",
    }
  }),
)

export const Footer = () => {
  const classes = useStyles()

  return (
      <Typography className={classes.root} component="footer">
        <Grid container justify="space-between" alignItems="center">
          <Grid item md={6}>
            <Typography variant="h6">
              Emoi
            </Typography>
          </Grid>
          <Typography className={classes.list} component="ul">
            <Typography component="li" variant="subtitle1">
              <Link className={classes.link} to="/terms">利用規約</Link>
            </Typography>
            <Typography component="li" variant="subtitle1">
              <Link className={classes.link} to="/privacy">プライバシーポリシー</Link>
            </Typography>
          </Typography>
        </Grid>
      </Typography>
  )
}