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

import acc4 from './images/acc4.png';
import acc5 from './images/acc5.png';
import acc6 from './images/acc6.png';
import acc7 from './images/acc7.png';
import hero from './images/hero.png';
import Paper from '@material-ui/core/Paper';

const itemData = [
    {
      img: acc4,
      name: 'Car Engine',
      company: 'Dynamo',
    },
    {
        img: acc5,
        name: 'Tire Wheel Cover',
        company: 'ZOHO',
      },
      {
        img: acc6,
        name: 'Gear Box',
        company: 'Motor BO',
      },
      {
        img: acc7,
        name: 'Axel',
        company: 'Marti-I',
      },
      {
        img: hero,
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
                style={{
                    margin: '0 auto',
                    maxWidth: 'relative'
                }}
                />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <Typography variant="h6" style={{padding:'20px', flex: 1}}>Tyres and Wheels</Typography>  
                <Button variant="contained" color="primary">VIEW ALL</Button>
            </div>
            <div>
            <ImageList gap={8} rows='1'>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                />
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

export default BuyAccessoriesList