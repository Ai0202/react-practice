import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'
import { MenterCard } from "./MenterCard";
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

export const MenterList: FC = () => {
  const classes = useStyles()
  const menters = [
    { url: '1', name: 'ikeda' },
    { url: '2', name: 'totani' },
    { url: '3', name: 'tokunaga' },
    { url: '4', name: 'hayama' },
    { url: '5', name: 'kuwabara' },
  ]

  return (
    <>
      <Title title="メンターを探す" />
      {/* <MenterFilter /> */}
      <Grid container spacing={5}>
        {menters.map(menter => (
          <MenterCard key={menter.name} name={menter.name} url={menter.url} />
        ))}
      </Grid>
    </>
  )
}
