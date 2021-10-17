// import { makeStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/";
import React from "react";
import Navbar from "../Navbar/Navbar";


const drawerWidth = 220 //same as that from navbar

const useStyles = makeStyles((theme) => {
    return {
        page: {
            "&&": {
                background: '#f9f9f9',
                // width: '100%',
                width: `calc(100% - ${drawerWidth}px)`,
                // padding: theme.spacing(3)
            }
        },
        drawer: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        toolbar: {
            height: 64
        }
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* appbar */}
            <Navbar style={{ position: "fixed" }}></Navbar>


            {/* side drawer */}

            {/* page */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    );
}

export default Layout;