import { Avatar, Button, Grid } from "@material-ui/core";
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

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

                <Grid item sm={12} md={4} lg={4} xl={4} className={classes.features && "featureAvatars1"}>
                    <div className="features f1" >
                        {featureList1.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={feature.img} className="featureAvatar" style={{ height: '60px', width: '60px' }} />
                                <p>{feature.feature}</p>
                            </div>
                        ))}
                    </div>
                </Grid>


                <Grid item sm={12} md={4} lg={4} xl={4} className="imageGrid">
                    <div className="imgNcolors" >

                        <div className="image">
                            <img src={model.image} alt="image" width="350" height="350" />
                        </div>
                        <div className="colors">
                            <Avatar style={{ backgroundColor: "grey", border: '3px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "dodgerblue", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "yellowgreen", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "red", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                        </div>
                    </div>
                </Grid>


                <Grid item sm={12} md={4} lg={4} xl={4} className={classes.features && "featureAvatars2"}>
                    <div className="features f2">
                        {featureList2.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={feature.img} className="featureAvatar" style={{ height: '60px', width: '60px' }} />
                                <p>{feature.feature}</p>
                            </div>

                        ))}
                    </div>
                </Grid>

            </Grid>
            <div style={{ marginTop: '30px', backgroundColor: 'black', borderRadius: '70px', color: "white", padding: '30px', paddingLeft: '10px', paddingRight: '10px', marginLeft: '180px', marginRight: '180px' }} >

                <Grid container spacing={3} justifyContent="space-around">


                    <Grid item >
                        <div className="uniqueFeatureCol">
                            <div className="highlightUniqueFeature">
                                {model.battery}
                                <div className="unithighlight" >
                                    KWH
                                </div>
                            </div>
                            <div className="descUniqueFeature">
                                LITHIUM - ION
                            </div>
                            <div className="descUniqueFeature">
                                REMV. BATTERY
                            </div>
                        </div>
                    </Grid>
                    <Grid item >
                        <div className="uniqueFeatureCol">
                            <div className="highlightUniqueFeature">
                                {model.range}
                                <div className="unithighlight" >
                                    KM
                                </div>
                            </div>
                            <div className="descUniqueFeature">
                                RANGE
                            </div>

                        </div>
                    </Grid>
                    <Grid item >
                        <div className="uniqueFeatureCol">
                            <div className="highlightUniqueFeature">
                                {model.voltage}
                                <div className="unithighlight" >
                                    VOLT
                                </div>
                            </div>
                            <div className="descUniqueFeature">
                                VOLTAGE
                            </div>

                        </div>
                    </Grid>
                    <Grid item >
                        <div className="uniqueFeatureCol">
                            <div className="highlightUniqueFeature">
                                {model.chargingTime}
                                <div className="unithighlight" >
                                    HRS
                                </div>
                            </div>
                            <div className="descUniqueFeature">
                                CHARGING
                            </div>
                            <div className="descUniqueFeature">
                                TIME
                            </div>
                        </div>
                    </Grid>
                    <Grid item >
                        <div className="uniqueFeatureCol">
                            <div className="highlightUniqueFeature">
                                {model.groundClearance}
                                <div className="unithighlight" >
                                    MM
                                </div>
                            </div>
                            <div className="descUniqueFeature">
                                GROUND
                            </div>
                            <div className="descUniqueFeature">
                                CLEARANCE
                            </div>
                        </div>
                    </Grid>

                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="knowMoreButtonDiv" >
                        <button >KNOW MORE<ChevronRightIcon style={{ fontSize: '32px' }} /></button>
                        {/* <Button variant="contained" className="knowMoreButtonDiv" endIcon={<ChevronRightIcon />}>
                            Send
                        </Button> */}
                    </div>

                </div>



            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="bookNowButtonDiv" >
                    <button >BOOK NOW</button>

                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>

                <div className="buttonPara">
                    Would you like a test drive? Take one now for free!!
                </div>
                <div className="takeTestDriveButtonDiv" >
                    <button >TAKE TEST DRIVE</button>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
                <div className="buttonPara">
                    Would you like a test drive? Take one now for free!!
                </div>

                <div className="chatBotButtonDiv" >
                    <button >CHATBOT</button>

                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}

export default ProductsView;