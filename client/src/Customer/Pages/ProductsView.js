import { Avatar, Grid } from "@material-ui/core";
import { yellow, blue, orange, green } from "@material-ui/core/colors";
import { AvatarGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useParams } from "react-router-dom";
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import i1 from '../Assets/i1.jpg'
import i2 from '../Assets/i2.jpg'
import i3 from '../Assets/i3.jpg'
import i4 from '../Assets/i4.jpg'
import i5 from '../Assets/i5.jpg'
import i6 from '../Assets/i6.jpg'


import '../PagesStyles/ProductsView.css'
import { margin, style } from "@mui/system";


const modelList = [
    {
        model: "CITY 1",
        id: "M001",
        image: v3,
        colors: [
            yellow[500],
            blue[500],
            green[500],
            orange[500]
        ],
        battery: "1.8",
        range: "80",
        voltage: "72",
        chargingTime: "3-4",
        groundClearance: "170",
        price: 20000
    },
    {
        model: "CITY 2",
        id: "M002",
        image: v2,
        colors: [
            yellow[500],
            blue[500],
            green[500],
            orange[500]
        ],
        battery: "1.9",
        range: "85",
        voltage: "72",
        chargingTime: "3-4",
        groundClearance: "172",
        price: 20500
    },
    {
        model: "CITY 3",
        id: "M003",
        image: v3,
        colors: [
            yellow[500],
            blue[500],
            green[500],
            orange[500]
        ],
        battery: "1.9",
        range: "90",
        voltage: "72",
        chargingTime: "3-4",
        groundClearance: "165",
        price: 21000
    },
]
const featureList1 = [
    {
        feature: "3 Modes Drive",
        img: i1
    },
    {
        feature: "Thief Alert",
        img: i2
    },
    {
        feature: "Li-on\nBattery",
        img: i3
    }
]
const featureList2 = [

    {
        feature: "Key Less\nDrive",
        img: i4
    },
    {
        feature: "Tubeless Tyre",
        img: i5
    },
    {
        feature: "Dual Disc",
        img: i6
    },
]
// !==============================================================================================================
const useStyles = makeStyles((theme) =>
({
    root: {
        // fontSize: '100px'
    },
    heading: {
        fontWeight: '600',
        fontFamily: 'Secular One',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.21), 1px 1px 1px blue',
        textAlign: 'center',
        fontSize: '40px',
        marginTop: '30px',
    },


    colorss: {
        display: 'flex',

        justifyContent: 'start',
        alignItems: 'center'
    }


})
)

const ProductsView = (props) => {
    const classes = useStyles(props)
    const id = props.match.params.id;
    const model = modelList.find(item => item.id == id)
    // const model = model1.
    console.log(model)
    // modelList.
    return (
        <div className={classes.root}>
            <div className="heading">
                {model.model}
            </div>
            <Grid container style={{ marginTop: '30px' }}>

                <Grid item sm={12} md={3} lg={3} xl={3} className={classes.features && "featureAvatars1"}>
                    <div className="features f1" >
                        {featureList1.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={feature.img} className="featureAvatar" style={{ height: '50px', width: '50px' }} />
                                <p>{feature.feature}</p>
                            </div>
                        ))}
                    </div>
                </Grid>


                <Grid item sm={12} md={6} lg={6} xl={6} className="imageGrid">
                    <div className="imgNcolors" >

                        <div className="image">
                            <img src={model.image} alt="image" width="350" height="350" />
                        </div>
                        <div className="colors">
                            <Avatar style={{ backgroundColor: "grey", border: '3px solid rgba(0, 0, 0, 0.3)', height: '25px', width: '25px', margin: '10px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "dodgerblue", border: '1px solid rgba(0, 0, 0, 0.3)', height: '25px', width: '25px', margin: '10px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "yellowgreen", border: '1px solid rgba(0, 0, 0, 0.3)', height: '25px', width: '25px', margin: '10px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "red", border: '1px solid rgba(0, 0, 0, 0.3)', height: '25px', width: '25px', margin: '10px' }}> </Avatar>
                        </div>
                    </div>
                </Grid>


                <Grid item sm={12} md={3} lg={3} xl={3} className={classes.features && "featureAvatars2"}>
                    <div className="features f2">
                        {featureList2.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={feature.img} className="featureAvatar" style={{ height: '50px', width: '50px' }} />
                                <p>{feature.feature}</p>
                            </div>

                        ))}
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default ProductsView;