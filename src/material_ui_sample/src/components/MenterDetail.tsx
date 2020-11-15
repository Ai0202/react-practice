import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { MenterProfile } from "./MenterProfile";

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
      <SubTitle title="自己紹介" />
      <MenterProfile />

      {/* <SubTitle title="口コミ" />
      <Paper>
        <Typography>
          口コミ
        </Typography>
      </Paper> */}

      <SubTitle title="予約" />
      <Paper>
        <Typography>
          予約
        </Typography>
      </Paper>
    </>
  )
}