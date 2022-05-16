import React from 'react'
import IconButton from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {styled, alpha} from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@material-ui/core/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

import engine from '../images/engine.png';
import tyre from '../images/tyre.png';
import gear from '../images/gear.png';
import axel from '../images/axel.png';
import seat from '../images/seat.png';
import Paper from '@material-ui/core/Paper';
import { autocompleteClasses } from '@mui/material';
import { width } from '@mui/system';


import { makeStyles, Container, Typography } from "@material-ui/core";
import {useEffect, useState} from 'react'
import axios from 'axios';

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
/* 
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
] */

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

function BuyAccessoriesList(){
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
  
    return(
        // <div style={{padding:'1rem'}}>
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
                                            {/* <Link to="/buy-category" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buy-category/${cat1}`} style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                {/* <ImageList style={Object.assign({},flexContainer,{overflowX: 'scroll',width: 500, height: 450})}  gap={20}  > */}
                                {/* <ImageList style={[{overflowX: 'scroll',width: 500, height: 450} , flexContainer]}  gap={20}  > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450 ,}}  gap={20} style={flexContainer}>
                                    {catTyreandWheels.map((item) => (
                                        <ImageListItem key={item.accid}>
                                        <img
                                            // src={`${im1}`}
                                            // srcSet={`${item.image}`}
                                            src={require('./Shared/img/'+item.image).default}
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
                                           <Link to={`/buy-category/${cat2}`} style={{ textDecoration: 'none' }} >
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
                                             src={require('./Shared/img/'+item.image).default}
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
                                            {/* <Link to="/buy-category" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buy-category/${cat3}`} style={{ textDecoration: 'none' }} >
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
                                            src={require('./Shared/img/'+item.image).default}
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
                                            {/* <Link to="/buy-category" style={{ textDecoration: 'none' }} > */}
                                            <Link to={`/buy-category/${cat4}`} style={{ textDecoration: 'none' }} >
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
                                            src={require('./Shared/img/'+item.image).default}
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
         /*    <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <Typography variant="h6" style={{padding:'20px', flex: 1}}>Tyres and Wheels</Typography>  
                <Link style={{ textDecoration: 'none' }} to="/buy-category"><Button variant="contained" color="primary">VIEW ALL</Button></Link>
            </div>
            <div >
            <ImageList sx={{ width: 1600, overflowX: 'scroll' }} gap={20} style={flexContainer} colH>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      height:180,
                      width:'auto'}}
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
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <Typography variant="h6" style={{padding:'20px', flex: 1}}>Screws, Nuts and Bolts</Typography>  
                <Link style={{ textDecoration: 'none' }} to="/buy-category"><Button variant="contained" color="primary">VIEW ALL</Button></Link>
            </div>
            <div >
            <ImageList sx={{ width: 1600, overflowX: 'scroll' }}  gap={20} style={flexContainer}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      height:'relative',
                      width:'auto'}}
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
            </div> */
        // </div>
    )
}

export default BuyAccessoriesList