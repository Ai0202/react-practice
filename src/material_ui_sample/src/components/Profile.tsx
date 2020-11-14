import React, { FC } from "react";
import { Typography, Paper, Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    title: {
      margin: "32px 0 8px"
    },
    subTitle: {
      margin: "8px 0 0"
    },
    formField: {
      margin: "8px 0"
    },
    button: {
      margin: "16px 0"
    },
    careerSpan: {
      margin: "8px 0"
    }
  })
)

export const Profile: FC = () => {
  const classes = useStyles();

  const handleChange = () => {
    console.log(123);
  }

  return (
    <Paper>
      <Box p={5}>
        <TextField
          fullWidth
          className={classes.formField}
          label="名前"
          value=""
          onChange={(e) => handleChange()}
        />
        <TextField
          fullWidth
          multiline
          className={classes.formField}
          rows={5}
          label="自己紹介"
          value=""
          onChange={(e) => handleChange()}
        />
        <TextField
          fullWidth
          multiline
          className={classes.formField}
          rows={5}
          label="相談したいこと"
          value=""
          onChange={(e) => handleChange()}
        />
        <FormControl className={classes.formField}>
          <FormLabel>性別</FormLabel>
          <RadioGroup value="" onChange={(e) => handleChange()}>
            <FormControlLabel value="male" label="男性" control={<Radio color="primary" />} />
            <FormControlLabel value="female" label="女性" control={<Radio color="primary" />} />
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  )
}