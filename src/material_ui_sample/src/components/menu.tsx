import React, { FC } from "react";
import { Grid, Typography, Box } from '@material-ui/core'

export const Menu: FC = () => {
  return (
    <Box mb={3}>
      <Grid container>
        <Grid item xs={2}>
          <Typography color="primary" variant="subtitle1">
            プロフィール
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="primary" variant="subtitle1">
            予約一覧
          </Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography color="primary" variant="subtitle1">
            購入履歴
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}