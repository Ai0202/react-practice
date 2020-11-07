import React, { FC } from "react";
import { makeStyles, Theme, createStyles, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      margin: 'auto',
      maxWidth: 600,
    }
  })
)

type Props = {
  name: string
}

export const Card: FC<Props> = ({ name }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} xl={4}>
      <Paper className={classes.paper}>
        テスト
      </Paper>
    </Grid>
  )
}
