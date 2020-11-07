import React, { FC } from "react";
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pb: {
      paddingBottom: theme.spacing(2),
    }
  })
)

type Props = {
  title: string,
  body: string,
}

export const StaticText: FC<Props> = ({ title, body }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography className={classes.pb} gutterBottom>
        {body}
      </Typography>
    </>
  )
}
