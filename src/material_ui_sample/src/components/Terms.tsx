import React, { FC } from "react";
import { makeStyles, Theme, createStyles, Grid, Paper, Typography } from '@material-ui/core'
import { Title } from "./Title";
import { StaticText } from "./StaticText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      margin: 'auto',
      lineHeight: 2
    }
  })
)

export const Terms: FC = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} >
      <Title title="利用規約" />
      <Paper className={classes.paper}>
        <StaticText 
          title="第1条"
          body="ほげほげ"
        />
        <StaticText 
          title="第2条"
          body="フガフガ"
        />
      </Paper>
    </Grid>
  )
}
