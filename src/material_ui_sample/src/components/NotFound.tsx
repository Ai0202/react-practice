import React, { FC } from "react";
import { Typography, Paper, Box } from '@material-ui/core'

export const NotFound: FC = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h2">
          404
        </Typography>
      </Box>
    </Paper>
  )
}