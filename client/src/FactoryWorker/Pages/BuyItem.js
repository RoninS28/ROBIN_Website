import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import seat from '../../images/seat.png'
import { Button } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import { Card } from "@material-ui/core";
import placeholder from '../../images/placeholder.png';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from 'material-ui-search-bar';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '70%',
    maxHeight: '70%',
  });

  function createData(property, data) {
    return { property, data};
  }

  const rows = [
    createData('Sales Package', '1 Seat Cover'),
    createData('Model Number', 'VR_CA_WC'),
    createData('Front Arm Rest', 'No'),
    createData('Pattern', 'Solid'),
    createData('UV Ray Protection', 'Yes'),
    createData('Detachable Head Rest', 'Yes'),
    createData('Breathable', 'No'),
];

const useStyles = makeStyles((theme) =>({
    searchupper:{
       // marginLeft: theme.spacing(2),
        },
      
}));

function BuyItem() 
{
    const classes = useStyles();
    const [feature, setFeature] = React.useState('');

    const handleChange = (event) => {
      setFeature(event.target.value);
    };
      return(
          <div style={{padding:'1rem'}}>
           
           <Grid container spacing={2}  mb={2}>
             <Grid item lg={6} md={6} >
                   <SearchBar
                       placeholder="Search for Accessories and more ..."
                       autoFocus
                     />
             </Grid>

             <Grid item lg={3} ml={3} className={classes.mycartbtn} >

             <Link to="/buycart" style={{ textDecoration: 'none' }} >
                 <Button variant="contained" size="large" color="primary" startIcon={<ShoppingCartIcon />}>My Cart
                 </Button>
             </Link>
                 
             </Grid>
           
           </Grid>


         <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }} style={{ maxWidth: 'md', maxHeight:'auto',backgroundColor:'#2C528F1A'}}>
        <Grid container spacing={2}>
          <Grid item>
              <Img alt="complex" src={seat} style={{height:400}}/>
          </Grid>
          <Grid item l={12} sm container>
            <Grid item l container direction="column" spacing={2}>
              <Grid item l>
                <Typography gutterBottom variant="subtitle1" component="div" style={{fontSize:'20px'}}>
                  <b>PU Leather Seat ( Flexible Design with Comfort) </b>
                </Typography>
                <Typography gutterBottom variant="body2" style={{fontSize:'15px'}}  >
                  AGM Brand
                  </Typography>
              <Typography variant="subtitle1" component="div" style={{color:"green"}}>
                  ₹ 3,200
              </Typography>
                <Typography variant="body2" color="text.secondary">
                Description :  A child safety seat or child restraint system is
                a restraint which is secured to the seat of an automobile equipped 
                with safety harnesses or seat belts.
                </Typography>
              </Grid>
              <Grid item>
              <Typography variant="h6" style={{ paddingBottom:'20px', paddingTop:'20px'}}><b>SPECIFICATIONS</b></Typography>  
              <TableContainer component={Card } style={{ height:'auto', width: "auto"}}>
                  <Table aria-label="Requests Details">
                    <TableBody>
                    
                          {rows.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                             <TableCell component="th" scope="row" align="center">
                              {row.property}
                              </TableCell>
                              <TableCell align="center">{row.data}</TableCell>
                                          </TableRow>
                                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>        
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid>
              <Grid item xs={9} style={{alignContent:"center"}}>

                <div >
                <Button variant="contained" color="primary" size="large"startIcon={<ShoppingCartIcon />} >Add to Cart</Button>
                </div>
         
              </Grid>
            </Grid>
          </Grid>
      </Grid>
  
      </Paper>
      </div>
      )
}

export default BuyItem;
