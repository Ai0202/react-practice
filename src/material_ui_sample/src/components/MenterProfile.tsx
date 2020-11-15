import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Avatar, Chip, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
      marginRight: theme.spacing(2),
    },
    mb2: {
      marginBottom: theme.spacing(2)
    },
    mr2: {
      marginRight: theme.spacing(2)
    }
  }),
)

export const MenterProfile = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" className={classes.mb2}>
        <Grid item xs={12} alignItems="center" container>
          <Avatar alt="Travis Howard" src="/images/mio_imada.jpg" className={classes.large} />
          <Grid item xs={9} container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" component="h3">
                名前
              </Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <Chip color="primary" variant="outlined" clickable label="恋愛" />
              </Grid>
              <Grid item>
                <Chip color="primary" variant="outlined" clickable label="ファッション" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item xs={12} alignItems="center" className={classes.mb2}>
          <Typography variant="h4" component="h3" display="inline" className={classes.mr2}>
            プロフィール
          </Typography>
          <Button color="primary">メッセージを送る</Button>
        </Grid>
        <Typography variant="subtitle1" component="p">
          自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。
          自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。自己紹介本文が入ります。
        </Typography>
      </Grid>
    </Paper>
  )
}
