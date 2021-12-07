
import SearchBar from 'material-ui-search-bar';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import engine from './images/engine.png';
import tyre from './images/tyre.png';
import gear from './images/gear.png';
import axel from './images/axel.png';
import seat from './images/seat.png';
import Paper from '@material-ui/core/Paper';
import { autocompleteClasses } from '@mui/material';
import { width } from '@mui/system';
import { Link } from 'react-router-dom';

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
function BuyCategory(){
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
            </div>
            <div style={{padding:'1rem'}}>
            <ImageList cols='6' gap={20}>
             {itemData.map((item) => (
                <ImageListItem key={item.img}>
               <Link style={{ textDecoration: 'none' }} to="/accessories-details"> <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      height:'relative',
                      width:'auto'}}
                /></Link>
                <ImageListItemBar
                    align='center'
                    title={item.name}
                    subtitle={<span>by: {item.company}</span>}
                    position="below"
                />
                </ImageListItem>
            ))}
            </ImageList>
            </div>
        </div>
    )
}

export default BuyCategory