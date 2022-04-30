import React from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import SearchBar from 'material-ui-search-bar';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'


import engine from '../../images/engine.png';
import tyre from '../../images/tyre.png';
import gear from '../../images/gear.png';
import axel from '../../images/axel.png';
import seat from '../../images/seat.png';

import im1 from '../Shared/img/im1.png';
import im2 from '../Shared/img/im2.png';
import im3 from '../Shared/img/im3.png';
import im4 from '../Shared/img/im4.png';
import im5 from '../Shared/img/im5.png';
import im6 from '../Shared/img/im6.png';
import im7 from '../Shared/img/im7.png';
import im8 from '../Shared/img/im8.png';
import im9 from '../Shared/img/im9.png';
import im10 from '../Shared/img/im10.png';
import im11 from '../Shared/img/im11.png';
import im12 from '../Shared/img/im12.png';
import im13 from '../Shared/img/im13.png';
import im14 from '../Shared/img/im14.png';
import im15 from '../Shared/img/im15.png';
import im16 from '../Shared/img/im16.png';
import im17 from '../Shared/img/im17.png';
import im18 from '../Shared/img/im18.jpg';
import im19 from '../Shared/img/im19.png';
import im20 from '../Shared/img/im20.png';
import im21 from '../Shared/img/im21.png';
import im22 from '../Shared/img/im22.png';
import im23 from '../Shared/img/im23.png';
import im24 from '../Shared/img/im24.png';
import im25 from '../Shared/img/im25.png';
import im26 from '../Shared/img/im26.png';
import im27 from '../Shared/img/im27.png';
import im28 from '../Shared/img/im28.png';


import { makeStyles, Container, Typography } from "@material-ui/core";
import { withThemeCreator } from "@material-ui/styles";
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery } from '@material-ui/core';
import BuyCategory from './BuyCategory';

import {useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
  };

  const itemData = [
    {
      img: engine,
      name: 'Car Engine',
      company: 'Dynamo',
    },
    {
        img: tyre,
        name: 'Tire Wheel Cover',
        company: 'ZOHO',
      },
      {
        img: gear,
        name: 'Gear Box',
        company: 'Motor BO',
      },
      {
        img: axel,
        name: 'Axel',
        company: 'Marti-I',
      },
      {
        img: seat,
        name: 'PU Leather Seat',
        company: 'AGM',
      },
      {
        img: engine,
        name: 'Car Engine',
        company: 'Dynamo',
      },
      {
          img: tyre,
          name: 'Tire Wheel Cover',
          company: 'ZOHO',
        },
        {
          img: gear,
          name: 'Gear Box',
          company: 'Motor BO',
        },
        {
          img: axel,
          name: 'Axel',
          company: 'Marti-I',
        },
        {
          img: seat,
          name: 'PU Leather Seat',
          company: 'AGM',
        },
        {
          img: engine,
          name: 'Car Engine',
          company: 'Dynamo',
        },
        {
            img: tyre,
            name: 'Tire Wheel Cover',
            company: 'ZOHO',
          },
          {
            img: gear,
            name: 'Gear Box',
            company: 'Motor BO',
          },
          {
            img: axel,
            name: 'Axel',
            company: 'Marti-I',
          },
          {
            img: seat,
            name: 'PU Leather Seat',
            company: 'AGM',
          },
]


const buyAccessoriesuseStyles =makeStyles((theme) => ({

  upcontainer:{
          display:"flex",
    },

  searchupper:{
  marginLeft: theme.spacing(2),
  },

  mycartbtn:
  {
  marginLeft: theme.spacing(6),
  paddingLeft:theme.spacing(6),
  },
  card:{
  marginTop:theme.spacing(4),
  maxWidth: "95vw",

  },
  containerdisp:{
    paddingLeft:theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  MyImg:{
    width: 100,
    height: 100,
  }


}));

function BuyAccessories() 
{

  const classes = buyAccessoriesuseStyles();
  const [userData, setUserData] = useState([]);
  const [catTyreandWheels, setst1] = useState([]);
  const [catSeats, setst2] = useState([]);
  const [catHandlesandrods, setst3] = useState([]);
  const [catElectricInstruments, setst4] = useState([]);

  const getAccDetails = () => {
    const temp=[];

    axios.get('/factory/buyaccessories').then( (response) => {
         let mydata = response.data;

         console.log('mydat',mydata);
         setUserData(mydata)
        //  console.log('AccIDD',mydata[0].accid);

        const cat1 =[];
        const cat2 =[];
        const cat3 =[];
        const cat4 =[];

         mydata.forEach((element, index, array) => {
                if(element.category == "Tyre and Wheels")
                {
                  cat1.push(element);
                }
                else if(element.category == "Seats")
                {
                  cat2.push(element);
                }
                else if(element.category == "Handles and rods")
                {
                  cat3.push(element);
                }
                else if(element.category == "Electric Instruments")
                {
                  cat4.push(element);
                }
        });
            setst1(cat1);
            setst2(cat2);
            setst3(cat3);
            setst4(cat4);
      

        })
      }
  

    useEffect(() => {
    getAccDetails()
    console.log('renders');
    
    
  },[])

  // console.log("outside", userData);
  // console.log("cat1", catTyreandWheels);
  // console.log("cat2", catSeats);
  let cat1='cat1';
  let cat2='cat2';
  let cat3='cat3';
  let cat4='cat4';
  
  return (
      <div >
        {/* <Router> */}
        {/* <main> */}
       
          <div>
           
            <Grid container pt={2} spacing={2} className={classes.upcontainer} >
              <Grid item lg={8} md={8} sm={7} xs={11} >
                    <SearchBar
                        placeholder="Search for Accessories and more ..."
                        autoFocus
                        className={classes.searchupper}
                      />
              </Grid>

              <Grid item lg={3} md={3} sm={4} xs={8} ml={3} className={classes.mycartbtn} >
              <Link to="/buycart" style={{ textDecoration: 'none' }} >
                  <Button variant="contained" size="large" 
                    startIcon={<ShoppingCartIcon />} 
                    >
                      My Cart
                  </Button>
               </Link>
                  
              </Grid>           
            </Grid>
          
          </div>
        

           <Grid container className={classes.containerdisp}>
               <Grid item lg={12} md={11} sm={11} xs={11}>
                    <Card className={classes.card} style={{marginTop:"4vh"}}>
                       <CardContent>

                            <Grid container spacing={2} style={{display:"flex", marginBottom: "1vh"}}>
                                      <Grid item lg={10} md={9} sm={9} xs={10}>
                                          <Typography variant="h6">Tyre and Wheels</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                            {/* <Link to="/buycat" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buycat/${cat1}`} style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                {/* <ImageList style={Object.assign({},flexContainer,{overflowX: 'scroll',width: 500, height: 450})}  gap={20}  > */}
                                {/* <ImageList style={[{overflowX: 'scroll',width: 500, height: 450} , flexContainer]}  gap={20}  > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450 }}  gap={20} style={flexContainer} >
                                    {catTyreandWheels.map((item) => (
                                        <ImageListItem key={item.accid}>
                                        <img
                                            // src={`${im1}`}
                                            // srcSet={`${item.image}`}
                                            src={require('../Shared/img/'+item.image).default}
                                            //srcSet={require('../Shared/img/im2.png')}
                                            alt={item.name}
                                            loading="lazy"
                                            style={{
                                              height:130,
                                              width:'auto'}}
                                            className={classes.MyImg}
                                           
                                        />
                                        <ImageListItemBar
                                            align='center'
                                            title={item.name}
                                            subtitle={<span>From: {item.company}</span>}
                                            position="below"
                                        />
                                        </ImageListItem>
                                    ))}

                                </ImageList>
                            {/* </div> */}

                       </CardContent>
                    </Card>
               </Grid>




               <Grid item lg={12} md={11} sm={11} xs={11}>
                    <Card className={classes.card} style={{marginTop:"4vh"}}>
                       <CardContent>

                            <Grid container spacing={2} style={{display:"flex", marginBottom: "1vh"}}>
                                      <Grid item lg={10} md={9} sm={9} xs={10}>
                                          <Typography variant="h6">Seats</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                           <Link to={`/buycat/${cat2}`} style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450 }}  gap={20} style={flexContainer} >

                                    {catSeats.map((item) => (
                                        <ImageListItem key={seat}>
                                        <img
                                             src={require('../Shared/img/'+item.image).default}
                                            //srcSet={`${seat}`}
                                            alt={item.name}
                                            loading="lazy"
                                            style={{
                                              height:130,
                                              width:'auto'}}
                                            className={classes.MyImg}
                                           
                                        />
                                        <ImageListItemBar
                                            align='center'
                                            title={item.name}
                                            subtitle={<span>From: {item.company}</span>}
                                            position="below"
                                        />
                                        </ImageListItem>
                                    ))}

                                </ImageList>
                            {/* </div> */}

                       </CardContent>
                    </Card>
               </Grid>


               
               <Grid item lg={12} md={11} sm={11} xs={11}>
                    <Card className={classes.card} style={{marginTop:"4vh"}}>
                       <CardContent>

                            <Grid container spacing={2} style={{display:"flex", marginBottom: "1vh"}}>
                                      <Grid item lg={10} md={9} sm={9} xs={10}>
                                          <Typography variant="h6">Handles and rods</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                            {/* <Link to="/buycat" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buycat/${cat3}`} style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450}}  gap={20} style={flexContainer} >

                                    {catHandlesandrods.map((item) => (
                                        <ImageListItem key={item.accid}>
                                        <img
                                            // src={`${im1}`}
                                            // srcSet={`${item.image}`}
                                            src={require('../Shared/img/'+item.image).default}
                                            //srcSet={require('../Shared/img/im2.png')}
                                            alt={item.name}
                                            loading="lazy"
                                            style={{
                                              height:130,
                                              width:'auto'}}
                                            className={classes.MyImg}
                                           
                                        />
                                        <ImageListItemBar
                                            align='center'
                                            title={item.name}
                                            subtitle={<span>From: {item.company}</span>}
                                            position="below"
                                        />
                                        </ImageListItem>
                                    ))}

                                </ImageList>
                            {/* </div> */}

                       </CardContent>
                    </Card>
               </Grid>



               <Grid item lg={12} md={11} sm={11} xs={11}>
                    <Card className={classes.card} style={{marginTop:"4vh"}}>
                       <CardContent>

                            <Grid container spacing={2} style={{display:"flex", marginBottom: "1vh"}}>
                                      <Grid item lg={10} md={9} sm={9} xs={10}>
                                          <Typography variant="h6">Electric Instruments</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                            {/* <Link to="/buycat" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buycat/${cat4}`} style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450}}  gap={20} style={flexContainer} >

                                    {catElectricInstruments.map((item) => (
                                        <ImageListItem key={item.accid}>
                                        <img
                                            // src={`${im1}`}
                                            // srcSet={`${item.image}`}
                                            src={require('../Shared/img/'+item.image).default}
                                            //srcSet={require('../Shared/img/im2.png')}
                                            alt={item.name}
                                            loading="lazy"
                                            style={{
                                              height:130,
                                              width:'auto'}}
                                            className={classes.MyImg}
                                           
                                        />
                                        <ImageListItemBar
                                            align='center'
                                            title={item.name}
                                            subtitle={<span>From: {item.company}</span>}
                                            position="below"
                                        />
                                        </ImageListItem>
                                    ))}

                                </ImageList>
                            {/* </div> */}

                       </CardContent>
                    </Card>
               </Grid>
               
           </Grid>

      </div>
    )
}

export default BuyAccessories;
