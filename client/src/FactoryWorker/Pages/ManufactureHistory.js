import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles, Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
// import { Divider } from '@mui/material';
import Box from "@material-ui/core/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';

import $ from 'jquery';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { withTheme } from '@emotion/react';

// import ev2 from '../../images/car_man1.jpeg';
import im1 from '../../images/im1.jpg';
import im2 from '../../images/im2.jpg';
import im3 from '../../images/im3.jpg';
import im4 from '../../images/im4.jpg';
import im5 from '../../images/im5.jpg';
import { Button } from '@mui/material';



const Stage1 = [
  {
    id: "S1a", Stage: 'I', UpdatedDate: '1/10/21', Image: im1,
    Description: 'Plastic and metal parts and components are painted in booths in the paint department using a process known as powder-coating this is the same process by which automobiles are painted. A powder-coating apparatus works like a large spray-painter, dispersing paint through a pressurized system evenly across the metal frame.'
  },
  {
    id: "S1b", Stage: 'I', UpdatedDate: '2/10/21', Image: im2,
    Description: 'Painted parts are sent via overhead conveyors or tow motor (similar to a ski lift tow rope) to the assembly department where they are installed on the frame of the motorcycle.'

  },
  {
    id: "S1c", Stage: 'I', UpdatedDate: '4/10/21', Image: im3,
    Description: 'Wheels, brakes, wiring cables, foot pegs, exhaust pipes, seats, saddlebags, lights, radios, and hundreds of other parts are installed on the motorcycle frame. A Honda Gold Wing motorcycle, for example, needs almost as many parts to complete it as a Honda Civic automobile.'

  },
]

const Stage2 = [
  {
    id: "S2a", Stage: 'II', UpdatedDate: '6/10/21', Image: im4,
    Description: 'Wheels, brakes, wiring cables, foot pegs, exhaust pipes, seats, saddlebags, lights, radios, and hundreds of other parts are installed on the motorcycle frame. A Honda Gold Wing motorcycle, for example, needs almost as many parts to complete it as a Honda Civic automobile.'
  },


]


const Stage3 = [
  {
    id: "S3a", Stage: 'III', UpdatedDate: '12/11/21', Image: im5,
    Description: 'Painted parts are sent via overhead conveyors or tow motor (similar to a ski lift tow rope) to the assembly department where they are installed on the frame of the motorcycle.'

  },
  {
    id: "S3b", Stage: 'III', UpdatedDate: '22/11/21', Image: im3,
    Description: 'Plastic and metal parts and components are painted in booths in the paint department using a process known as powder-coating this is the same process by which automobiles are painted. A powder-coating apparatus works like a large spray-painter, dispersing paint through a pressurized system evenly across the metal frame.'
  },

]


const Stage4 = [
  {
    id: "S4a", Stage: 'IV', UpdatedDate: '12/11/21', Image: im5,
    Description: 'Painted parts are sent via overhead conveyors or tow motor (similar to a ski lift tow rope) to the assembly department where they are installed on the frame of the motorcycle.'

  },
  {
    id: "S4b", Stage: 'IV', UpdatedDate: '22/11/21', Image: im3,
    Description: 'Plastic and metal parts and components are painted in booths in the paint department using a process known as powder-coating this is the same process by which automobiles are painted. A powder-coating apparatus works like a large spray-painter, dispersing paint through a pressurized system evenly across the metal frame.'
  },

]



const Stage5 = [
  {
    id: "S5a", Stage: 'V', UpdatedDate: '12/11/21', Image: im5,
    Description: 'Painted parts are sent via overhead conveyors or tow motor (similar to a ski lift tow rope) to the assembly department where they are installed on the frame of the motorcycle.'

  },
  {
    id: "S5b", Stage: 'V', UpdatedDate: '22/11/21', Image: im3,
    Description: 'Plastic and metal parts and components are painted in booths in the paint department using a process known as powder-coating this is the same process by which automobiles are painted. A powder-coating apparatus works like a large spray-painter, dispersing paint through a pressurized system evenly across the metal frame.'
  },

]



const useStyles = makeStyles((theme) => ({

  firstPage: {
    // marginLeft:theme.spacing(4),
    padding: theme.spacing(2),
  },
  secondPage: {
    padding: theme.spacing(2),

  },
  stagesNames: {
    padding: theme.spacing(4),
    textAlign: 'center',
    cursor: 'pointer',
    //borderRadius: 25,


  },
  stagesNamesBoxfirst: {
    padding: theme.spacing(4),
    textAlign: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    cursor: 'pointer',

  },

  stagesNamesBoxLast: {
    padding: theme.spacing(4),
    textAlign: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    cursor: 'pointer',

  },
  gridstagenames: {

  },
  paperFirstpage: {
    borderRadius: 25,
  },
  gridcards: {
    padding: theme.spacing(4),
  },


}));
function ManufactureHistory() {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);

  const [st1, setst1] = useState([]);
  const [st2, setst2] = useState([]);
  const [st3, setst3] = useState([]);
  const [st4, setst4] = useState([]);
  const [st5, setst5] = useState([]);
  const [myarr, updatearr] = useState([]);

  const { id } = useParams();

  const getDetails = () => {
    const temp = [];

    axios.get('/factory/manufacturehistory/' + id).then((response) => {
      let mydata = response.data;

      console.log('mydat', mydata);

      //  mydata.map(item => {
      //    temp.push(item);
      //  })
      setUserData(mydata)
      console.log("inside", mydata);

      //  console.log('temp',temp);

      //  console.log('second',userData);


      const sta1 = [];
      const sta2 = [];
      const sta3 = [];
      const sta4 = [];
      const sta5 = [];

      const multistages = mydata[0].stages;

      multistages.forEach((element, index, array) => {
        if (element.stageno === 1) {
          sta1.push(element);
        }
        else if (element.stageno === 2) {
          sta2.push(element);
        }
        else if (element.stageno === 3) {
          sta3.push(element);
        }
        else if (element.stageno === 4) {
          sta4.push(element);
        }
        else if (element.stageno === 5) {
          sta5.push(element);
        }
      });

      //   console.log('st1 data: ',sta1);
      setst1(sta1);
      setst2(sta2);
      setst3(sta3);
      setst4(sta4);
      setst5(sta5);
      //  console.log(' second st1 data: ',st1);

    })
  }

  useEffect(() => {
    getDetails()
    console.log('renders');


  }, [])


  // console.log('inside second st1 data: ',st1);
  // console.log('inside second st2 data: ',st2);
  // console.log('inside second st3 data: ',st3);
  // console.log('inside second st4 data: ',st4);
  // console.log('inside second st5 data: ',st5);
  const arrid = ["stageone", "stagetwo", "stagethree", "stagefour", "stagefive"];


  console.log("outside", userData);


  return !userData ? <div>Loading</div> : (

    <div>
      {/* <h1> In front {st1}</h1> */}
      <Grid container justifyContent="center">
        <Typography variant="h6" style={{ fontSize: '30px', color: 'blue' }}>UPDATE HISTORY</Typography>
      </Grid>
      <Grid container>
        <Grid item lg={2} className={classes.firstPage}>
          <Paper className={classes.paperFirstpage}>

            <Box p={1} id="stageone" className={classes.stagesNamesBoxfirst}
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  if ((arrid[i] == "stageone")) {
                    //$("#"+arrid[i]).hide();
                    $("#stageone").css("background-color", "#42a5f5");
                    $("#stageone").css("color", "white");
                  }
                  else {
                    $("#" + arrid[i]).css("background-color", "white");
                    $("#" + arrid[i]).css("color", "black");
                  }
                }
                $("#twocontents").hide();
                $("#threecontents").hide();
                $("#fourcontents").hide();
                $("#fivecontents").hide();
                $("#onecontents").show();
              }}
            >
              <Typography variant="h6" >Stage I</Typography>

            </Box>
            <Divider variant='fullWidth' />

            <Box p={1} id="stagetwo" className={classes.stagesNames}
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  if ((arrid[i] == "stagetwo")) {
                    //$("#"+arrid[i]).hide();
                    $("#stagetwo").css("background-color", "#42a5f5");
                    $("#stagetwo").css("color", "white");
                  }
                  else {
                    $("#" + arrid[i]).css("background-color", "white");
                    $("#" + arrid[i]).css("color", "black");
                  }
                }

                $("#threecontents").hide();
                $("#fourcontents").hide();
                $("#fivecontents").hide();
                $("#onecontents").hide();
                $("#twocontents").show();
              }}
            >
              <Typography variant="h6">Stage II</Typography>
            </Box>
            <Divider variant='fullWidth' />

            <Box p={1} id="stagethree" className={classes.stagesNames}
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  if ((arrid[i] == "stagethree")) {
                    //$("#"+arrid[i]).hide();
                    $("#stagethree").css("background-color", "#42a5f5");
                    $("#stagethree").css("color", "white");
                  }
                  else {
                    $("#" + arrid[i]).css("background-color", "white");
                    $("#" + arrid[i]).css("color", "black");
                  }
                }
                $("#twocontents").hide();
                $("#fourcontents").hide();
                $("#fivecontents").hide();
                $("#onecontents").hide();
                $("#threecontents").show();
              }}
            >
              <Typography variant="h6">Stage III</Typography>
            </Box>


            <Divider variant='fullWidth' />


            <Box p={1} id="stagefour" className={classes.stagesNames}
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  if ((arrid[i] == "stagefour")) {
                    //$("#"+arrid[i]).hide();
                    $("#stagefour").css("background-color", "#42a5f5");
                    $("#stagefour").css("color", "white");
                  }
                  else {
                    $("#" + arrid[i]).css("background-color", "white");
                    $("#" + arrid[i]).css("color", "black");
                  }
                }
                $("#twocontents").hide();
                $("#threecontents").hide();
                $("#fivecontents").hide();
                $("#onecontents").hide();
                $("#fourcontents").show();
              }}
            >
              <Typography variant="h6">Stage IV</Typography>
            </Box>


            <Divider variant='fullWidth' />



            <Box p={1} id="stagefive" className={classes.stagesNamesBoxLast}
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  if ((arrid[i] == "stagefive")) {
                    //$("#"+arrid[i]).hide();
                    $("#stagefive").css("background-color", "#42a5f5");
                    $("#stagefive").css("color", "white");
                  }
                  else {
                    $("#" + arrid[i]).css("background-color", "white");
                    $("#" + arrid[i]).css("color", "black");
                  }
                }
                $("#twocontents").hide();
                $("#threecontents").hide();
                $("#onecontents").hide();
                $("#fourcontents").hide();
                $("#fivecontents").show();
              }}
            >
              <Typography variant="h6">Stage V</Typography>
            </Box>
            {/* <Divider variant='fullWidth'/> */}
          </Paper>
        </Grid>




        <Grid item lg={9} className={classes.secondPage}>
          <Paper style={{ backgroundColor: '#2C528F1A', borderRadius: 25, }}>
            <Grid container>

              <div id="onecontents" style={{ display: 'none' }}>

                {st1.map((item) => (
                  <Grid item lg={12} className={classes.gridcards} key={item.id}>
                    <Card className={classes.carddisplay}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item lg={3}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }}>
                              <b>Updated Date:</b> {item.updateddate} <br /> <b>Stage:</b> {item.stageno}
                            </Typography>
                          </Grid>
                          <Grid item lg={5}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }} >
                              <b>Description:</b><br />
                              {item.description}

                            </Typography>
                          </Grid>
                          <Grid item lg={4}>
                            <div className={classes.imgicon}>
                              <img src={im1} alt="image" width="250" height="200" />
                            </div>
                          </Grid>
                        </Grid>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}

              </div>




              <div id="twocontents" style={{ display: 'none' }}>
                {st2.map((item) => (
                  <Grid item lg={12} className={classes.gridcards} key={item.id}>
                    <Card className={classes.carddisplay}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item lg={3}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }}>
                              <b>Updated Date:</b> {item.updateddate} <br /> <b>Stage:</b> {item.stageno}
                            </Typography>
                          </Grid>
                          <Grid item lg={5}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }} >
                              <b>Description:</b><br />
                              {item.description}

                            </Typography>
                          </Grid>
                          <Grid item lg={4}>
                            <div className={classes.imgicon}>
                              <img src={im2} alt="image" width="250" height="200" />
                            </div>
                          </Grid>
                        </Grid>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </div>


              <div id="threecontents" style={{ display: 'none' }}>
                {st3.map((item) => (
                  <Grid item lg={12} className={classes.gridcards} key={item.id}>
                    <Card className={classes.carddisplay}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item lg={3}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }}>
                              <b>Updated Date:</b> {item.updateddate} <br /> <b>Stage:</b> {item.stageno}
                            </Typography>
                          </Grid>
                          <Grid item lg={5}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }} >
                              <b>Description:</b><br />
                              {item.description}

                            </Typography>
                          </Grid>
                          <Grid item lg={4}>
                            <div className={classes.imgicon}>
                              <img src={im3} alt="image" width="250" height="200" />
                            </div>
                          </Grid>
                        </Grid>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </div>


              <div id="fourcontents" style={{ display: 'none' }}>
                {st4.map((item) => (
                  <Grid item lg={12} className={classes.gridcards} key={item.id}>
                    <Card className={classes.carddisplay}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item lg={3}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }}>
                              <b>Updated Date:</b> {item.updateddate} <br /> <b>Stage:</b> {item.stageno}
                            </Typography>
                          </Grid>
                          <Grid item lg={5}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }} >
                              <b>Description:</b><br />
                              {item.description}

                            </Typography>
                          </Grid>
                          <Grid item lg={4}>
                            <div className={classes.imgicon}>
                              <img src={im4} alt="image" width="250" height="200" />
                            </div>
                          </Grid>
                        </Grid>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </div>


              <div id="fivecontents" style={{ display: 'none' }}>
                {st5.map((item) => (
                  <Grid item lg={12} className={classes.gridcards} key={item.id}>
                    <Card className={classes.carddisplay}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item lg={3}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }}>
                              <b>Updated Date:</b> {item.updateddate} <br /> <b>Stage:</b> {item.stageno}
                            </Typography>
                          </Grid>
                          <Grid item lg={5}>
                            <Typography variant="body2" align="left" style={{ fontSize: '15px' }} >
                              <b>Description:</b><br />
                              {item.description}

                            </Typography>
                          </Grid>
                          <Grid item lg={4}>
                            <div className={classes.imgicon}>
                              <img src={im5} alt="image" width="250" height="200" />
                            </div>
                          </Grid>
                        </Grid>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </div>


            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ManufactureHistory;