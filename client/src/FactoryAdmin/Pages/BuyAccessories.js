import React,{useState} from 'react';
import engine from '../../images/engine.png';
import tyre from '../../images/tyre.png';
import gear from '../../images/gear.png';
import axel from '../../images/axel.png';
import seat from '../../images/seat.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from "@material-ui/core/Card";
import Button  from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchBar from 'material-ui-search-bar';
import Accessory from './Accessory';

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
]



function BuyAccessories() {

  const [category,setCategory]=useState('');

  const handleChange=(e)=>{
    setCategory(e.target.value);
  }

    return (
        <div>

            <div>

            <div style={{marginLeft:"5vw",marginBottom:"2vh"}}>

            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
            />

            <Box style={{width:"10vw"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Type"
                                onChange={handleChange}
                                >
                                <MenuItem value="Customer">Tyres And Wheels</MenuItem>
                                <MenuItem value="Worker">Screw ,Nuts and Bolts</MenuItem>
                                </Select>
                            </FormControl>
              </Box>
              </div>

            
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {itemData.map((item)=>(
                  <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={item.img} style={{ height: "15vh", width: "10vw" }} />
                    <h3>{item.name}</h3>
                    <Button variant="contained" color="primary">
                      Add
                    </Button>
                  </div>
                </Grid>
              ))}
          </Grid>


            </div>
            
        </div>
    )
}

export default BuyAccessories
