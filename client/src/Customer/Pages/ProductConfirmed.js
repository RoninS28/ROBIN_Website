import { Avatar, Grid, makeStyles, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import Select from "react-select";




const ProductConfirmed = () => {

    const [orderID, setOrderID] = useState()

    useEffect = () => {
        setOrderID(props.location.state.orderID)
    }

    return (
        <div>
            Order Confirmed
            Order id is {orderID}
        </div>
    )
}


export default ProductConfirmed;