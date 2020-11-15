import React, { FC } from "react";
import { Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    mb: {
      marginBottom: "8px"
    }
  })
)

type Props = {
  title: string
}

export const SubTitle: FC<Props> = ({ title }) => {
  const classes = useStyles()

  return (
    <Typography color="primary" variant="subtitle1" component="h3" className={classes.mb}>
      { title }
    </Typography>
  )
}