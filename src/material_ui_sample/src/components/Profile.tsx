import React, { FC } from "react";
import { Typography, Paper, Box } from '@material-ui/core'

export const Profile: FC = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h2">
          自己紹介
          ニックネーム
          first name
          last name
          生年月日
          メールアドレス
          電話番号
          性別
          恋愛対象
          相談したいこと
        </Typography>
      </Box>
    </Paper>
  )
}