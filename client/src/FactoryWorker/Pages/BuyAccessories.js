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

import { makeStyles, Container, Typography } from "@material-ui/core";
import { withThemeCreator } from "@material-ui/styles";
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery } from '@material-ui/core';
import BuyCategory from './BuyCategory';

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


const useStyles =makeStyles((theme) => ({

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
  maxWidth: "80vw",

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
  const classes = useStyles();
  return (
      <div>
        {/* <Router> */}
        {/* <main> */}
       
          <div>
           
            <Grid container spacing={2} className={classes.upcontainer} >
              <Grid item lg={8} md={8} sm={7} xs={11} >
                    <SearchBar
                        placeholder="Search for Accessories and more ..."
                        autoFocus
                        className={classes.searchupper}
                      />
              </Grid>

              <Grid item lg={3} md={3} sm={4} xs={8} ml={3} className={classes.mycartbtn} >
                  <Button variant="contained" size="large" 
                    startIcon={<ShoppingCartIcon />} 
                    >
                      My Cart
                  </Button>
                  
              </Grid>           
            </Grid>
          
          </div>
        

           <Grid container className={classes.containerdisp}>
               <Grid item lg={12} md={11} sm={11} xs={11}>
                    <Card className={classes.card} style={{marginTop:"4vh"}}>
                       <CardContent>

                            <Grid container spacing={2} style={{display:"flex", marginBottom: "1vh"}}>
                                      <Grid item lg={10} md={9} sm={9} xs={10}>
                                          <Typography variant="h6">Tyre and Wheel</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                            <Link to="/buycat" style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450}}  gap={20} style={flexContainer} >

                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            alt={item.title}
                                            loading="lazy"
                                            // style={{
                                            //   height:130,
                                            //   width:'auto'}}
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
                                          <Typography variant="h6">Engines</Typography>
                                      </Grid>
                                      <Grid item lg={2} md={3} sm={3} xs={7}>
                                            <Link to="/buycat" style={{ textDecoration: 'none' }} >
                                                <Button variant="contained">VIEW ALL</Button> 
                                            </Link>
                                      </Grid>
                             </Grid>

                            <Divider />

                            {/* <div > */}
                                <ImageList style={{overflowX: 'scroll',width: 500, height: 450 }}  gap={20} style={flexContainer} >

                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            alt={item.title}
                                            loading="lazy"
                                            // style={{
                                            //   height:130,
                                            //   width:'auto'}}
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
