import React, { useState } from 'react'
import useTable from './UseTable';
import PageHeader from "./PageHeader";
import NewModel from "./NewModel";
import * as Servicedata from './Servicedata';
import Controls from './controls/Controls';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import {Paper, makeStyles, CssBaseline, TableBody, TableRow, TableCell, Toolbar, InputAdornment} from '@material-ui/core';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./controls/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    searchInput: {
        width: '65%'
    },
    newButton: {
        position: 'Absolute',
        right: '40px',
        top: '200px'
    }
}))


    const headCells = [
    { id: 'Mdname', label: 'Model Name' },
    { id: 'MnName', label: 'Manager Name' },
    { id: 'mobile', label: 'Mobile Number', disableSorting: true },
    { id: 'statusId', label: 'Status' },
    { id: 'actions', label: 'Actions', disableSorting: true }
    ]

export default function Inspection() {

    const classes=useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(Servicedata.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.MdName.includes(target.value))
            }
        })
    }
    
    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            Servicedata.insertEmployee(employee)
        else
            Servicedata.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(Servicedata.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
       <>
            <PageHeader
                title="Vehicles' Inspection"
                subTitle="Manufacturing in factory"
                icon={<TwoWheelerIcon fontSize="large" />}
            />
            
            <Paper className={classes.pageContent}>
            
                 <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.MdName}</TableCell>
                                    <TableCell>{item.MnName}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.statusId}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                    <TblPagination />
            </Paper>
            <Popup
                title="New Model"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <NewModel
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <CssBaseline/>
           
           </>
    )
}
