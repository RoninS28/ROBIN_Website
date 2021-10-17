import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
// import { v2.jpeg } from "../Assets/v2.jpeg"

const useStyles = makeStyles((theme) => {
    return {
        root: {
            fontFamily: 'Secular One',

        },
        heading: {
            color: blue[500],
            marginTop: '20px',
            textAlign: "center",
            fontSize: '40px',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.21)',
        },
        image: {
            backgroundColor: blue[500],
            height: '400px',
            marginLeft: '200px',
            marginRight: '200px',
        },
        ticketid: {
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '20px',
            margin: '20px'

        }
    }
})

const BookingsStage = () => {
    const vehicleInfo = {
        imagesrc: "../Assets/v2.jpeg",
        model: "CITY - 1 ELECTRIC SCOOTER",
        plateNumber: "MH 12 FP 9602",
        purchaseDate: "28/05/2021",
        status: "Delivered",
        stage: "10",
        deliveryDate: "28/06/2021",
        ticketid: "C1028395"

    };
    const processList = [
        {
            //todo
        }
    ]
    const classes = useStyles()
    return (
        <div>
            client\src\Customer\Assets\v2.jpeg
            <div className={classes.heading}>
                {vehicleInfo.model}
            </div>
            <div className={classes.image}>
                {/* <img src="../Assets/v2.jpeg" alt="Image" /> */}
            </div>
            <div className={classes.ticketid}>
                Ticket Id: {vehicleInfo.ticketid}
            </div>
        </div>
    );
}

export default BookingsStage;