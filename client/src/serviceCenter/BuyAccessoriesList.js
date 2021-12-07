import IconButton from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {styled, alpha} from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

import engine from './images/engine.png';
import tyre from './images/tyre.png';
import gear from './images/gear.png';
import axel from './images/axel.png';
import seat from './images/seat.png';
import Paper from '@material-ui/core/Paper';
import { autocompleteClasses } from '@mui/material';
import { width } from '@mui/system';

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
function BuyAccessoriesList(){
    return(
        <div style={{padding:'1rem'}}>
            <SearchBar
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
            </div>
        </div>
    )
}

export default BuyAccessoriesList