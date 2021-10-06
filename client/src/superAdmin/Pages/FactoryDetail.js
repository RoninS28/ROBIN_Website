import React, { useState } from 'react'
import { withStyles } from "@material-ui/core/styles";

import { factoryList } from '../Data/FactoryList';
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

const FactoryDetail = (props) => {

    const {classes, theme} = props;

    const {
        id, name, address, fax, email, phone, dateOfEstablishment, licenceNumber, manager
    } = factoryList[0];
    
    const { line1, line2, city, state, pinCode } = address;
    const { 
            name: nameManager, 
            email: emailManager, 
            phone: phoneManager,
            dateOfJoining: dateOfJoiningManager
        } = manager;

    const [currManager, setCurrManager] = useState(nameManager);

    const handleManagerChange = (event) => {
        setCurrManager(event.target.value);
    };

    return (
        <div className={classes.wrapperDiv}>
            <div className={classes.generalInfoWrapper}>
                <h2>General Info</h2>
                <div className={classes.inputTextWrapper}>
                    <TextField id="standard-basic" label="Name" variant="standard" className={classes.inputText} value={name}/>
                </div>
                <div className={classes.inputTextWrapper}>
                <TextField id="standard-basic" label="Line1" variant="standard" className={classes.inputText} value={line1}/>
                    <TextField id="standard-basic" label="Line2" variant="standard" className={classes.inputText} value={line2}/>
                    <TextField id="standard-basic" label="City" variant="standard" className={classes.inputText} value={city}/>
                    <TextField id="standard-basic" label="State" variant="standard" className={classes.inputText} value={state}/>
                    <TextField id="standard-basic" label="Pin Code" variant="standard" className={classes.inputText} value={pinCode}/>
                </div>
                <div className={classes.inputTextWrapper}>
                    <TextField id="standard-basic" label="Fax" variant="standard" className={classes.inputText} value={fax}/>
                    <TextField id="standard-basic" label="Email" variant="standard" className={classes.inputText} value={email}/>
                    <TextField id="standard-basic" label="Phone" variant="standard" className={classes.inputText} value={phone}/>
                    <TextField id="standard-basic" label="Date of Establishment" variant="standard" className={classes.inputText} value={dateOfEstablishment}/>
                    <TextField id="standard-basic" label="Licence Number" variant="standard" className={classes.inputText} value={licenceNumber}/>
                </div>
            </div>
            <div className={classes.managerInfoWrapper}>
                <h2>Managerial Info</h2>
                
                <Box className={ classes.inputSelect} style={{ paddingBottom: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currManager}
                        label="Name"
                        onChange={handleManagerChange}
                        >
                        <MenuItem value="Ram Rao">Ram Rao</MenuItem>
                        <MenuItem value="Shyam Rao">Shyam Rao</MenuItem>
                        <MenuItem value="Nikhil Chauhan">Nikhil Chauhan</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <TextField id="standard-basic" label="Email" variant="standard" className={classes.inputText} value={emailManager} disabled/>
                <TextField id="standard-basic" label="Phone" variant="standard" className={classes.inputText} value={phoneManager} disabled/>
                <TextField id="standard-basic" label="Date of Joining" variant="standard" className={classes.inputText} value={dateOfJoiningManager} disabled/>                
            </div>
            <div className={classes.btnContainer}>
                    <Button className={classes.btn} variant="contained" color="secondary">Delete Factory</Button>
                    <Button className={classes.btn} variant="contained" color="primary">Save Details</Button>
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(FactoryDetail);
