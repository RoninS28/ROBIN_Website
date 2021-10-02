import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "0",
    cursor: "pointer",
    color: "Orange",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "orange",
      borderBottom: "1px solid white",
    },
  },
//   end: {
//       marginRight: "5px",
//       justify: "right",
//   }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            {/* <img src={RobinLogo} height="50px" width="50px" alt="Logo" /> */}
            ROBIN
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
            <Link to="/" className={classes.link}>
              Test Drive
            </Link>
            <Link to="/" className={classes.link}>
              Booking
            </Link>
            <Link to="/" className={classes.link}>
              Servicing
            </Link>
            <Link to="/" className={classes.link}>
              BreakDown
            </Link>
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;