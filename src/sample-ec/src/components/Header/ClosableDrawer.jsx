import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Drawer, 
         List,
         ListItem,
         ListItemIcon, 
         ListItemText } from '@material-ui/core'
import { TextInput } from '../UIkit'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../reducks/users/operations'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import HistoryIcon from '@material-ui/icons/History'
import PersonIcon from '@material-ui/icons/Person'
import { push } from 'connected-react-router'

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 256,
        flexShrink: 0,
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 256,
    },
    searchField: {
      alignItems: 'center',
      display: 'flex',
      marginLeft: 32
    }
  }),
);

const ClosableDrawer = ({ open, onClose, container }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const selectMenu = (event, path) => {
    dispatch(push(path))
    onClose(event)
  }

  const [searchKeyword, setSearchKeyword] = useState("")
  const [filters, setFilters] = useState([
    { func: selectMenu, label: "すべて", id: "all", value: "" },
    { func: selectMenu, label: "メンズ", id: "male", value: "?gender=male" },
    { func: selectMenu, label: "レディース", id: "female", value: "?gender=female" },
  ])

  const inputSearchKeyword = useCallback(e => {
    setSearchKeyword(e.target.value)
  }, [])

  const menus = [
    { func: selectMenu, label: "商品登録", icon: <AddCircleIcon />, id: "register", value: "/products/edit" },
    { func: selectMenu, label: "注文履歴", icon: <HistoryIcon />, id: "history", value: "/order/history" },
    { func: selectMenu, label: "プロフィール", icon: <PersonIcon />, id: "profile", value: "/user/profile" },
  ];

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={open}
        onClose={e => onClose(e)}
        onKeyDown={e => onClose(e)}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div
          onClose={e => onClose(e)}
          onKeyDown={e => onClose(e)}
        >
          <div className={classes.searchField}>
            <TextInput 
              fullWidth={false} 
              label={"キーワードを入力"} 
              multiline={false}
              onChange={inputSearchKeyword} 
              required={false} 
              rows={1} 
              value={searchKeyword} 
              type={"text"}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>              
            ))
            }
            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {filters.map(filter => (
              <ListItem button key={filter.id} onClick={(e) => filter.func(e, filter.value)}>
                <ListItemText primary={filter.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  )
}

export default ClosableDrawer