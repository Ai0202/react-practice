import React, { FC } from "react";
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    mb: {
      marginBottom: "16px"
    }
  })
)

export const Menu: FC = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.mb}>
      <Grid item xs={12} sm={3}>
        <Typography color="primary" variant="subtitle1">
          プロフィール
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography color="primary" variant="subtitle1">
          予約一覧
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Typography color="primary" variant="subtitle1">
          購入履歴
        </Typography>
      </Grid>
    </Grid>
  )
}