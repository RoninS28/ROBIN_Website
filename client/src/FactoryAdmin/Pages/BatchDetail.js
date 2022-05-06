import React, { useEffect, useState } from "react";
import scooter1 from "../../images/scooter1.jpeg";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GenericSteps from "./GenericSteps";
import GenericAccordian from "./GenericAccordian";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Paper } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const styles = makeStyles((theme) => ({
  modelDetail: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  modelImage: {
    height: 320,
    width: 320,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  modelInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modelSteps: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  stepDescription: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  workerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function BatchDetail(props) {
  const classes = styles();

  // http://localhost:3000/batches/625a6089d378c16486fd8b4b
  const location = useLocation();
  const [batchId, setBatchId] = useState('');
  const [batchDetails, setBatchDetails] = useState({});
  const [st1, setst1] = useState([]);
  const [st2, setst2] = useState([]);
  const [st3, setst3] = useState([]);
  const [st4, setst4] = useState([]);
  const [st5, setst5] = useState([]);
  const [selectedStage, setSelectedStage] = useState([]);

  const stages = ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"];

  const getBatchDetails = () => {
    console.log("Getting batch details...");

    axios.get(`/batches/${batchId}`)
      .then(res => {
        let batchData = res.data;
        console.log("fetched data: ", batchData);
        setBatchDetails(batchData);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {

    // fetch batch details here
    console.log("use effect");
    setBatchId(location.pathname.split('/')[2]);

    console.log("batch Datails ", batchDetails);


    if (JSON.stringify(batchDetails) == JSON.stringify({})) {
      console.log("Get batch details from db");
      getBatchDetails();
    }
    else {
      if (batchDetails.stages) {
        console.log("setting the arrays....");

        const sta1 = [];
        const sta2 = [];
        const sta3 = [];
        const sta4 = [];
        const sta5 = [];

        batchDetails.stages.map(element => {
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

        setst1(sta1);
        setst2(sta2);
        setst3(sta3);
        setst4(sta4);
        setst5(sta5);

        console.log(st1);
      }
    }
  }, [batchId, batchDetails])

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    console.log("Handle click event...");
    if(index == 0)
      setSelectedStage(st1);
    else if(index == 1)
      setSelectedStage(st2);
    else if(index == 2)
      setSelectedStage(st3);
    else if(index == 3)
      setSelectedStage(st4);
    else if(index == 4)
      setSelectedStage(st5);
    else
      setSelectedStage([]);
    
    setSelectedIndex(index);
  };


  return (
    <div>
      <Grid container spacing={2}>
        {batchDetails && (
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography gutterBottom variant="h5" component="div" sx={{ m:2 }}>
                Batch ID: {batchDetails.BatchId}
          </Typography>
        </Grid>
        )}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', m:2 }}>
            <List component="nav" aria-label="secondary mailbox folder">

              {stages.map((stage, idx) => (
                <ListItemButton
                  selected={selectedIndex === idx}
                  onClick={(event) => handleListItemClick(event, idx)}
                >
                  <ListItemText primary={stage} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {selectedStage.map(stage => (
            <Card sx={{ m:2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {stage.updateddate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stage.description}
              </Typography>
            </CardContent>
          </Card>
          ))}
        </Grid>


      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(BatchDetail);
