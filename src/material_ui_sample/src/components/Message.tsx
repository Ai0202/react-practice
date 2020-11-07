import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { makeStyles, Theme, createStyles, Grid, Paper, Avatar, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    mr: {
      marginRight: theme.spacing(3),
    },
    link: {
      textDecoration: "none",
      color: theme.palette.primary.contrastText
    },
    messageBody: {
      marginLeft: theme.spacing(8),
      marginTop: theme.spacing(1),
    }
  })
)

export const Message: FC = () => {
  const classes = useStyles()
  const messages = [
    {id: 1, from: "Atsushi", image: "", sendDate: "2020/02/10 21:55", body: "本文"},
    {id: 2, from: "Rinako", image: "", sendDate: "2020/02/13 11:05", body: "本文"},
    {id: 3, from: "Atsushi", image: "", sendDate: "2020/02/16 13:15", body: "本文"},
    {id: 4, from: "Rinako", image: "", sendDate: "2020/02/20 00:54", body: "長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文"},
  ]

  return (
    <>
      <Title title="メッセージ" />
      {/* テキストエリア */}
      {/* 送信ボタン */}
      {/* アラート */}

      {messages.map((message) => (
        <Box key={message.id} py={1}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Avatar className={classes.mr} alt="Remy Sharp" src={message.image} />
              <Grid item xs={9} container justify="space-between">
                <Typography>
                  {message.from}
                </Typography>
                <Typography variant="body2">
                  {message.sendDate}
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.messageBody} xs={9}>
              <Typography>
                {message.body}
              </Typography>
            </Grid>
          </Paper>
        </Box>
      ))}
    </>
  )
}