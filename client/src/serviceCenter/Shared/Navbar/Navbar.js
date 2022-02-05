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

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, useHistory } from "react-router-dom";
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
import SMBreakdownStatus from "../../Serviceman/SMBreakdownStatus";
import SMBreakdownDetails from "../../Serviceman/SMBreakdownDetails";
import SMBilling from "../../Serviceman/SMBilling";
import SMServices from "../../Serviceman/SMServices";
import SMHistory from "../../Serviceman/SMHistory";
import SMComplaint from "../../Serviceman/SMComplaint";

const styles = theme => ({
});

const Navbar = (props) => {
    const { classes, theme, setLoggedIn } = props;

    const history = useHistory();
    useEffect(() => {
        history.push("/");
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
{/* Service Center Module */}
    
             <Link to="/assigned-customers" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Customers List" />
              </ListItem>
            </Link>
            <Link to="/customer-details" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer Details" />
                </ListItem>
              </Link>
              <Link to="/servicemenlist" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Servicemen List" />
                </ListItem>
              </Link>
              
               <Link to="/servicemandetails" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Serviceman Details" />
                </ListItem>
              </Link>
              <Link to="/servicing" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Servicing" />
                </ListItem>
              </Link>
              <Link to="/breakdown-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Requests" />
                </ListItem>
              </Link>
              <Link to="/breakdown-detail" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Request detail" />
                </ListItem>
              </Link>
              <Link to="/breakdown-status-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Status List" />
                </ListItem>
              </Link>
              <Link to="/breakdown-status" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Request Status" />
                </ListItem>
              </Link>
              <Link to="/buy-accessories" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buy" />
                </ListItem>
              </Link>
              <Link to="/buy-category" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buy Category" />
                </ListItem>
              </Link>
          <Link to="/accessories-details" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Item Details" />
                </ListItem>
              </Link>
            <Link to="/billing" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Billing" />
              </ListItem>
            </Link>
          <Link to="/customer-complaint-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="C Complaints List" />
                </ListItem>
              </Link> 
              <Link to="/customer-complaint" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="C Complaint Details" />
                </ListItem>
              </Link> 
              <Link to="/serviceman-complaint-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="S Complaints List" />
                </ListItem>
              </Link> 
              <Link to="/serviceman-complaint" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="S Complaint Details" />
                </ListItem>
              </Link>  

{/* Serviceman module */}
              {/* <Link to="/Serviceman/breakdown-details" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM Breakdown Request" />
                </ListItem>
              </Link>  

              <Link to="/Serviceman/breakdown-status" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM Breakdown Status" />
                </ListItem>
              </Link>  
          
              <Link to="/Serviceman/services" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM Services" />
                </ListItem>
              </Link> 

              <Link to="/Serviceman/billing" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM Billing" />
                </ListItem>
              </Link> 

              <Link to="/Serviceman/history" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM History" />
                </ListItem>
              </Link> 

              <Link to="/Serviceman/complaints" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="SM Complaint" />
                </ListItem>
              </Link>  */}

          <Link to="/demo" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Demo" />
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

{/* Serviceman Module */}
              <Route path='/Serviceman/breakdown-details' exact component={SMBreakdownDetails}></Route>
              <Route path='/Serviceman/breakdown-status' exact component={SMBreakdownStatus}></Route>
              <Route path='/Serviceman/billing' exact component={SMBilling}></Route>
              <Route path='/Serviceman/services' exact component={SMServices}></Route>
              <Route path='/Serviceman/history' exact component={SMHistory}></Route>
              <Route path='/Serviceman/complaints' exact component={SMComplaint}></Route>

              <Route path='/demo' exact component={Demo}></Route>
            </Switch>
                </div>
            </main>
        </Router>
    )
}

export default withStyles(styles, { withTheme: true })(Navbar);