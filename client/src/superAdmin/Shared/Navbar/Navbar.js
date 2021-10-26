import React from "react";
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
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EVModelList from "../../Pages/EVModelList"
import '../Background/StarryNight.css';
import EVModelDetail from "../../Pages/EVModelDetail";
import GenericDetail from "../../Pages/GenericDetail";
import GenericList from "../../Pages/GenericList";
import GenericOverview from "../../Pages/GenericOverview";
import AccessoryOrderReceipt from "../../Pages/AccessoryOrderReceipt";
import AccessoryOrderList from "../../Pages/AccessoryOrderList";
import CustomerComplaintList from "../../Pages/CustomerComplaintList";
import CustomerComplaint from "../../Pages/CustomerComplaint";
import Dashboard from "../../Pages/Dashboard";

const styles = theme => ({
});

const Navbar = (props) => {
    const { classes, theme } = props;

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
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
                <Link to="/models" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="EV Models" />
                    </ListItem>
                </Link>

                <Link to="/factories" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Factories" />
                    </ListItem>
                </Link>

                <Link to="/outlets" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Outlets" />
                    </ListItem>
                </Link>

                <Link to="/service-centers" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Service Centers" />
                    </ListItem>
                </Link>

                <Link to="/accessory-orders" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accessory List" />
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

                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
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
                        <Route path='/models' exact component={EVModelList} ></Route>
                        <Route path='/models/:id' exact component={EVModelDetail} ></Route>

                        <Route path='/factories/add' exact component={GenericDetail}></Route>
                        <Route path='/factories/:id/edit' exact component={GenericDetail}></Route>
                        <Route path='/factories' exact component={GenericList}></Route>
                        <Route path='/factories/:id' exact component={GenericOverview}></Route>

                        <Route path='/outlets/add' exact component={GenericDetail}></Route>
                        <Route path='/outlets/:id/edit' exact component={GenericDetail}></Route>
                        <Route path='/outlets' exact component={GenericList}></Route>
                        <Route path='/outlets/:id' exact component={GenericOverview}></Route>

                        <Route path='/service-centers/add' exact component={GenericDetail}></Route>
                        <Route path='/service-centers/:id/edit' exact component={GenericDetail}></Route>
                        <Route path='/service-centers' exact component={GenericList}></Route>
                        <Route path='/service-centers/:id' exact component={GenericOverview}></Route>

                        <Route path='/accessory-orders/:id' exact component={AccessoryOrderReceipt}></Route>
                        <Route path='/accessory-orders' exact component={AccessoryOrderList}></Route>

                        <Route path='/complaints' exact component={CustomerComplaintList}></Route>
                        <Route path='/complaints/1' exact component={CustomerComplaint}></Route>

                        <Route path='/dashboard' exact component={Dashboard}></Route>
                    </Switch>
                </div>
            </main>
        </Router>

    )
}

export default withStyles(styles, { withTheme: true })(Navbar);