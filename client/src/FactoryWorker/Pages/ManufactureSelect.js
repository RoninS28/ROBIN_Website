import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles, Container } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from "react-router-dom";



import SelectStages from '../Shared/SelectStages';

import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import ImageUpload from '../Shared/ImageUpload';

import ebike from '../../images/ebike.jpeg';
import ev3 from '../../images/ev3.png';
import ev2 from '../../images/ev2.png';

const ticketSet =[
    {id: "1", TicketId: 'B1015A'},
    {id: "2", TicketId: 'B1015B'},
    {id: "3", TicketId: 'B1015C'},
    {id: "4", TicketId: 'B1015D'},
    {id: "5", TicketId: 'B1015E'},
    {id: "6", TicketId: 'B1015F'},
    {id: "7", TicketId: 'B1015G'},
    {id: "8", TicketId: 'B1015H'},
    {id: "9", TicketId: 'B1015I'},
    {id: "10", TicketId: 'B1015J'},
    {id: "11", TicketId: 'B1015K'},
  ]

  const useStyles = makeStyles((theme) =>({
      Maindiv:{
        //backgroundColor:"#DBF3FA",
      },

   headingname:{
    backgroundColor:theme.palette.info.dark,
    padding: theme.spacing(1),
    color:"white"
   },
   headingtitle:{
    padding: theme.spacing(3),
    color: theme.palette.secondary.main,
   },
   branddropdown:{
   // width: 100,
   },
   imgicon:{
       paddingTop: theme.spacing(6),
   }
   
    

}));

function ManufactureSelect()
{
    const classes = useStyles();
    const [stage, setstage] = React.useState('');

  const handleChange = (event) => {
    setstage(event.target.value);
  };

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    return(
        <div className={classes.Maindiv}>

             <Grid container justifyContent="center" pl={10}>
                    <Grid item display="flex">
                        <Typography variant="h6" style={{fontSize:'35px'}} className={classes.headingtitle} >
                         UPDATE STAGES</Typography> 
                       
                         <div className={classes.headingtitle} style={{alignItems:'right'}}>
                         <Button variant="outlined" >TODAY's DATE: {today}</Button>
                         </div>
                    </Grid>
                    
              </Grid>
              



          <Grid container alignItems="" justifyContent="">
            <Grid item lg={4} md={4} sx={4}>
                    <div className={classes.imgicon}>
                        <img src={ebike} alt="image" width="350" height="300" />
                    </div>
                    <div className={classes.imgicon}>
                        <img src={ev3} alt="image" width="350" height="300" />
                    </div>
            </Grid>
            <Grid item lg={7}>

            <Typography variant="h6" align="center" className={classes.headingname} >
                   Select Batch ID's to Update</Typography> 
            <Card >
                                   
            <CardContent>
               
            <TableContainer style={{overflowY: 'scroll', height:'80vh' }}>
            <Table sx={{ minWidth: 650 }} lg={7} md={11} aria-label="simple table">
                
                <TableBody>
                  {ticketSet.map((item) => (

                    <TableRow  key={item.id}>
                        <TableCell align="center">
                          <Checkbox />
                          
                        </TableCell>
                        <TableCell align="right">
                           <Typography  style={{fontWeight: 500, fontSize: 'h6.fontSize', paddingLeft: '40px'}}>{item.TicketId}</Typography>  
                           
                        </TableCell>
                        <TableCell align="right">
                           <Link to="/manufacturehistory" style={{ textDecoration: 'none' }} >
                             <Button variant="contained" size="large" >Display History</Button>
                            </Link>
                        </TableCell>
                    </TableRow>

                     ))}

                </TableBody>
                
            </Table>
            </TableContainer>
            </CardContent>
                               
            </Card>

            </Grid>
           </Grid>
                <br />
           <Grid container align="right" style={{padding:4}}>
            <Grid item lg={6} style={{padding:'10px'}}>
               <Button variant="contained" size="large" style={{backgroundColor:'#2e7d32'}}>SELECT All</Button>
            </Grid>
            <Grid item lg={3} style={{padding:'10px'}}>
               <Button variant="contained" size="large" style={{backgroundColor:'#d32f2f'}}>DESELECT ALL</Button>
            </Grid>
           </Grid>
           <br />

           <Grid container style={{paddingTop:'20px'}} > 
               <Grid item lg={5}>
                    <div className={classes.imgicon}>
                        <img src={ev2} alt="image" width="350" height="350" />
                    </div>
                </Grid>
                <Grid item lg={7}>
                    <Grid container align="">
                        <Grid item lg={2}>
                            <Grid container direction='column' >
                                <Grid item mb={4}>
                                       <Typography  variant="h6" style={{fontWeight: 500, fontSize: 'h5.fontSize', paddingTop:'6px'}}>Select Stage :</Typography>  
    
                                </Grid>
                                <Grid item>
                                      <Typography  variant="h6" style={{fontWeight: 500, fontSize: 'h5.fontSize', paddingTop:'18px'}}>Add description :</Typography>  

                                </Grid>

                                <Grid item>
                                      <Typography  variant="h6" style={{fontWeight: 500, fontSize: 'h5.fontSize', paddingTop:'78px'}}>Upload Image:</Typography>  

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item lg={10}>
                            <Grid container direction='column'>
                                <Grid item style={{paddingLeft:'20px' }}>
                                     <SelectStages/> 
                                </Grid>
                                <Grid item style={{paddingLeft:'20px' }}>
                                    <br /> <textarea name="" id="" cols="30" rows="7" style={{ border: '1px solid rgba(0,0,0,0.3)'}}></textarea>
                                </Grid>

                                <Grid item style={{paddingLeft:'20px',paddingTop: '10px' }}>
                                   <ImageUpload  />
                                </Grid>

                                <Grid item style={{paddingLeft:'20px', paddingTop: '50px' }}>
                                <Button variant="contained" size="large" style={{backgroundColor:'#ED6C02'}}>Update details</Button>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
                   <br />
                   <br />
                
        </div>
    );
}
export default ManufactureSelect;