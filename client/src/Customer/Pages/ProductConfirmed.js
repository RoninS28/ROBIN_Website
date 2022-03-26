import { Avatar, Grid, makeStyles, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../PagesStyles/ProductConfirmed.css'




const ProductConfirmed = (props) => {

    const [orderID, setOrderID] = useState()


    useEffect(() => {
        setOrderID(props.location.state.ticketid)
        console.log('into use effect')
        console.log(props.location.state.ticketid)


    }, []);

    return orderID ? (
        <div className="productConfirmedScreen" >
            <div className="contents" >

                <div className="iconDiv" >
                    <FontAwesomeIcon icon={faCircleCheck} fontSize='180px' color="lightgreen" />
                </div>
                <div className="textDiv">
                    <div>Order Confirmed</div>
                    <div> [{orderID}]</div>


                    <div>
                        go back to homescreen
                    </div>

                </div>

            </div>

        </div>
    ) : <div> Loading</div>
}


export default ProductConfirmed;