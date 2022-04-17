// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import { withStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import { Link } from "react-router-dom";
// import { yellow } from "@material-ui/core/colors";
// import HomeIcon from '@mui/icons-material/Home';
// import Home from "@mui/icons-material/Home";
// import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
// import SpeedIcon from '@mui/icons-material/Speed';
// import BuildIcon from '@mui/icons-material/Build';
// import StoreIcon from '@mui/icons-material/Store';
// import AgricultureIcon from '@mui/icons-material/Agriculture';
// import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
// import NotificationsIcon from '@mui/icons-material/Notifications';




// const drawerWidth = 220;

// const styles = theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: 'dodgerBlue'
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36
//   },
//   menuButtonIconClosed: {
//     transition: theme.transitions.create(["transform"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     transform: "rotate(0deg)"
//   },
//   menuButtonIconOpen: {
//     transition: theme.transitions.create(["transform"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     transform: "rotate(180deg)"
//   },
//   hide: {
//     display: "none"
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap"
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     overflowX: "hidden",
//     width: theme.spacing.unit * 7 + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing.unit * 9 + 1
//     }
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     marginTop: theme.spacing.unit,
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   toolbar1: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3
//   },
//   grow: {
//     flexGrow: 1
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(10),
//     "&:hover": {
//       color: yellow[600],
//       borderBottom: "1px solid white shadow",

//     },
//   },
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
// });

// class MiniDrawer extends React.Component {
//   state = {
//     open: false,
//     anchorEl: null
//   };



//   handleDrawerOpen = () => {
//     this.setState({ open: !this.state.open });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };
//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   handleLogout = () => {
//     this.props.setLoggedIn(null);
//   }

//   render() {
//     const { classes, theme } = this.props;
//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);
//     const CustomerPagesList = [
//       {
//         text: 'Home',
//         icon: <HomeIcon />,
//         path: '/'
//       },
//       {
//         text: 'Products',
//         icon: <TwoWheelerIcon />,
//         path: '/products'
//       },
//       {
//         text: 'Test Drive',
//         icon: <SpeedIcon />,
//         path: '/testdrive'
//       },
//       {
//         text: 'Bookings',
//         icon: <StoreIcon />,
//         path: '/bookings'
//       },
//       {
//         text: 'Servicing',
//         icon: <BuildIcon />,
//         path: '/servicingConfirm'
//       },
//       {
//         text: 'Breakdown',
//         icon: <AgricultureIcon />,
//         path: '/chatbot'
//       },
//       {
//         text: 'Updates',
//         icon: <SurroundSoundIcon />,
//         path: '/'
//       },
//       {
//         text: 'Notifications',
//         icon: <NotificationsIcon />,
//         path: '/notifications'
//       },


//     ]
//     return (

//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar
//           elevation={2}
//           position="fixed"
//           className={classes.appBar}
//           fooJon={classNames(classes.appBar, {
//             [classes.appBarShift]: this.state.open
//           })}
//         >
//           <Toolbar disableGutters={true}>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classes.menuButton}
//             >
//               <MenuIcon
//                 classes={{
//                   root: this.state.open
//                     ? classes.menuButtonIconOpen
//                     : classes.menuButtonIconClosed
//                 }}
//               />
//             </IconButton>
//             <Typography
//               variant="h6"
//               color="inherit"
//               className={classes.grow}
//               noWrap
//             >
//               <div className={classes.navlinks}>
//                 <Link to="/" className={classes.link}>
//                   Home
//                 </Link>
//                 <Link to="/products" className={classes.link}>
//                   Products
//                 </Link>
//                 <Link to="/chatbot" className={classes.link}>
//                   Chatbot
//                 </Link>
//                 <Link to="/bookings" className={classes.link}>
//                   Booking
//                 </Link>
//                 <Link to="/servicing" className={classes.link}>
//                   Servicing
//                 </Link>
//                 <Link to="/notifications" className={classes.link}>
//                   Notifications
//                 </Link>
//                 <Link to="/login" className={classes.link}>
//                   Login
//                 </Link>
//                 <Link to="/signup" className={classes.link}>
//                   Signup
//                 </Link>

//               </div>
//             </Typography>
//             <div>
//               <IconButton
//                 aria-owns={open ? "menu-appbar" : undefined}
//                 aria-haspopup="true"
//                 onClick={this.handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right"
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right"
//                 }}
//                 open={open}
//                 onClose={this.handleClose}
//               >
//                 <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
//               </Menu>
//             </div>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           className={classNames(classes.drawer, {
//             [classes.drawerOpen]: this.state.open,
//             [classes.drawerClose]: !this.state.open
//           })}
//           classes={{
//             paper: classNames({
//               [classes.drawerOpen]: this.state.open,
//               [classes.drawerClose]: !this.state.open
//             })
//           }}
//           open={this.state.open}
//         >
//           <div className={classes.toolbar} />

//           <List>
//             {CustomerPagesList.map((item) => (
//               <ListItem button key={item.text}>
//                 <ListItemIcon >{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>

//         </Drawer>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />


//         </main>
//       </div>
//     );
//   }
// }

// MiniDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(MiniDrawer);





import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import { Link, useHistory, useLocation } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import { Link } from "react-router-dom";
import { yellow } from "@material-ui/core/colors";
import HomeIcon from '@mui/icons-material/Home';
// import Home from "@mui/icons-material/Home";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import StoreIcon from '@mui/icons-material/Store';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import NotificationsIcon from '@mui/icons-material/Notifications';


// import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from "react-router-dom";
import Home from "../../Pages/Home";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
import '../Background/StarryNight.css'
import Products from "../../Pages/Products";
import ProductsView from "../../Pages/ProductsView";
import ProductsSelection from "../../Pages/ProductsSelection";
import ProductsCheckout from "../../Pages/ProductCheckout";
import ProductsConfirmed from "../../Pages/ProductConfirmed";
import TestDrive from "../../Pages/TestDrive";
// import Layout from "./Layout/Layout"
import Bookings from "../../Pages/Bookings";
import BookingsStage from "../../Pages/BookingsStage";
import ServicingConfirm from "../../Pages/ServicingConfirm";
import ServicingConfirmed from "../../Pages/ServicingConfirmed";
import Servicing from "../../Pages/Servicing";
import ServicingBook from "../../Pages/ServicingBook";
import Chatbot from "../../Pages/Chatbot";
import TestDriveBooking from "../../Pages/TestDriveBooking";
import TestDriveOutlet from "../../Pages/TestDriveOutlet";
import NotificationsRoom from "../../Pages/NotificationsChat";
import Login from "../../Pages/Login";
import Logout from "../../Pages/Logout";
import Signup from "../../Pages/Signup";
// import { useEffect } from "react";



const styles = theme => ({
});

const Navbar = (props) => {
    const { classes, theme, setLoggedIn } = props;
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        console.log();
        if (location.pathname == '/customer') {
            console.log("pushing / to URL");
            history.push("/");
        }
    })

    // Appbar related states
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleLogout = () => {
        setLoggedIn(null);
        axios.get('/logout').then(() => {
            history.push('/');
        })
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    // For mobile screen, Appbar will change and the below will be rendered
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    // Sidebar related states
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // It contains all the Links
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>

                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <TwoWheelerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItem>
                </Link>

                <Link to="/testdrive" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <SpeedIcon />
                        </ListItemIcon>
                        <ListItemText primary="TestDrive" />
                    </ListItem>
                </Link>

                <Link to="/bookings" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bookings" />
                    </ListItem>
                </Link>

                <Link to="/servicing" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Servicing" />
                    </ListItem>
                </Link>

                <Link to="/chatbot" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AgricultureIcon />
                        </ListItemIcon>
                        <ListItemText primary="BreakDown" />
                    </ListItem>
                </Link>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <SurroundSoundIcon />
                        </ListItemIcon>
                        <ListItemText primary="Updates" />
                    </ListItem>
                </Link>

                <Link to="/notifications" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                </Link>

                <Link to="/logout" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </Link>

            </List>
        </Box>
    );

    return (
        <Router>

            {/* This is the top horizontal bar */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon onClick={toggleDrawer('left', true)} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            RobIN | Robust Intelligent Network
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            RobIN
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>


            {/* This is for vertical side drawer */}
            <div>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

            {/* The main content that is shown on the screen */}
            <main className={classes.content}>

                {/* Routes for various components */}
                <div className='back'>
                    <Switch>
                        {/* <Link to="/" className={classes.link}>
                          Home
                        </Link>
                        <Link to="/products" className={classes.link}>
                          Products
                        </Link>
                        <Link to="/chatbot" className={classes.link}>
                          Chatbot
                        </Link>
                        <Link to="/bookings" className={classes.link}>
                          Booking
                        </Link>
                        <Link to="/servicing" className={classes.link}>
                          Servicing
                        </Link>
                        <Link to="/notifications" className={classes.link}>
                          Notifications
                        </Link>
                        <Link to="/login" className={classes.link}>
                          Login
                        </Link>
                        <Link to="/signup" className={classes.link}>
                          Signup
                        </Link> */}

                        <Route path='/' exact component={Home} ></Route>
                        <Route path='/products' exact component={Products} ></Route>
                        <Route path='/products/:id' exact component={ProductsView} ></Route>
                        <Route path='/products/:id/book' exact component={ProductsSelection} ></Route>
                        <Route path='/products/:id/checkout' exact component={ProductsCheckout} ></Route>
                        <Route path='/products/:id/orderConfirmed' exact component={ProductsConfirmed} ></Route>
                        <Route path='/testdrive/:id' exact component={TestDrive} ></Route>
                        <Route path='/testdrive' exact component={TestDrive} ></Route>
                        <Route path='/testdrivebooking' exact component={TestDriveBooking} ></Route>
                        <Route path='/TestDriveOutlet' exact component={TestDriveOutlet} ></Route>
                        <Route path='/bookings' exact component={Bookings} ></Route>
                        <Route path='/bookingsStage/:id' exact component={BookingsStage} ></Route>
                        <Route path='/servicing' exact component={Servicing} ></Route>
                        <Route path='/servicingBook/:id' exact component={ServicingBook} ></Route>
                        <Route path='/servicingConfirm/:id' exact component={ServicingConfirm} ></Route>
                        <Route path='/servicingConfirmed/:id' exact component={ServicingConfirmed} ></Route>
                        <Route path='/chatbot' exact component={Chatbot} ></Route>
                        <Route path='/notifications' exact component={NotificationsRoom} ></Route>
                        <Route path='/login' exact component={Login} ></Route>
                        <Route path='/signup' exact component={Signup} ></Route>
                        <Route path='/logout' exact component={Logout} ></Route>
                    </Switch>
                </div>
            </main>
        </Router>

    )
}

export default withStyles(styles, { withTheme: true })(Navbar);
