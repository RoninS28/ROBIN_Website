import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';


import { factoryList } from '../Data/FactoryList'
import { outletList } from '../Data/OutletList';
import { serviceCenterList } from '../Data/ServiceCenterList';
import { withStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from '@material-ui/core';
import GenericTable from './GenericTable';
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router";
import GenericStatCard from './GenericStatCard';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const styles = theme => ({

    btnWrapper: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            padding: "1rem",
            justifyContent: "flex-end",
        },
    },
    topRow: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },

})

// Fetching Factory Data
function createFactoryData(id, name, state, city, contact, active) {
    let status = "closed";
    if(active == true)
        status = "open";
    return { id, name, state, city, contact, status };
}

// Fetching Outlet Data
function createOutletData(id, name, state, city, contact, active) {
    let status = "closed";
    if(active == true)
        status = "open";
    return { id, name, state, city, contact, status };
}

// Fetching Service Center Data
function createServiceCenterData(id, name, state, city, contact, active) {
    let status = "closed";
    if(active == true)
        status = "open";
    return { id, name, state, city, contact, status };
}

// Fetching Accessory Order List
function createAccessoryOrderData(id, sourceType, entityName, date, status) {
    return {id, sourceType, entityName, date, status};
}


// fetching Complaints Data
function createComplaintsData(id, sourceType, from, complaintType, date, status) {
    return { id, sourceType, from, complaintType, date, status };
}

function getComplaintsList() {
    const rows = [
        createComplaintsData('C2K5464', 'Siddhesh R Ramane', 'Model Damage', '10 Oct 2021', 'Pending'),
        createComplaintsData('C2K5463', 'Kartik S Rane', 'Test Drive Issue', '10 Oct 2020', 'Addressed'),
        createComplaintsData('C2K5465', 'Amey S Marathe', 'Model Damage', '10 Sept 2021', 'Addressed'),
        createComplaintsData('C2K5466', 'Neha M Patil', 'Miscellaneous', '20 Sept 2021', 'Pending'),
        createComplaintsData('C2K5467', 'Nutan D. Deshmukh', 'Miscellaneous', '10 Aug 2021', 'Addressed'),
        createComplaintsData('C2K5468', 'Tripada Kyada', 'Model Damage', '1 Oct 2021', 'Pending'),
        createComplaintsData('C2K5469', 'Vivek Katkar', 'Model Damage', '11 Sept 2021', 'Addressed'),
    ];
    return rows;
}




// Actual Function
const GenericList = (props) => {


    const getAllFactories = () => {
        const allFactories = [];
    
        axios.get('/factories')
            .then(res => {
                let factoryArr = res.data;
                console.log(factoryArr);
                factoryArr.map(factory => {
                    allFactories.push(createFactoryData(factory._id, factory.name, factory.state, factory.city, factory.email, factory.active));
                });
                console.log("all factories ", allFactories)
                setRows(allFactories);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getAllOutlets = () => {
        const allOutlets = [];
        axios.get('/outlets')
            .then(res => {
                let outletArr = res.data;
                console.log(outletArr);
                outletArr.map(outlet => {
                    allOutlets.push(createOutletData(outlet._id, outlet.name, outlet.state, outlet.city, outlet.email, outlet.active));
                });
                console.log("all outlets ", allOutlets)
                setRows(allOutlets);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getAllServiceCenters = () => {
        const allServiceCenters = [];
        axios.get('/service-centers')
            .then(res => {
                let serviceCenterArr = res.data;
                console.log(serviceCenterArr);
                serviceCenterArr.map(serviceCenter => {
                    allServiceCenters.push(createServiceCenterData(serviceCenter._id, serviceCenter.name, serviceCenter.state, serviceCenter.city, serviceCenter.email, serviceCenter.active));
                });
                console.log("all serviceCenters ", allServiceCenters)
                setRows(allServiceCenters);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getFactoryName = async (entityId) => {
        const res2 = await fetch(`/factories/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getOutletName = async (entityId) => {
        const res2 = await fetch(`/outlets/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getServiceCenterName = async (entityId) => {
        const res2 = await fetch(`/service-centers/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getEmployeeName = async (entityId) => {
        const res2 = await fetch(`/employees/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getCustomerName = async (entityId) => {
        const res2 = await fetch(`/customers/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getAllStockRequests = async () => {
        let allStocks = [];
        let promises = [];

        const res = await fetch("/stock-requests");
        const data = await res.json();

        data.map(stock => {
            const entityId = stock.sourceId;
            switch (stock.sourceType) {
                case "factory":
                    promises.push(getFactoryName(entityId));
                    break;
                case "outlet":
                    promises.push(getOutletName(entityId));
                    break;
                case "service-center":
                    promises.push(getServiceCenterName(entityId));
                    break;
                default:
                    break;
            }
        });
        let result = await Promise.all(promises);
        let idx = 0;
        data.map(stock => {
            console.log("entity id: ", stock._id);
            allStocks.push(createAccessoryOrderData(stock._id, stock.sourceType, result[idx++], 
                                                                stock.date, stock.status));
        })
        console.log(allStocks);
        setRows(allStocks)
    }

    const getAllComplaints = async () => {
        let allComplaints = [];
        let promises = [];

        const res = await fetch("/complaints");
        const data = await res.json();

        console.log(data);
        data.map(complaint => {
            switch (complaint.sourceType) {
                case "Employee":
                    let entityId = complaint.employeeId;
                    promises.push(getEmployeeName(entityId));
                    break;
                case "Customer":
                    entityId = complaint.customerId;
                    promises.push(getCustomerName(entityId));
                    break;
                default:
                    break;
            }
        });
        let result = await Promise.all(promises);
        let idx = 0;
        data.map(complaint => {
            console.log("entity id: ", complaint._id);
            allComplaints.push(createComplaintsData(complaint._id, complaint.sourceType, result[idx++], complaint.complaintType,
                                                                complaint.date, complaint.status));
        })
        console.log("allComplaints", allComplaints);
        setRows(allComplaints);
    }



    const { classes, theme } = props;


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const history = useHistory();

    // Extracting the last keyword from URL and deciding which component to load...(Factory / Outlet / Service Center)
    const location = useLocation();
    // const componentName = location.pathname.substring(1);
    console.log(location);
    // let componentNameSingular = '';

    const [componentName, setComponentName] = useState('');
    const [componentNameSingular, setComponentNameSingular] = useState('');
    const [rows, setRows] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        setRows([]);
        setComponentName(location.pathname.substring(1));
        console.log("again in useeffect");
        console.log("component name: ", componentName);
        if (componentName == 'factories') {
            setComponentNameSingular('Factory');
            getAllFactories();
            setLabels(["name", "state", "city", "contact", "status", "actions"]);    
            // id, name, state, city, contact, status
        }
        else if (componentName == 'outlets') {
            setComponentNameSingular('Outlet');
            getAllOutlets();
            setLabels(["name", "state", "city", "contact", "status", "actions"]);
        }
        else if (componentName == 'service-centers') {
            setComponentNameSingular('Service Center');
            getAllServiceCenters();
            setLabels(["name", "state", "city", "contact", "status", "actions"]);
        }
        else if (componentName == 'accessory-orders') {
            setComponentNameSingular('Accessory Orders');
            getAllStockRequests();
            setLabels(["sourceType", "entityName", "date", "status", "actions"]);
        }
        else if (componentName == 'complaints') {
            setComponentNameSingular('Complaints');
            getAllComplaints();
            setLabels(["sourceType", "from", "complaintType", "date", "status", "actions"]);
        }
    }, [componentName, location, componentNameSingular]);


    // accessory order list states / complaints

    const [requestSource, setRequestSource] = React.useState('Factory');

    const handleRequestSourceChange = (event) => {
        setRequestSource(event.target.value);
    };

    const [filterFactory, setFilterFactory] = React.useState('All');

    const handleFilterFactoryChange = (event) => {
        setFilterFactory(event.target.value);
    };

    const [filterOutlet, setFilterOutlet] = React.useState('All');

    const handleFilterOutletChange = (event) => {
        setFilterOutlet(event.target.value);
    };

    const [filterServiceCenter, setFilterServiceCenter] = React.useState('All');

    const handleFilterServiceCenterChange = (event) => {
        setFilterServiceCenter(event.target.value);
    };


    const [filterStatus, setFilterStatus] = React.useState('All');

    const handleSetFilterStatus = (event) => {
        setFilterStatus(event.target.value)
    }



    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ flexGrow: 1 }} m={2}>
            <Grid container spacing={1}>

                {/* Cards that are shown at the top */}

                {(() => {
                    switch (componentNameSingular) {
                        case 'Complaints':
                            return (
                                <>
                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Total Complaints"
                                            subtitle="17"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Complaints Addressed"
                                            subtitle="9"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Complaints Pending"
                                            subtitle="8"
                                        />
                                    </Grid>
                                </>
                            );
                        default:
                            return (
                                <>

                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Total Orders"
                                            subtitle="120"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Orders Completed"
                                            subtitle="80"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <GenericStatCard
                                            title="Orders Pending"
                                            subtitle="40"
                                        />
                                    </Grid>
                                </>
                            );
                    }
                })()}

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Paper style={{ display: "grid", gridTemplateColumns: "12fr 1fr" }}>
                        <InputBase
                            sx={{ ml: 1 }}
                            placeholder={`Search ${componentNameSingular}`}
                            inputProps={{ 'aria-label': 'search factory' }}
                        />
                        <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className={classes.btnWrapper}>
                        {(() => {
                            switch (componentNameSingular) {
                                case 'Factory':
                                    return <Button onClick={() => history.push("/factories/add")} variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New Factory</Button>;
                                case 'Outlet':
                                    return <> 
                                        <Button onClick={() => history.push("/outlets/sales")} variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>Sales Report</Button>
                                        <Button onClick={() => history.push("/outlets/add")} variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New Outlet</Button>
                                        </>
                                case 'Service Center':
                                    return <Button onClick={() => history.push("/service-centers/add")} variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New Service Center</Button>;
                                case 'Accessory Orders':
                                case 'Complaints':
                                    return (
                                        <div className={classes.topRow}>

                                            {/* Source that requests Accessories: Factory / Outlet / Service Center */}
                                            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Source</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={requestSource}
                                                        label="Age"
                                                        onChange={handleRequestSourceChange}
                                                    >
                                                        <MenuItem value="All">All</MenuItem>
                                                        <MenuItem value="Factory">Factory</MenuItem>
                                                        <MenuItem value="Service Center">Service Center</MenuItem>
                                                        <MenuItem value="Outlet">Outlet</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>

                                            {/* Now, the source is selected, filter down on the basis of names */}
                                            {(() => {
                                                switch (requestSource) {
                                                    case 'Factory':
                                                        return (
                                                            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>
                                                                <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label">Factory</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={filterFactory}
                                                                        label="Age"
                                                                        onChange={handleFilterFactoryChange}
                                                                    >
                                                                        <MenuItem value="All">All</MenuItem>
                                                                        <MenuItem value="Noga Factory">Noga Factory</MenuItem>
                                                                        <MenuItem value="Alpha Factory">Alpha Factory</MenuItem>
                                                                        <MenuItem value="Beta Factory">Beta Factory</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                        );
                                                    case 'Outlet':
                                                        return (
                                                            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>
                                                                <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label">Outlet</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={filterOutlet}
                                                                        label="Age"
                                                                        onChange={handleFilterOutletChange}
                                                                    >
                                                                        <MenuItem value="All">All</MenuItem>
                                                                        <MenuItem value="Ishanya Oulet">Ishanya Oulet</MenuItem>
                                                                        <MenuItem value="Garve Outlet">Garve Outlet	</MenuItem>
                                                                        <MenuItem value="Panchjanya Outlet">Panchjanya Outlet</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                        );
                                                    case 'Service Center':
                                                        return (
                                                            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>
                                                                <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label">Service Center</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={filterServiceCenter}
                                                                        label="Age"
                                                                        onChange={handleFilterServiceCenterChange}
                                                                    >
                                                                        <MenuItem value="All">All</MenuItem>
                                                                        <MenuItem value="Ishanya Service Center">Ishanya Service Center</MenuItem>
                                                                        <MenuItem value="Garve Service Center">Garve Service Center</MenuItem>
                                                                        <MenuItem value="Panchjanya Service Center">Panchjanya Service Center</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                        );
                                                }
                                            })()}

                                            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={filterStatus}
                                                        label="Status"
                                                        onChange={handleSetFilterStatus}
                                                    >
                                                        <MenuItem value="All">All</MenuItem>
                                                        <MenuItem value="Pending">Pending</MenuItem>
                                                        <MenuItem value="In Progress">In Progress</MenuItem>
                                                        <MenuItem value="Completed">Completed</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    )
                                default:
                                    return <Button variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add</Button>;
                            }
                        })()}
                    </div>
                </Grid>

                <Grid item xs={12}>
                    {(() => {
                        switch (componentNameSingular) {
                            case 'Factory':
                                return <GenericTable rows={rows} labels={labels} view="/factories/" />;
                            case 'Outlet':
                                return <GenericTable rows={rows} labels={labels} view="/outlets/" />;
                            case 'Service Center':
                                return <GenericTable rows={rows} labels={labels} view="/service-centers/" />;
                            case 'Accessory Orders':
                                return <GenericTable rows={rows} labels={labels} view="/accessory-orders/" />;
                            case 'Complaints':
                                return <GenericTable rows={rows} labels={labels} view='/complaints/' />;
                            default:
                                return <GenericTable rows={rows} labels={labels} view="/factories/1" />;
                        }
                    })()}
                </Grid>

            </Grid>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(GenericList);