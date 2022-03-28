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
import MailIcon from '@mui/icons-material/Mail';
import { Link, useHistory, useLocation } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../Background/StarryNight.css';
import OrderList from "../../Pages/OrderList";
import WorkerList from "../../Pages/WorkerList";
import WorkerListDetails from "../../Pages/WorkerListDetails";
import OrderDetail from "../../Pages/OrderDetail";
import AccessoryReportDetail from "../../Pages/AccessoryReportDetail";
import AppBreadCrumb from "../../Pages/AppBreadCrumb";
import Complaints from "../../Pages/Complaints";
import CustomerComplaint from "../../Pages/Customercomplaints";
import BuyAccessories from "../../Pages/BuyAccessories";
import AccessoryPage from "../../Pages/AccessoryPage";
import Dashboard from "../../Pages/Dashboard";
import AccessoryReport from '../../Pages/AccessoryReport'
import GenericStockList from "../../Pages/GenericStockList";

const styles = theme => ({
});

const Navbar = (props) => {
  const { classes, theme, setLoggedIn } = props;
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
      console.log();
      if(location.pathname == '/factory-admin') {
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
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <Link to="/orders" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </Link>

        <Link to="/workers" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Workers" />
          </ListItem>
        </Link>







        <Link to="/complaints" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Complaints" />
          </ListItem>
        </Link>


        <Link to="/buyAccessories" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Buy Accessories" />
          </ListItem>
        </Link>
        <Link to="/accessoryReport" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Accessory Report" />
          </ListItem>
        </Link>
        <Link to="/stocks" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Existing Stocks" />
          </ListItem>
        </Link>
      </List>
    </Box >
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

        <AppBreadCrumb />
        {/* Routes for various components */}
        <div className='back'>
          <Switch>
            {/* <Route path="/" exact component={OrderList}/> */}
            <Route path='/orders' exact component={OrderList} ></Route>
            <Route path='/workers' exact component={WorkerList} ></Route>
            <Route path='/workers/:id' exact component={WorkerListDetails} />
            <Route path='/orders/:id' exact component={OrderDetail} />

            <Route path='/complaints' exact component={Complaints} ></Route>
            <Route path="/complaints/:id" exact component={CustomerComplaint} />
            <Route path="/buyAccessories" exact component={BuyAccessories} />
            <Route path='/buyAccessories/:id' exact component={AccessoryPage} />
            <Route path='/accessoryReport' exact component={AccessoryReport} />
            <Route path='/accessoryReport/:id' exact component={AccessoryReportDetail} />
            <Route path='/' exact component={Dashboard} />
            <Route path='/stocks' exact component={GenericStockList} />
          </Switch>
        </div>
      </main>
    </Router>

  )
}

export default withStyles(styles, { withTheme: true })(Navbar);