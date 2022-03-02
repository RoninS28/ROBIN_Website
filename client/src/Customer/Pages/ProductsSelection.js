import { Avatar, Grid, makeStyles, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
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

const ProductsSelection = (props) => {

    const classes = useStyles(props)
    const history = useHistory()
    const id = props.match.params.id;
    // const model = modelList.find(item => item.id == id)
    const [modelDB, setModelDB] = useState()
    const [imagetodisplay, setImagetodisplay] = useState()
    const [currentColor, setCurrentColor] = useState(0)// to get the current selected color

    const [featureList1, setFeatureList1] = useState([])
    const [featureList2, setFeatureList2] = useState([])

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

    const [modelTypeoptions, setModelTypeoptions] = useState([])
    const [coloroptions, setColoroptions] = useState([])

    const getProduct = () => {
        console.log("into use effect")
        const id1 = props.match.params.id;
        axios.get('/products/' + id1 + '/book').then((response) => {
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
            const typesarray = []
            const modeltypes = response.data.modelTypes
            for (var i = 0; i < modeltypes.length; i++) {
                console.log(`i is {i}`)
                typesarray.push({
                    label: modeltypes[i].modelTypeName,
                    value: i + 1
                })
            }

            setModelTypeoptions(typesarray)

            const colorsarray = []
            const colors = response.data.colors
            for (var i = 0; i < colors.length; i++) {
                console.log(`i is {i}`)
                colorsarray.push({
                    label: colors[i].color,
                    value: i + 1
                })
            }

            setColoroptions(colorsarray)

            // modelDB = response.data
        })

    }

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


    // const ModelTypeoptions = [
    //     { label: "TOP END MODEL", value: "1" },
    //     { label: "VTR MODEL", value: "2" },
    //     { label: "BASIC MODEL", value: "3" },
    // ];

    const [ModelTypeValue, setModelTypeValue] = useState('');

    const ModelTypeComponent = () => <Select style={{ marginTop: '30px', marginBottom: '20px', width: '100px' }} onChange={(e) => { setModelTypeValue(e.value) }} options={modelTypeoptions} value={modelTypeoptions.filter(function (option) {
        return option.value === ModelTypeValue;
    })} />;

    const [ColorOptionsValue, setColorOptionsValue] = useState('');

    const ColorOptionsComponent = () => <Select theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            text: 'orangered',
            primary25: 'hotpink',
            primary: 'black',
        },
    })} style={{ marginTop: '30px', marginBottom: '20px', width: '100px', backgroundColor: 'red', color: 'blue' }} onChange={(e) => { setColorOptionsValue(e.value) }} options={coloroptions} value={coloroptions.filter(function (option) {
        return option.value === ColorOptionsValue;
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

    useEffect(() => {
        // setImagetodisplay(getMyImage(modelDB.image))
        getProduct()
    }, []);



    return modelDB ? (

        <div className={classes.root, "productsSelectionScreen"}>
            <div className="heading">
                {modelDB.modelName}
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
            <div id="deliveryTimeDiv">
                <p>DELIVERY TIME</p>
                <p>{modelDB.waitingPeriod} WORKING DAYS</p>

            </div>

            <Grid container className="variantNdiscountsGrid" >
                <Grid item sm={12} md={6} lg={6} xl={6}>
                    <div className="variantsChoiceDiv">
                        <p className="variantNdiscountsTitle">VARIANT CHOICE</p>
                        <p style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.70)', marginTop: '30px' }}>Select Model Type</p>
                        <ModelTypeComponent sx={{ marginTop: '30px' }} />
                        <p style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.70)', marginTop: '30px' }}>Select Color</p>
                        <ColorOptionsComponent sx={{ marginTop: '30px' }} />
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
                <p style={{ fontSize: '90px', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25) ' }}>₹ {modelDB.price}/-</p>
                <p style={{ fontSize: '30px', color: 'rgba(0, 0, 0, 0.60)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25) ' }}>*Including 18% GST</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="proceedToCheckoutButtonDiv" >
                    <button >PROCEED TO CHECKOUT</button>

                </div>
            </div>
            <br /><br /><br />
        </div>

    ) : (
        <div>
            loading
        </div>
    );
}

export default ProductsSelection;