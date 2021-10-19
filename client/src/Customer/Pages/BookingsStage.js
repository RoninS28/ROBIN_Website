import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import v2 from "../Assets/v2.jpeg";
import { Grid } from "@material-ui/core";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './BookingsStage.css';
import CheckIcon from '@mui/icons-material/Check';

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
            backgroundColor: blue[400],
            height: '480px',
            marginLeft: '240px',
            marginRight: '240px',
        },
        ticketid: {
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '20px',
            margin: '20px'

        },

        statusRow: {
            // display: 'flex',
            // margin: '50px',
            // marginRight: '20px',
            marginTop: '18px',
            // justifyContent: 'end',
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Secular One',
            // marginRight: "0px"



        },
        bookingrow: {
            fontSize: '15px',
            fontFamily: 'Secular One',
            // margin: '50px',
            display: "flex",
            justifyContent: "center",
            // borderColor: "blue",
            // borderWidth: "2px",

        },
        bookingstageInfo: {
            // display: 'flex',
            // alignItems: 'spaceAround'
            fontSize: '15px',
            alignSelf: "center",
            justifyContent: 'flex-end',
            // borderColor: "red",
            // borderWidth: "2px",

            

        },
        statusColumn: {
            "&&": {

                display: 'flex-end',
                fontSize: '15px',
                alignSelf: "center",

                justifyContent: 'flex-end',
                // borderColor: "red",
                // borderWidth: "2px"
            }

        },
        grids: {
            width: '100%',
            flexGrow: "1"
        },

        
        // image: {
        //     alignItems: 'self',
        //     justifyContent: 'center'


        // }
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
            id: 1,
            name: "Deformation",
            description: "The response of collision velocity waveform to structure deformation in parts dynamic impact simulation was first analyzed in this paper, and a method of deriving structure deformation order by velocity waveform was then determined.",
            status: "completed",
        },
        {
            id: 2,
            name: "Casting",
            description: "The response of collision velocity waveform to structure deformation in parts dynamic impact simulation was first analyzed in this paper, and a method of deriving structure deformation order by velocity waveform was then determined.",
            status: "completed",
        },
        {
            id: 3,
            name: "Polymer Process",
            description: "The response of collision velocity waveform to structure deformation in parts dynamic impact simulation was first analyzed in this paper, and a method of deriving structure deformation order by velocity waveform was then determined.",
            status: "completed",
        },
        {
            id: 4,
            name: "Machining",
            description: "The response of collision velocity waveform to structure deformation in parts dynamic impact simulation was first analyzed in this paper, and a method of deriving structure deformation order by velocity waveform was then determined.",
            status: "pending",
        },
        {
            id: 5,
            name: "Finishing",
            description: "The response of collision velocity waveform to structure deformation in parts dynamic impact simulation was first analyzed in this paper, and a method of deriving structure deformation order by velocity waveform was then determined.",
            status: "pending",
        }
    ]
    
    const classes = useStyles()
    return (
        <div>
            {/* client\src\Customer\Assets\v2.jpeg */}
            <div className={classes.heading}>
                {vehicleInfo.model}
            </div>
            <div className={classes.image}>
                <img src={v2} alt="Image" style={{
                height: "inherit",
                width: "100%",
                maxWidth: "inherit",
                display: "block",
                overflow: "hidden",
            }}/>
            </div>
            <div className={classes.ticketid} style={{marginBottom:"50px"}}>
                Ticket Id: {vehicleInfo.ticketid}
            </div>


            <div>
            <Grid container spacing={3} justifyContent="space-evenly" className={classes.bookingrow}>
                    {processList.map(item => (
                        
                        <Grid container item xs={12} md={12} lg={12} xl={12} sx={{border:1}} style={{borderRadius:"0.5rem",borderColor:"black"}}>

                            
                            <Grid item spacing={3} key={item.id} xs={8} md={8} lg={8} xl={8} className={classes.bookingrowInfo} style={{borderRadius:"0.5",borderColor:"black"}}>
                                <div className="bookingstageInfo" style={{boxShadow:"5px 10px", marginLeft:"20px",marginRight:"20px",marginBottom:"50px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",borderColor:"green",borderWidth:"0.5px",borderTopLeftRadius:"75px",borderBottomLeftRadius:"75px"}}>
                                    <div class="grid-container">
                                    
                                    <div style={{borderColor:"#34eb7a",borderWidth:"10px",boxShadow:"5px 10px", borderRadius:"150px",zIndex:1, padding:"35px", alignSelf:"center"}}><div class="item2">{item.id}</div></div>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                    <div class="item3">{item.name}</div>  
                                    <div class="item4">{item.description}</div>
                                    </div>
                                    
                                       
                                    </div>

                                    {/* <div>
                                        {item.name}
                                    </div>
                                    <div style={{textAlign:"center"}}>
                                        {item.description}
                                    </div> */}


                                </div>
                            </Grid>
                            <Grid item spacing={3} key={item.id} xs={4} md={4} lg={3} xl={3} className={classes.statusColumn} style={{marginLeft:"40px",marginRight:"20px"}}>
                                <div className="statusColumn" >

                                    <div>
                                        {/* {item.status} */}
                                    </div>
                                    <div>
                                        {item.status === 'completed' ? <CheckIcon  style={{color:"#00ff40", fontSize:"100px"}}/> : <AccessTimeIcon style={{color:"#ff80d5",fontSize:"100px"}}/>}
                                    </div>
                                </div>
                            </Grid>
                            {/* <Grid item spacing={3} key={item.plateNumber} xs={3} md={4} lg={4} xl={4} className={classes.image}>

                                <div className="image">

                                    <img src={v2} alt="image" height="200px" width="200px" />
                                </div>

                            </Grid> */}
                        </Grid>


                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default BookingsStage;