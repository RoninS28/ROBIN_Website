import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


import { evModelList } from './EVModels';
import EVModelDetail from './EVModelDetail';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginLeft: "1rem",
    }
});

const EVModelItem = (props) => {

    const {classes, theme, name, basePrice, imgUrl, colors} = props;

    return (
            <TableRow style={{ height: "11em" }}>
                <TableCell style={{ width: 160 }} align="center">
                    <img src={imgUrl} style={{ height: "120px", width: "100px" }}/>
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                    {name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                    {basePrice}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {colors.map((color) => (
                            <div 
                                style={{ 
                                            backgroundColor: color, 
                                            height: "20px", 
                                            width: "20px",
                                            borderRadius: "50%",
                                            margin: "auto 3px" }}>
                                
                            </div>
                        ))}
                    </div>
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                    <div className={classes.btnContainer}>
                        <Button className={classes.btn} variant="outlined" color="primary" startIcon={<EditIcon />}>Edit</Button>
                        <Button className={classes.btn} variant="outlined" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
                    </div>
                </TableCell>
            </TableRow>
    )
}

export default withStyles(styles, { withTheme: true })(EVModelItem);
