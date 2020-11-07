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
    }
  })
)

export const MessageList: FC = () => {
  const classes = useStyles()

  const menters = [
    { id: "1", name: "Atsushi Ikeda", image: "" },
    { id: "2", name: "Takuma Totani", image: "" },
    { id: "3", name: "Kuwahara Rinako", image: "" },
  ]

  return (
    <>
      <Title title="メッセージ一覧" />
      {menters.map((menter) => (
        <Box py={1}>
          <Link className={classes.link} key={menter.id} to={`/menter/${menter.id}/message`}>
            <Paper className={classes.paper}>
              <Grid container alignItems="center">
                <Avatar className={classes.mr} alt="Remy Sharp" src={menter.image} />
                <Typography>
                  {menter.name}
                </Typography>
              </Grid>
            </Paper>
          </Link>
        </Box>
      ))}
    </>
  )
}