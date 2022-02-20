import { Avatar, Button, Grid, IconButton } from "@material-ui/core";
import { yellow, blue, orange, green } from "@material-ui/core/colors";
import { AvatarGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import v4 from '../Assets/v4.png'
import v5 from '../Assets/v5.png'
import v6 from '../Assets/v6.png'
import v7 from '../Assets/v7.png'
import i1 from '../Assets/i1.jpg'
import i2 from '../Assets/i2.jpg'
import i3 from '../Assets/i3.jpg'
import i4 from '../Assets/i4.jpg'
import i5 from '../Assets/i5.jpg'
import i6 from '../Assets/i6.jpg'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import '../PagesStyles/ProductsView.css'
import { margin, style } from "@mui/system";
const mycolors = [
    {
        color: '#ffeb3b',
        image: '../Assets/v3.jpeg'
    },
    {
        color: '#2196f3',
        image: '../Assets/v3.jpeg'
    },
    {
        color: '#4caf50',
        image: '../Assets/v3.jpeg'
    },
    {
        color: '#ff9800',
        image: '../Assets/v3.jpeg'
    },
]
const myhighs = [
    {
        highlight: 'LITHIUM - ION\nREMV. BATTERY',
        quantity: '1.9',
        unit: 'KWH'
    },
    {
        highlight: 'RANGE',
        quantity: '85',
        unit: 'KM'
    },
    {
        highlight: 'VOLTAGE',
        quantity: '72',
        unit: 'VOLT'
    },
    {
        highlight: 'CHARGING TIME',
        quantity: '3-4',
        unit: 'HRS'
    },
    {
        highlight: 'GROUND CLEARANCE',
        quantity: '170',
        unit: 'MM'
    },
]

const myfeatures = [
    {
        feature: "3 Modes Drive",
        img: '../Assets/i1.jpg'
    },
    {
        feature: "Thief Alert",
        img: '../Assets/i2.jpg'
    },
    {
        feature: "Li-on\nBattery",
        img: '../Assets/i3.jpg'
    },
    {
        feature: "Key Less\nDrive",
        img: '../Assets/i4.jpg'
    },
    {
        feature: "Tubeless Tyre",
        img: '../Assets/i5.jpg'
    },
    {
        feature: "Dual Disc",
        img: '../Assets/i6.jpg'
    },
]
const defaultmodel = {
    modelID: 'M1362',
    modelName: 'PATRIOT',
    image: '../Assets/v7.png',
    releaseDate: Date.parse('2020-05-01'),
    waitingPeriod: 5,
    price: 68000,
    enginePower: 100,//cc
    emissionCriteria: 'BS IV',
    torque: '10.3 Nm @ 5000 rpm',
    mileage: 40,
    suspension: 'Spring Loaded',
    brakingSystem: 'Drum',
    fuelTankCapacity: '15',
    emergencyFuelCapacity: '2',
    turningRadius: 1500,//mm
    colors: mycolors,
    height: 1.115, //mm
    weight: 110,//kg
    trunkCapacity: 15,//litre
    groundClearance: 170,//mm
    highlights: myhighs,
    featureList: myfeatures

}

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
        id: "M1250",
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
        id: "M1278",
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
const getMyImage = (source) => {
    const x = source.replace('../Assets/', '')
    const img = x.substring(0, 2)
    switch (img) {
        case 'v2':
            return v2
        case 'v3':
            return v3
        case 'v4':
            return v4
        case 'v5':
            return v5
        case 'v6':
            return v6
        case 'v7':
            return v7


    }
}
const getMyIcon = (source) => {
    // const x = source.replace('../Assets/', '')
    // const img = x.substring(0, 2)
    console.log(`SORCE IS ${source}`)
    switch (source) {
        case 'i1':
            return i1
        case 'i2':
            return i2
        case 'i3':
            return i3
        case 'i4':
            return i4
        case 'i5':
            return i5
        case 'i6':
            return i6



    }
}
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
    const history = useHistory()
    console.log(`PARAMS IS ${props.match.params.id}`)
    const id = props.match.params.id;
    // const model = modelList.find(item => item.id == id)
    const [modelDB, setModelDB] = useState()
    const [imagetodisplay, setImagetodisplay] = useState()
    const [currentColor, setCurrentColor] = useState(0)// to get the current selected color

    const [featureList1, setFeatureList1] = useState([])
    const [featureList2, setFeatureList2] = useState([])
    const handleTestDrive = (e) => {
        history.push("/testdrive/" + e.id)
    }
    const handleBookNow = (e) => {
        history.push("/products/" + e.modelID + "/book")
    }
    const handleChatbot = () => {
        history.push("/chatbot")
    }
    // const model = model1.
    // console.log(model)
    // modelList.

    const selectedColorStyle = {
        border: '3px solid rgba(255, 255, 0, 0.3)'
    }
    const unselectedColorStyle = {
        border: '1px solid rgba(0, 0, 0, 0.3)'
    }
    // todo add this to that avatar icon
    const changeImageColor = (item, index) => { //item is an obhect of color, image
        console.log(`INDEX IS ${index}`)
        setCurrentColor(index)
        setImagetodisplay(getMyImage(item.image))
        return true
    }



    const getProduct = () => {
        console.log("into use effect")
        const id1 = props.match.params.id;
        axios.get('/products/' + id1).then((response) => {
            console.log('into the bunty')
            console.log(response.data)
            setModelDB(response.data)
            console.log(`MY DB MODELL IS ${modelDB}`)
            const img = getMyImage(response.data.image)
            setImagetodisplay(img)
            setFeatureList2(response.data.featureList.splice(3, 6))
            setFeatureList1(response.data.featureList.splice(0, 3))
            console.log(`SPLICE 1 IS ${response.data.featureList.splice(0, 3)}`)
            console.log(`SPLICE 2 IS ${response.data.featureList.splice(3, -1)}`)

            // modelDB = response.data
        })

    }

    useEffect(() => {
        // setImagetodisplay(getMyImage(modelDB.image))
        getProduct()
    }, []);

    return modelDB ? (

        <div className={classes.root, "productsViewScreen"}>
            <div className="heading">
                {modelDB.modelName} ({modelDB.modelID})
            </div>
            <Grid container style={{ marginTop: '30px' }}>

                <Grid item sm={12} md={4} lg={4} xl={4} className={classes.features && "featureAvatars1"}>
                    <div className="features f1" >
                        {featureList1.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={getMyIcon(feature.image)} className="featureAvatar" style={{ height: '60px', width: '60px' }} />
                                <p>{feature.feature}</p>
                            </div>
                        ))}
                    </div>
                </Grid>



                <Grid item sm={12} md={4} lg={4} xl={4} className="imageGrid">
                    <div className="imgNcolors" >

                        <div className="image">
                            {
                                imagetodisplay ? (<img src={imagetodisplay} alt="image" width="350" height="350" />) : <img src={v3} alt="image" width="350" height="350" />
                            }

                            {/* <img src={imagetodisplay} alt="image" width="350" height="350" /> */}
                        </div>
                        <div className="colors">
                            {
                                modelDB.colors.map((item, index) => (
                                    <IconButton
                                        color="blue"
                                        onClick={(e) => changeImageColor(item, index)}
                                    >

                                        <Avatar style={{ backgroundColor: item.color, border: index === currentColor ? selectedColorStyle : unselectedColorStyle, height: '35px', width: '35px', margin: '15px' }} onClick> </Avatar>
                                    </IconButton>

                                    // <Avatar style={{ backgroundColor: "dodgerblue", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                                ))
                            }
                            {/* <Avatar style={{ backgroundColor: "grey", border: '3px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "yellowgreen", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar>
                            <Avatar style={{ backgroundColor: "red", border: '1px solid rgba(0, 0, 0, 0.3)', height: '35px', width: '35px', margin: '15px' }}> </Avatar> */}
                        </div>
                    </div>
                </Grid>


                <Grid item sm={12} md={4} lg={4} xl={4} className={classes.features && "featureAvatars2"}>
                    <div className="features f2">
                        {featureList2.map(feature => (
                            <div className="featureColumn">

                                <Avatar src={getMyIcon(feature.image)} className="featureAvatar" style={{ height: '60px', width: '60px' }} />
                                <p>{feature.feature}</p>
                            </div>

                        ))}
                    </div>
                </Grid>

            </Grid>
            <div style={{ marginTop: '30px', backgroundColor: 'black', borderRadius: '70px', color: "white", padding: '30px', paddingLeft: '10px', paddingRight: '10px', marginLeft: '180px', marginRight: '180px' }} >

                <Grid container spacing={3} justifyContent="space-around">

                    {
                        modelDB.highlights.map((item) => (
                            <Grid item >
                                <div className="uniqueFeatureCol">
                                    <div className="highlightUniqueFeature">
                                        {item.quantity}
                                        <div className="unithighlight" style={{ display: 'block' }}>
                                            <span>{item.unit}</span>
                                        </div>
                                    </div>
                                    <div className="descUniqueFeature">
                                        {item.highlight}
                                    </div>
                                    {/* <div className="descUniqueFeature">
                                REMV. BATTERY
                            </div> */}
                                </div>
                            </Grid>
                        ))
                    }

                    {/* <Grid item >
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
                    </Grid> */}

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
                    <button onClick={() => handleBookNow(modelDB)}>BOOK NOW</button>

                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>

                <div className="buttonPara">
                    Would you like a test drive? Take one now for free!!
                </div>
                <div className="takeTestDriveButtonDiv" >
                    <button onClick={() => handleTestDrive(modelDB)}>TAKE TEST DRIVE</button>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
                <div className="buttonPara">
                    Would you like a test drive? Take one now for free!!
                </div>

                <div className="chatBotButtonDiv" >
                    <button onClick={handleChatbot}>CHATBOT</button>

                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    ) : (
        <div>
            loading
        </div>
    );
}

export default ProductsView;