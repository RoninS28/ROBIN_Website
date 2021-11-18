import {makeStyles,alpha} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';




const useStyles = makeStyles((theme)=>({

    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{ 
            display:"block",
        },
    },

    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },

    search:{
        display:"flex",
        alignContent:"center",

        backgroundColor: alpha(theme.palette.common.white,0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white,0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:"50%",

        [theme.breakpoints.down("sm")]:{ 
            display: ( props ) => ( props.open ? "flex" : "none"),
        },
    },

    input:{
        color: "white",
        marginLeft: theme.spacing(1),
    },
    icons:{
        
        alignItems:"center",
        
        display: ( props ) => ( props.open ? "none" : "flex"),
      
    },
    badge:{
        marginRight:theme.spacing(2),
    },
    smallsearch:{
        //display:"none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },

    
}));

const Navbar=()=>{

    const [open, setOpen] = useState(false);

    const classes = useStyles( {open} );
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>Large Logo</Typography>
                <Typography variant="h6" className={classes.logoSm}>Small Logo</Typography>

                <div className={classes.search}>
                    <SearchIcon/>
                    <InputBase placeholder="Search...." className={classes.input}/>
                    <div className={classes.cancel}>
                    <CloseIcon
                   
                    onClick={() => setOpen(false)}
                    />
                    </div>
                </div>

                <div className={classes.smallsearch}>
                    <SearchIcon
                      onClick={() => setOpen(true)}
                    />
                </div>

                <div className={classes.icons}>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <NotificationsIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon/>
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;