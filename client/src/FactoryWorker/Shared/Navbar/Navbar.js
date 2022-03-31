import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link, useHistory, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ListAltIcon from '@mui/icons-material/ListAlt';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../Background/StarryNight.css';

import Homepage from "../../Pages/Homepage"
import ManufactureSelect from "../../Pages/ManufactureSelect";
import ManufactureHistory from "../../Pages/ManufactureHistory";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import BuyAccessories from "../../Pages/BuyAccessories";
import BuyCategory from "../../Pages/BuyCategory";
import BuyItem from "../../Pages/BuyItem";
import BuyCart from "../../Pages/BuyCart";


import Inspection from "../../Pages/Inspection";
import Issue from "../../Pages/Issue";




const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    // padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3
  },
  logoLg: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    }
  }
});

const Navbar = (props) => {
  const { classes, theme, setLoggedIn } = props;

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
      console.log();
      if(location.pathname == '/factory-worker') {
          console.log("pushing / to URL");
          history.push("/");
      }
  })

  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  console.log("variable ", matches)
  
  useEffect(() => {
    setOpen(matches ? true : false)
  }, [matches])

  const handleDrawerOpen = () => {
    if(open)
      setOpen(false);
    else
      setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleLogout = () => {
    setLoggedIn(null);
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        {/* This is the top horizontal bar */}
        <AppBar
          position="fixed"
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed
                }}
              />
            </IconButton>
            
            <Typography
              variant="h6"
              color="inherit"
              className={classes.logoLg}
              noWrap
            >
              RobIN | Robust Intelligent Network
            </Typography>

            <Typography
              variant="h6"
              color="inherit"
              className={classes.logoSm}
              noWrap
            >
              RobIN
            </Typography>

            <div>
              <IconButton
                aria-owns={anchorEl ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={anchorEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        {/* This is for vertical side drawer */}
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar} />
          <List>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </ListItem>
              </Link>

              <Link to="/manufacture" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <HandymanIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manufacture" />
                </ListItem>
              </Link>

              <Link to="/buyaccessories" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingBagIcon />
                  </ListItemIcon>
                  <ListItemText primary="BuyAccessories" />
                </ListItem>
              </Link>

              <Link to="/inspection" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <HourglassBottomIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inspection" />
                </ListItem>
              </Link>

              <Link to="/issue" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Issues" />
                </ListItem>
              </Link>

          </List>
          <Divider />
          {/* <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />


          {/* <AppBreadCrumb/> */}
        
        
          <div className = 'back'>
            <Switch>
              <Route path='/' exact component={Homepage} ></Route>
              <Route path='/manufacture' exact component={ManufactureSelect}></Route>
              <Route path='/manufacturehistory' exact component={ManufactureHistory}></Route>
              
              <Route path='/buyaccessories' exact component={BuyAccessories} ></Route>
              <Route path='/buycat' exact component={BuyCategory}></Route>
              <Route path='/buyitem' exact component={BuyItem}></Route>
              <Route path='/buycart' exact component={BuyCart}></Route>
              

              {/* <Route path='/buycat' exact component={BuyItem}></Route> */}
              
              {/* <Route path='/buyaccessories' exact component={BuyCategory} ></Route> */}

              <Route path='/inspection' exact component={Inspection}></Route>
              <Route path='/issue' exact component={Issue}></Route>
              
            </Switch>
        </div>
        </main>
      </Router>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Navbar);