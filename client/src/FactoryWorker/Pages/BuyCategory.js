
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { Link } from "react-router-dom";
import { useLocation, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { makeStyles, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SearchBar from 'material-ui-search-bar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import BuyItem from './BuyItem';
import CardActionArea from '@mui/material/CardActionArea';




import engine from '../../images/engine.png';
import tyre from '../../images/tyre.png';
import gear from '../../images/gear.png';
import axel from '../../images/axel.png';
import seat from '../../images/seat.png';

const itemCard = [
  {
    id:101,
    img: engine,
    name: 'Car Engine',
    price: '$ 300',
    company: 'Dynamo',
  },
  {
    id:102,
    img: tyre,
    name: 'City Pro',
    price: '$ 100',
    company: 'AGM',
  },
  {
    id:103,
    img: gear,
    name: 'Screw Gear',
    price: '$ 50',
    company: 'SKT',
  },
  {
    id:104,
    img: engine,
    name: 'Car Engine',
    price: '$ 70',
    company: 'Dynamo',
  },
  {
    id:105,
    img: axel,
    name: 'Rear press',
    price: '$ 71',
    company: 'Dynamo',
  },
  {
    id:106,
    img: seat,
    name: 'PU Leather Seat',
    price: '$ 300',
    company: 'TM',
  },
  {
    id:107,
    img: tyre,
    name: 'City Pro',
    price: '$ 100',
    company: 'AGM',
  },
  {
    id:108,
    img: gear,
    name: 'Screw Gear',
    price: '$ 50',
    company: 'SKT',
  },
  
]

const bradnames =[
  {id: "1", title: 'Dynamo'},
  {id: "2", title: 'Deolite'},
  {id: "3", title: 'NSS'},
  {id: "4", title: 'MRF'},
  {id: "5", title: 'NE'},
]

const initialFValues ={
  brand :'None',
  minprice :'',
  maxprice : '',
  sortby:'None',
}
const useStyles = makeStyles((theme) =>({

  searchupper:{
    marginLeft: theme.spacing(2),
    },
  
    mycartbtn:
    {
    marginLeft: theme.spacing(6),
    paddingLeft:theme.spacing(6),  
    },
  maincontainer:{
    
  
  },
  firstPage:{
   // marginLeft:theme.spacing(4),
   padding: theme.spacing(2),
  },
  secondPage:{
    padding: theme.spacing(2),
  },


  headingname:{
      backgroundColor:theme.palette.info.dark,
      padding: theme.spacing(1),
      color:"white"
  },
  carddisplay:{
      padding: theme.spacing(2),
      transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },

  gridcards:{
     padding:theme.spacing(4),
  },

  cardname:{
    // alignItems:"center",
    // justifyContent:"center",
  },
  cardprice:{
     color: theme.palette.success.main,
  },

  filtercontainer:{
     justifyContent:"center",
     padding: theme.spacing(2),
  },
  filterprice:{
    padding: theme.spacing(2),
  },
  labelnames:{
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  branddropdown:{
    padding: theme.spacing(2),
    width: 100,
  },
  sortbydropdown:{
    padding: theme.spacing(2),
    width: 100,
  },
  btnapplyfilter:{
    padding: theme.spacing(2),
    justifyContent: "center",
  }

}));

function BuyCategory()
{

  const classes = useStyles();
  const [values,setValues] =useState(initialFValues);

  const minpriceinput = event =>{
    const {name, value} = event.target
    setValues({
      ...values,
      [name]:value
    })
  } 
 

  return(
    <div>
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
    
    <Grid container className={classes.maincontainer}>
       <Grid item lg={9} md={8} sm={12} xs={12} className={classes.firstPage}>

           <Paper style={{backgroundColor:'#2C528F1A'}}>
                 <Typography variant="h6" className={classes.headingname}>Tyre and Wheel</Typography>   
                 <Grid container>

                  
 
                     {itemCard.map((item) => (

                        <Grid item lg={4} md={6} sm={5} xs={7} className={classes.gridcards} key={item.id}>

                          <Link to="/buyitem" style={{ textDecoration: 'none' }} >
                            <Card className={classes.carddisplay}>
                                  
                                     <CardMedia
                                        component="img"
                                        alt="Image"
                                        height="130"
                                        width="100"
                                        src={`${item.img}`}
                                        srcSet={`${item.img}`}
                                      />
                                      
                                  <CardContent>
                                  <Divider />
                                    <Typography  variant="button" component="div" align="center" className={classes.cardname}>
                                      {item.name}
                                    </Typography>
                                    <Typography variant="button" component="div" color="text.secondary" align="center" className={classes.cardprice}>
                                      {item.price}
                                    </Typography>
                                    <Typography variant="body2" component="div" color="text.secondary" align="center">
                                      {item.company}
                                    </Typography>
                                  </CardContent>
                                  
                            </Card>
                      
                          </Link>

                        </Grid>

                    ))}
                 
                 </Grid>     

           </Paper>
       </Grid>

       <Grid item lg={3} md={4} sm={8} xs={9} className={classes.secondPage}>
          <Paper >
                <Typography variant="h6" className={classes.headingname}>Filters</Typography> 
                  
                  <form>

                  <div className={classes.labelnames}>
                    <InputLabel>Brand</InputLabel>
                    </div>

                    <Grid container >
                      <Grid item  className={classes.branddropdown}>
                          <Select
                            // label="brand"
                            name="brand"
                            value={values.brand}
                            onChange = {minpriceinput}
                            style={{width:"13vw"}}
                          >
                            <MenuItem value="">None</MenuItem>

                            {bradnames.map((brandname) => (

                            <MenuItem key={brandname.id} value={brandname.title}>{brandname.title}</MenuItem>
                            

                            ))}

                          </Select>
                      </Grid>
                    </Grid>

                    <div className={classes.labelnames}>
                    <InputLabel>Price Range:</InputLabel>
                    </div>
                    <Grid container>
                       <Grid item lg={6} className={classes.filterprice}>
                          <TextField
                            variant="outlined"
                            label="minprice"
                            name="minprice"
                            value={values.minprice}
                            onChange = {minpriceinput}
                          />
                        </Grid>
                        <Grid item lg={6} className={classes.filterprice}>
                          <TextField
                              variant="outlined"
                              label="maxprice"
                              name="maxprice"
                              value={values.maxprice}
                              onChange ={minpriceinput}
                            />
                        </Grid>
                    </Grid>

                    <div className={classes.labelnames}>
                    <InputLabel>SortBy</InputLabel>
                    </div>

                    <Grid container >
                      <Grid item  className={classes.sortbydropdown}>
                          <Select
                            // label="brand"
                            name="sortby"
                            value={values.sortby}
                            onChange = {minpriceinput}
                            style={{width:"13vw"}}
                          >
                            <MenuItem value="HL">High to low</MenuItem>
                            <MenuItem value="LH">Low to High</MenuItem>

                          </Select>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item className={classes.btnapplyfilter}>
                         <Button variant="contained">Apply</Button>
                      </Grid>
                    </Grid>

                  </form>
                      
          </Paper>

         </Grid>
    </Grid>

    </div>
  );
}

export default BuyCategory;
