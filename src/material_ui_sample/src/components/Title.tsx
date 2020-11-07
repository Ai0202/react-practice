import React, { FC } from "react";
import { Typography } from '@material-ui/core'

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <Typography color="primary" variant="h6" component="h1" gutterBottom>
      { title }
    </Typography>
  )
}