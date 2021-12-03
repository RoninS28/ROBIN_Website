import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import Select from "react-select";

import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import i1 from '../Assets/i1.jpg'
import i2 from '../Assets/i2.jpg'
import i3 from '../Assets/i3.jpg'
import i4 from '../Assets/i4.jpg'
import i5 from '../Assets/i5.jpg'
import i6 from '../Assets/i6.jpg'
import { blue, green, orange, yellow } from "@material-ui/core/colors";
import '../PagesStyles/ProductsSelection.css'


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

const ProductsSelection = (props) => {

    const classes = useStyles(props)
    const history = useHistory()
    const id = props.match.params.id;
    const model = modelList.find(item => item.id == id)

    const discounts = [
        {
            id: 1,
            title: 'GANESH CHATURTHI SALE',
            description: 'Get flat ₹500 off and vouchers upto ₹1000',
            tnc: 'Valid only on Online Bookings'
        },
        {
            id: 2,
            title: 'ICICI BANK OFFERS',
            description: 'Get flat ₹100 off using ICICI Debit and Credit Cards',
            tnc: 'Valid only on Top end models'
        },
    ]


    const ModelTypeoptions = [
        { label: "TOP END MODEL", value: "1" },
        { label: "VTR MODEL", value: "2" },
        { label: "BASIC MODEL", value: "3" },
    ];

    const [ModelTypeValue, setModelTypeValue] = useState('');

    const ModelTypeComponent = () => <Select style={{ marginTop: '30px', marginBottom: '20px', width: '100px' }} onChange={(e) => { setModelTypeValue(e.value) }} options={ModelTypeoptions} value={ModelTypeoptions.filter(function (option) {
        return option.value === ModelTypeValue;
    })} />;

    const DiscountComponent = (discount) =>
        <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <div>
                {discount.title}
            </div>
            <div>
                {discount.description}
            </div>
            <div>
                {discount.tnc}
            </div>

        </div>




    return (

        <div className={classes.root, "productsSelectionScreen"}>
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
            <div id="deliveryTimeDiv">
                <p>DELIVERY TIME</p>
                <p>20 WORKING DAYS</p>

            </div>

            <Grid container className="variantNdiscountsGrid" >
                <Grid item sm={12} md={6} lg={6} xl={6}>
                    <div className="variantsChoiceDiv">
                        <p className="variantNdiscountsTitle">VARIANT CHOICE</p>
                        <p style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.70)', marginTop: '30px' }}>Select Model Type</p>
                        <ModelTypeComponent sx={{ marginTop: '30px' }} />
                        <p style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.70)', marginTop: '30px' }}>Select Color</p>
                        <ModelTypeComponent sx={{ marginTop: '30px' }} />
                        <p style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.70)', marginTop: '30px' }}>Selected: Red</p>



                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6} xl={6}>
                    <div className="discountsDiv">
                        <p className="variantNdiscountsTitle">DISCOUNTS</p>

                        {discounts.map((discount) => (
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'start', border: '4px solid #4EBCEC', marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }}>
                                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>
                                    {discount.title}
                                </div>
                                <div style={{ fontSize: '20px' }}>
                                    {discount.description}
                                </div>
                                <div style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 0.45)' }}>
                                    {discount.tnc}
                                </div>

                            </div>
                        ))}

                    </div>
                </Grid>
            </Grid>
            <div className="pricingDiv">
                <p style={{ fontSize: '40px', color: 'rgba(0, 0, 0, 0.60)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25) ' }}>ROUGH PRICE</p>
                <p style={{ fontSize: '90px', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25) ' }}>₹ 20,000/-</p>
                <p style={{ fontSize: '30px', color: 'rgba(0, 0, 0, 0.60)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25) ' }}>*Including 18% GST</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="proceedToCheckoutButtonDiv" >
                    <button >PROCEED TO CHECKOUT</button>

                </div>
            </div>
            <br /><br /><br />
        </div>

    );
}

export default ProductsSelection;