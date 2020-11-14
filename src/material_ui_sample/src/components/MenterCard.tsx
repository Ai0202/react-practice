import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Avatar, Chip } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      margin: 'auto',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    nameLink: {
        textDecoration: "none",
        color: theme.palette.primary.main
    },
    descriptionLink: {
        textDecoration: "none",
        color: theme.palette.grey[600]
    }
  }),
)

type Props = {
  url: string
  name: string
}

export const MenterCard: FC<Props> = ({name, url}) => {
//   const { name, url } = menter
  const detailUrl = `/menters/${url}`
  const classes = useStyles()

  return (
    <Grid item xs={12} md={6} xl={4}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap">
          <Grid item xs={3} justify="center" container>
            <Link to={detailUrl}>
              <Avatar alt="Travis Howard" src="/images/mio_imada.jpg" className={classes.large} />
            </Link>
          </Grid>
          <Grid item xs={9}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography color="primary" gutterBottom variant="subtitle1" component="h2">
                  <Link to={detailUrl} className={classes.nameLink}>
                    {name}
                  </Link>
                </Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Chip color="primary" variant="outlined" clickable label="恋愛" />
                  </Grid>
                  <Grid item>
                    <Chip color="primary" variant="outlined" clickable label="ファッション" />
                  </Grid>
                  <Grid item>
                    <Chip color="primary" variant="outlined" clickable label="深淵を覗くとき、、、" />
                  </Grid>
                  <Grid item>
                    <Chip color="primary" variant="outlined" clickable label="ファッション" />
                  </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom>
                  <Link to={detailUrl} className={classes.descriptionLink}>
                    あなたに会う服を、稀代のモテ男の私が選ぶ。 これであなたもモテ男になること間違いなし
                  </Link>
                </Typography>
                <Grid container>
                  <Grid container item>
                    <Typography variant="body2">評価</Typography>
                    <Rating name="evaluation" value={1} readOnly size="small" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
