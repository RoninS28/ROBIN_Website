import { Avatar, Grid } from "@material-ui/core";
import { yellow, blue, orange, green } from "@material-ui/core/colors";
import { AvatarGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useParams } from "react-router-dom";
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import '../PagesStyles/ProductsView.css'


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
// !==============================================================================================================
const useStyles = makeStyles(
    {
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

        avatarColor: {
            backgroundColor: (props) => props.color,
            margin: '15px'
        },
        colorss: {
            display: 'flex',

            justifyContent: 'start',
            alignItems: 'center'
        }


    }
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

                <Grid item sm={12} md={3} lg={3} xl={3} className={classes.colorss && "colorAvatars1"}>
                    <div className="colors">
                        {/* <AvatarGroup variant="circular" className="avatargroup"> */}
                        {model.colors.map(color => (
                            <Avatar color={color} className={classes.avatarColor} />
                        ))}
                        {/* </AvatarGroup> */}
                    </div>
                </Grid>


                <Grid item sm={12} md={6} lg={6} xl={6} className="imageGrid">
                    <div className="image">
                        <img src={model.image} alt="image" width="300" height="300" />
                    </div>
                </Grid>


                <Grid item sm={12} md={3} lg={3} xl={3} className={classes.colorss && "colorAvatars2"}>
                    <div className="colors">
                        {/* <AvatarGroup variant="circular" className="avatargroup"> */}
                        {model.colors.map(color => (
                            <Avatar color={color} className={classes.avatarColor} />
                        ))}
                        {/* </AvatarGroup> */}
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default ProductsView;