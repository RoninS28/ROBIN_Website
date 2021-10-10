import React from 'react';
import engine from '../../images/engine.png';
import tyre from '../../images/tyre.png';
import gear from '../../images/gear.png';
import axel from '../../images/axel.png';
import seat from '../../images/seat.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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
    return (
        <div>

            <div>

            <ImageList cols={4} sx={{ width: 1600, overflowX: 'scroll' }} gap={20} style={flexContainer} >
            {itemData.map((item) => (
                <ImageListItem  key={item.img}>
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
            
        </div>
    )
}

export default BuyAccessories
