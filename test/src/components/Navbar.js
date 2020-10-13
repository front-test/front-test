import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, NavbarWrapper } from '../styles/Navbar.style';

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <NavbarWrapper>
      <div className={classes.root}>
        <AppBar className={classes.appbar} color="default">
          <Toolbar className={classes.toolbar}>
            <div>
              <Hidden xsDown>
                <Button className={window.location.pathname === '/' ? 'active-page' : ''}>Home</Button>
                <Button>About</Button>
                <Button>Portfolio</Button>
                <Button>Product</Button>
                <Button>Career</Button>
                <Button>Blog</Button>
              </Hidden>
              <Hidden smUp>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                  <MenuIcon fontSize="large" />
                </IconButton>
                <SwipeableDrawer open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                  <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                  >
                    <List>
                      {['Home', 'About', 'Portfolio', 'Product', 'Career', 'Blog'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </SwipeableDrawer>
              </Hidden>
            </div>
            <Typography variant="h6">LOGO</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </NavbarWrapper>
  );
};

export { Navbar };
