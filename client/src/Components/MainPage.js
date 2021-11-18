//
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container} from "@material-ui/core";

import { Button } from '@material-ui/core';
import {Person} from "@material-ui/icons";

import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Feed from './Feed';
import Rightbar from './Rightbar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//      

const useStyles =makeStyles(theme=>({
   button:{
     color:"white",
     backgroundColor:theme.palette.success.dark,
   }
}));
function MainPage()
{
    const classes = useStyles()
    return(
           
         <div>
              {/* <Navbar /> */}
             {/* <Grid container>
                 <Grid item sm={2} xs={2}>
                    <Leftbar />
                 </Grid>

                 <Grid item sm={7} xs={10}>
                    <Feed/>
                 </Grid>

                 <Grid item sm={3}>
                    <Rightbar/>
                 </Grid>
             </Grid> */}

             <Card sx={{ maxWidth: 345 }}>
                {/* <CardActionArea> */}
                    <CardMedia                
                    alt="green iguana"
                    />
                    <CardContent>
                    <h1>lizard</h1>
                    
                    </CardContent>
                {/* </CardActionArea> */}
                </Card>
           
           
             {/* <Button
            variant="contained"
            size="large"
            startIcon={<Person/>}
            className={classes.button}
            >
                material UI 
            </Button> */}
        </div>
    );
}
export default MainPage;









// {itemCard.map((item) => (

//     <Grid item lg={4} className={classes.gridcards} key={item.id}>
//         <Card className={classes.carddisplay}>
              
//                  <CardMedia
//                     component="img"
//                     alt="Image"
//                     height="130"
//                     width="100"
//                     src={`${item.img}`}
//                     srcSet={`${item.img}`}
//                    // image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
//                   />
                  
//               <CardContent>
//               <Divider />
//                 <Typography  variant="button" component="div" align="center" className={classes.cardname}>
//                   {item.name}
//                 </Typography>
//                 <Typography variant="button" component="div" color="text.secondary" align="center" className={classes.cardprice}>
//                   {item.price}
//                 </Typography>
//                 <Typography variant="body2" component="div" color="text.secondary" align="center">
//                   {item.company}
//                 </Typography>
//               </CardContent>
//               {/* <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//               </CardActions> */}
//         </Card>
//     </Grid>

// ))}




// const itemCard = [
//     {
//       img: engine,
//       name: 'Car Engine',
//       price: '$ 300',
//       company: 'Dynamo',
//     },
//     {
//       img: tyre,
//       name: 'City Pro',
//       price: '$ 100',
//       company: 'AGM',
//     },
//     {
//       img: gear,
//       name: 'Screw Gear',
//       price: '$ 50',
//       company: 'SKT',
//     },
//     {
//       img: engine,
//       name: 'Car Engine',
//       price: '$ 70',
//       company: 'Dynamo',
//     },
//     {
//       img: axel,
//       name: 'Rear press',
//       price: '$ 71',
//       company: 'Dynamo',
//     },
//     {
//       img: seat,
//       name: 'PU Leather Seat',
//       price: '$ 300',
//       company: 'TM',
//     },
//   ]