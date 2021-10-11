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


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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

function AccessoryPage() {
    const [feature, setFeature] = React.useState('');

    const handleChange = (event) => {
      setFeature(event.target.value);
    };
      return(
          <div style={{padding:'1rem'}}>
         <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }} style={{ maxWidth: 'md', maxHeight:'auto',}}>
        <Grid container spacing={2}>
          <Grid item>
              <Img alt="complex" src={seat} style={{height:400}}/>
          </Grid>
          <Grid item l={12} sm container>
            <Grid item l container direction="column" spacing={2}>
              <Grid item l>
                <Typography gutterBottom variant="subtitle1" component="div">
                  PU Leather Seat ( Flexible Design with Comfort) 
                </Typography>
                <Typography variant="body2" gutterBottom>
                  AGM Brand
                  </Typography>
              <Typography variant="subtitle1" component="div">
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
              <Grid item xs={12}>
                <FormControl sx={{width:'10%'}}>
                  <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                    <Select
                      style={{ width: '100%' , align:'center'}}
                      value={feature}
                      label="Amount"
                      onChange={handleChange}
                      name="status"
                      style={{marginRight:'20px'}}
                    >
                      <MenuItem value="1">1000</MenuItem>
                      <MenuItem value="2">2000</MenuItem>
                      <MenuItem value="3">3000</MenuItem>
                      <MenuItem value="4">4000</MenuItem>
                      <MenuItem value="5">5000</MenuItem>
                      <MenuItem value="6">6000</MenuItem>
                      <MenuItem value="7">7000</MenuItem>
                      <MenuItem value="8">8000</MenuItem>
                      <MenuItem value="9">9000</MenuItem>
                      <MenuItem value="10">10,000</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" color="primary" style={{marginTop:'10px'}}>REQUEST FOR PARTS</Button>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
  
      </Paper>
      </div>
      )
}

export default AccessoryPage;
