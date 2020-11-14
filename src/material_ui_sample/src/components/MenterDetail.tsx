import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import { Title } from "./Title";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  }),
)

export const MenterDetail: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Title title="メンター紹介" />
      <Paper>
        <Typography>
          自己紹介

          
        </Typography>
      </Paper>
    </>
  )
}