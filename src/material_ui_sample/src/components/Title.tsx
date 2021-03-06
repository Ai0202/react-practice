import React, { FC } from "react";
import { Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    mb: {
      marginBottom: "16px"
    }
  })
)

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  const classes = useStyles()

  return (
    <Typography color="primary" variant="h6" component="h1" className={classes.mb}>
      { title }
    </Typography>
  )
}