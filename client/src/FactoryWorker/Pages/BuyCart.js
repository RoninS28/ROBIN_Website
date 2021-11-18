import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@mui/material/Grid';
import SearchBar from 'material-ui-search-bar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles, Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import ImageListItem from '@mui/material/ImageListItem';

import GroupedButtons from "./GroupedButtons";



import { withStyles } from "@material-ui/core/styles";

import engine from '../../images/engine.png';
import tyre from '../../images/tyre.png';
import gear from '../../images/gear.png';
import axel from '../../images/axel.png';
import seat from '../../images/seat.png';

function createData(name, quant) {
    return { name, quant};
  }

  const rows = [
    createData('PU Leather Seat', 3),
    createData('Car Engine', 2),
    createData('Gear Box', 5),
    createData('Axel', 3),
    createData('Tyre Wheel cover', 1),
  ];


const cartdata = [
    {
      img: engine,
      name: 'Car Engine',
      price: '$3200',
      company: 'Dynamo',
    },
    {
        img: tyre,
        name: 'Tyre',
        price: '$1200',
        company: 'ADC',
    },
    {
        img: gear,
        name: 'Gear 20',
        price: '$800',
        company: 'Dynamo',
    },
    {
        img: axel,
        name: 'Axel 321',
        price: '$100',
        company: 'Dynamo',
    },
    {
        img: seat,
        name: 'Seat',
        price: '$400',
        company: 'Expresso',
    },
    
]

const useStyles = makeStyles((theme) =>({
  searchupper:{
    marginLeft: theme.spacing(2),
    },
  
    mycartbtn:
    {
    marginLeft: theme.spacing(6),
    paddingLeft:theme.spacing(6),  
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
    gridcards:{
        padding:theme.spacing(4),
     },
     cardprice:{
        color: theme.palette.success.main,
     },
     removebtn:{
        backgroundColor: theme.palette.error.main,
     }

}));



function BuyCart()
{
    const classes = useStyles();
    return (
           <div>
                <Grid container spacing={2} className={classes.upcontainer} mb={2}>
                    <Grid item lg={6} md={6} >
                        <SearchBar
                            placeholder="Search for Accessories and more ..."
                            autoFocus
                            className={classes.searchupper}
                            />
                    </Grid>

                    <Grid item lg={3} ml={3} className={classes.mycartbtn} >
                        <Button variant="contained" size="large" startIcon={<ShoppingCartIcon />}  >
                            My Cart
                        </Button>
                        
                    </Grid>
                </Grid>

                <Grid container className={classes.maincontainer}>
                  <Grid item lg={9} md={8} sm={11} xs={10} className={classes.firstPage}>
                    <Paper style={{backgroundColor:'#2C528F1A'}}>
                        <Typography variant="h6" className={classes.headingname}>Cart Items</Typography>   
   
                        <Grid container>
        
                        {cartdata.map((item) => (
                             <Grid item lg={12} md={6} sm={8} xs={8} className={classes.gridcards} >
                              <Card >
                                <CardContent>
                                    {/* <br /> */}
                                    <Grid container>
                                    <Grid item lg={2}>
                                         <Checkbox />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <ImageListItem >
                                        <img
                                            src={`${item.img}?w=134&h=144`}
                                            srcSet={`${item.img}?w=134&h=144`}
                                            //alt={item.title}
                                            loading="lazy"
                                        />
                                        </ImageListItem>
                                    </Grid>
                                    <Grid item lg={4}  alignItems="center" justifyContent="center">
                                        <Typography  variant="button" component="div" align="center" className={classes.cardname}>
                                        {item.name}
                                        </Typography>
                                        <Typography variant="button" component="div" color="text.secondary" align="center" className={classes.cardprice}>
                                        {item.price}
                                        </Typography>
                                        <Typography variant="body2" component="div" color="text.secondary" align="center">
                                        {item.company}
                                        </Typography>
                                       {/* <div pl={8} style={{alignItems:"center"}}> */}
                                       <br />
                                       <Typography variant="body2" component="div" color="text.secondary" align="center">
                                        <GroupedButtons />
                                        </Typography>
                                       {/* </div> */}

                                    </Grid>
                                    <Grid item lg={3} pt={4}>
                                        <Button variant="contained" endIcon={<DeleteIcon />} style={{backgroundColor:'red'}} className={classes.removebtn}>
                                            Remove
                                        </Button>
                                    </Grid>
                                    </Grid>
                                    
                                   
                                </CardContent>
                              </Card>
                             </Grid>
                         ))}
                            
                        
                        
                        </Grid>
                        <Grid container justifyContent="right">
                           
                            <Grid item  pb={2} pr={4}>
                                <Button variant="contained" size="large" >
                                    Buy Now
                                </Button>
                            </Grid>
                        </Grid>

                    </Paper>
                    </Grid>

                        <Grid item lg={3} md={4} sm={7} xs={7} className={classes.secondPage}>
                            <Paper>
                              <Typography variant="h6" className={classes.headingname}>Last Order</Typography> 

                             <Grid container alignItems="center" justifyContent="center">
                              <Grid item lg={10} >
                              <Typography variant="h6" component="div" color="text.secondary" style={{padding:'20px'}}>
                                OrderId : 501B
                              </Typography>
                              <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Items</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">X {row.quant}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>

                                <Typography variant="body2" component="div" color="text.secondary" style={{paddingTop:'20px'}}>
                                 Total Price : $4500
                                </Typography>

                              <Typography variant="body2" component="div" color="text.secondary" style={{paddingTop:'20px',paddingBottom:'20px'}}>
                                Status : Delivered
                                </Typography>

                                </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                </Grid>

           </div>
    );
}

export default BuyCart;