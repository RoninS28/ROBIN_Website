import React, { useEffect, useState } from 'react'
import { withStyles } from "@material-ui/core/styles";

import { factoryList } from '../Data/FactoryList';
import { outletList } from '../Data/OutletList';
import { serviceCenterList } from '../Data/ServiceCenterList';
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useLocation } from 'react-router';
import axios from 'axios';
import AlertDialog from './AlertDialog';
import Switch from '@mui/material/Switch';

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
            justifyContent: "center",
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

const GenericDetail = (props) => {

    // This page will be common to factory, outlet, service center DETAIL INFO 

    const { classes, theme } = props;

    const location = useLocation();

    const [arrList, setArrList] = useState('');
    const [componentName, setComponentName] = useState('');
    const [componentNameSingular, setComponentNameSingular] = useState('');
    const [entityId, setEntityId] = useState('');
    const [entityData, setEntityData] = useState({});

    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;
    
        setEntityData({
          ...entityData,
          [name]: value,
        });
    };


    const getFactory = (
        id) => {
        axios.get(`/factories/${id}`)
            .then(res => {
                setEntityData(res.data);
                console.log("factory details: ", res.data);
                console.log("checked: ", res.data.active);
                setChecked(res.data.active);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const getOutlet = (
        id) => {
        axios.get(`/outlets/${id}`)
            .then(res => {
                setEntityData(res.data);
                console.log("details: ", res.data);
                setChecked(res.data.active);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const getServiceCenter = (
        id) => {
        axios.get(`/service-centers/${id}`)
            .then(res => {
                setEntityData(res.data);
                console.log("details: ", res.data);
                setChecked(res.data.active);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        console.log("use effect");
        setArrList(location.pathname.split('/'));
        setComponentName(arrList[1]);
        // ['', 'factories', '1', 'edit']
        // ['', 'factories', '1']
        setEntityId(arrList[2]);

        if (componentName == 'factories') {
            console.log("Herererer")
            setComponentNameSingular('Factory');
            getFactory(entityId);
        } else if (componentName == 'outlets') {
            setComponentNameSingular('Outlet');
            getOutlet(entityId);
        } else if (componentName == 'service-centers') {
            setComponentNameSingular('Service Center');
            getServiceCenter(entityId);
        }

    }, [componentName]);

    const validateData = () => {
        let flag = true;
        console.log("enetered in fn")
        Object.entries(entityData).map(item => {
            const key = item[0];
            const val = item[1];
            console.log(key, val);
            if(key != '__v') {
                if(val == "" || val == undefined || val == null) {
                    flag = false;
                }
            }
        });

        if(flag) {
            // send PUT request to backend
            axios.put(`/${componentName}/${entityId}`, entityData)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const deleteData = () => {
        axios.delete(`/${componentName}/${entityId}`)
        .then(() => this.setState({ status: 'Delete successful' }));
    }


    const {
        name: nameManager,
        email: emailManager,
        phone: phoneManager,
        dateOfJoining: dateOfJoiningManager
    } = {

        id: "1",
        name: "Ram Rao",
        email: "ramrao@gmail.com",
        phone: "8989898989",
        dateOfJoining: "2018-01-01"
    };

    const [currManager, setCurrManager] = useState(nameManager);

    const handleManagerChange = (event) => {
        setCurrManager(event.target.
            value);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      setEntityData({
        ...entityData,
        active: event.target.checked,
    });
    };

    return (
        <Box sx={{ flexGrow: 1 }} m={2}>
            <Grid container spacing={2}>

                {/* Left side input fields */}
                <Grid item xs={12} sm={12} md={6} lg={8}>
                    <h2>General Info</h2>
                    <div
                        className={classes.inputTextWrapper}>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            name="name"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.name}
                            InputLabelProps={{ shrink: true }} />
                    </div>

                    <div
                        className={classes.inputTextWrapper}>
                        <TextField
                            id="standard-basic"
                            label="Address"
                            name="address"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.address}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="City"
                            name="city"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.city}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="State"
                            name="state"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.state}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="Pin Code"
                            name="pin"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.pin}
                            InputLabelProps={{ shrink: true }} />
                    </div>
                    <div
                        className={classes.inputTextWrapper}>
                        <TextField
                            id="standard-basic"
                            label="Fax"
                            name="fax"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.fax}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.email}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="Phone"
                            name="phone"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.phone}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="Date of Establishment"
                            name="dateOfEstablishment"
                            onChange={handleInputChange}
                            variant="standard"
                            className={classes.inputText}
                            value={entityData.dateOfEstablishment}
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            id="standard-basic"
                            label="Licence Number"
                            onChange={handleInputChange}
                            variant="standard"
                            name="licenceNo"
                            className={classes.inputText}
                            value={entityData.licenceNo}
                            InputLabelProps={{ shrink: true }} />
                        
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                </Grid>


                {/* Right side input fields */}
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <h2>Managerial Info</h2>
                    <Box
                        className={classes.inputSelect} style={{ paddingBottom: "1rem" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="demo-simple-select-
                                label">Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={currManager}
                                label="Name"
                                onChange={handleManagerChange}
                            >
                                <MenuItem
                                    value="Ram Rao">Ram Rao</MenuItem>
                                <MenuItem
                                    value="Shyam Rao">Shyam Rao</MenuItem>
                                <MenuItem
                                    value="Nikhil Chauhan">Nikhil Chauhan</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        className={classes.inputText}
                        value={emailManager} disabled />
                    <TextField
                        id="standard-basic"
                        label="Phone"
                        variant="standard"
                        className={classes.inputText}
                        value={phoneManager} disabled />
                    <TextField
                        id="standard-basic"
                        label="Date of Joining"
                        variant="standard"
                        className={classes.inputText}
                        value={dateOfJoiningManager} disabled />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div
                        className={classes.btnContainer}>
                        <Button
                            className={classes.btn}
                            variant="contained" 
                            color="error"
                            onClick={deleteData}>Delete Factory</Button>
                        <Button
                            className={classes.btn}
                            variant="contained" 
                            color="primary"
                            onClick={validateData}>Save Details</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default withStyles(styles, { withTheme: true })(GenericDetail);
