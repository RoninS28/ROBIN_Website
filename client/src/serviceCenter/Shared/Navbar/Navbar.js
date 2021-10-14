import React from "react";
import PropTypes from "prop-types";
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


import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import '../Background/StarryNight.css';
import BreakdownRequestsList from "../../BreakdownRequestsList";
import BreakdownDetails from "../../BreakdownDetails";
import BreakdownStatus from "../../BreakdownStatus";
import BuyAccessoriesList from "../../BuyAccessoriesList";
import BreakdownStatusList from "../../BreakdownStatusList";
import BuyCategory from "../../BuyCategory";
import Demo from "../../Demo";
import AccessoriesDetails from "../../AccessoriesDetails";
import AssignedCustomers from "../../AssignedCustomers";
import CustomerDetails from "../../CustomerDetails";
import Servicing from "../../Servicing";
import Billing from "../../Billing";
import ServicemanList from "../../ServicemanList";
import ServicemanDetails from "../../ServicemanDetails";
import CustomerComplaintList from "../../CustomerComplaintList";
import CustomerComplaint from "../../CustomerComplaint";
import ServicemanComplaintList from "../../ServicemanComplaintList";
import ServicemanComplaint from "../../ServicemanComplaint";
import AppBreadCrumb from "../../AppBreadCrumb";


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
  grow: {
    flexGrow: 1
  }
});

class Navbar extends React.Component {
  state = {
    open: true,
    anchorEl: null
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <Router>
        <CssBaseline />
        {/* This is the top horizontal bar */}
        <AppBar
          position="fixed"
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              ROBIN
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
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
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        {/* This is for vertical side drawer */}
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} />
          <List>
          <Link to="/assigned-customers" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Customers List" />
              </ListItem>
            </Link>

            <Link to="/customer-details" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer Details" />
                </ListItem>
              </Link>

              <Link to="/servicemenlist" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Servicemen List" />
                </ListItem>
              </Link>

              <Link to="/servicemandetails" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Serviceman Details" />
                </ListItem>
              </Link>

              <Link to="/servicing" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Servicing" />
                </ListItem>
              </Link>

              <Link to="/breakdown-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Requests" />
                </ListItem>
              </Link>

              <Link to="/breakdown-detail" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Request detail" />
                </ListItem>
              </Link>

              <Link to="/breakdown-status-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Status List" />
                </ListItem>
              </Link>

              <Link to="/breakdown-status" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Request Status" />
                </ListItem>
              </Link>

              <Link to="/buy-accessories" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buy" />
                </ListItem>
              </Link>

              <Link to="/buy-category" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buy Category" />
                </ListItem>
              </Link>

          <Link to="/accessories-details" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Item Details" />
                </ListItem>
              </Link>

            <Link to="/billing" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Billing" />
              </ListItem>
            </Link>

          <Link to="/customer-complaint-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="C Complaints List" />
                </ListItem>
              </Link> 

              <Link to="/customer-complaint" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="C Complaint Details" />
                </ListItem>
              </Link> 

              <Link to="/serviceman-complaint-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="S Complaints List" />
                </ListItem>
              </Link> 

              <Link to="/serviceman-complaint" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="S Complaint Details" />
                </ListItem>
              </Link>  

          <Link to="/demo" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Demo" />
                </ListItem>
              </Link>

          </List>

          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          {/* <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
          <Typography paragraph>foo</Typography> */}

          {/* <OrderList/> */}
          <AppBreadCrumb/>
        
        
          <div className = 'back'>
            <Switch>
              <Route path='/' exact component={AssignedCustomers} ></Route>
              <Route path='/assigned-customers' exact component={AssignedCustomers}></Route>
              <Route path='/customer-details' exact component={CustomerDetails}></Route>
              <Route path='/servicemenlist' exact component={ServicemanList}></Route>
              <Route path='/servicemandetails' exact component={ServicemanDetails}></Route>
              <Route path='/servicing' exact component={Servicing}></Route>
              <Route path='/breakdown-list' exact component={BreakdownRequestsList} ></Route>
              <Route path='/breakdown-detail' exact component={BreakdownDetails} ></Route>
              <Route path='/breakdown-status-list' exact component={BreakdownStatusList}></Route>
              <Route path='/breakdown-status' exact component={BreakdownStatus}></Route>
              <Route path='/buy-accessories' exact component={BuyAccessoriesList}></Route>
              <Route path='/buy-category' exact component={BuyCategory}></Route>
              <Route path='/accessories-details' exact component={AccessoriesDetails}></Route>
              <Route path='/billing' exact component={Billing}></Route>
              <Route path='/customer-complaint-list' exact component={CustomerComplaintList}></Route>
              <Route path='/customer-complaint' exact component={CustomerComplaint}></Route>
              <Route path='/serviceman-complaint-list' exact component={ServicemanComplaintList}></Route>
              <Route path='/serviceman-complaint' exact component={ServicemanComplaint}></Route>
            
              <Route path='/demo' exact component={Demo}></Route>
            </Switch>
         </div>
         


        </main>
        </Router>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navbar);