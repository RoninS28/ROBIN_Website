import React, { useState } from 'react'
import { withStyles } from "@material-ui/core/styles";


import TextField from '@material-ui/core/TextField';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const styles = theme => ({ 
    wrapperDiv: {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr",
        },
    },
    generalInfoWrapper: {
        marginLeft: "1rem"
    },
    managerInfoWrapper: {
        marginLeft: "1rem"
    },
    inputTextWrapper: {
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
        },

        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr",
        }
    },
    inputText: {
        marginBottom: "1rem !important",
        [theme.breakpoints.up("sm")]: {
            minWidth: "320px !important",
            marginRight: "1rem !important"
        },
        [theme.breakpoints.down("sm")]: {
            width: "210px !important",
        }
    },

    inputSelect: {
        [theme.breakpoints.up("sm")]: {
            width: "320px !important",
        },
        [theme.breakpoints.down("sm")]: {
            width: "210px !important",
        }
    },
    btnContainer: {
        [theme.breakpoints.up("sm")]: { 
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
        }
    },
    btn: {
        [theme.breakpoints.up("sm")]: { 
            marginLeft: "1rem",
            marginBottom: "1rem"
        },
        [theme.breakpoints.down("sm")]: { 
            marginLeft: "1rem",
            marginTop: "1rem", 
            marginBottom: "1rem"
        }
    }
})


function Issue()
{
    return(
        <div>
            <h1>In Issue</h1>
        </div>
    );
}
export default Issue;