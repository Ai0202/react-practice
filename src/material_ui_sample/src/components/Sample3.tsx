import React, { FC } from "react";
import { Card } from "./Card";
import { Title } from "./Title";
import { Menu } from "./menu";
import { Profile } from "./Profile";
import { Grid } from '@material-ui/core'

export const Sample3: FC = () => {
  const members = [
    {id: 1, name: 'atsushi'},
    {id: 2, name: 'wes'},
    {id: 3, name: 'jes'},
  ]
  
  return (
    <>
      <Title title="マイページ" />
      <Menu />
      <Profile />
      {/* <Grid container spacing={5} >
        {members.map(member => <Card key={member.id} name={member.name} />)}
      </Grid> */}
    </>
    
  )
}