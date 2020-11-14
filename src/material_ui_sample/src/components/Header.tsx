import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import PolicyIcon from '@material-ui/icons/Policy';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    link: {
      textDecoration: "none",
      color: "inherit"
    },
  }),
);

export const Header: FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false)
  let isLogin = true;

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
    if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(isOpen)
  }

  const pageList = [
      [
        {name: 'マイページ', url: '/mypage', icon: <PersonIcon />},
        {name: 'メッセージ', url: '/menter/message', icon: <MessageIcon />}
      ],
      [
        {name: 'メンター一覧', url: '/menters', icon: <PeopleIcon />},
        {name: 'チケット購入', url: '/ticket', icon: <PaymentIcon />}
      ],
      [
        {name: '利用規約', url: '/terms', icon: <SpeakerNotesIcon />},
        {name: 'プライバシーポリシー', url: '/privacy', icon: <PolicyIcon />},
        {name: 'お問い合わせ', url: '/report', icon: <MessageIcon />}
      ]
  ]

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {pageList.map((pagelinks, index) => (
        <div key={index}>
          <List>
            {pagelinks.map((page) => (
              <Link key={page.name} to={page.url} className={classes.link}>
                <ListItem button>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar>
          <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Emoi
          </Typography>
          <Button color="inherit">
            {isLogin ? 
              <Link to="/signin" className={classes.link}>
                ログアウト
              </Link>
              :
              <Link to="/signin" className={classes.link}>
                ログイン
              </Link>      
          }
            </Button>
          <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}