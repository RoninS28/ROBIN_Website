import React, { useEffect,useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';

const styles = makeStyles((theme) => ({
  cardOne: {
    
    marginLeft: "5vw",
    marginRight: "5vw",
  },
  cardTwo: {
   
    marginTop: "2vh",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
  
}));

function CustomerComplaints(props) {
  const { classes, theme } = props;

  const classes2 = styles();

  const location=useLocation();

  const [complaint,setComplaint]=useState(null);

  const name = props.name;
  const content = props.content;
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(
    theme.breakpoints.up("xs") && theme.breakpoints.down("sm")
  );
  const md = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const lg = useMediaQuery(
    theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );
  const xl = useMediaQuery(theme.breakpoints.up("lg"));

  const getComplaint=()=>{

    axios.get('/complaints/'+location.pathname)
        .then(res => {

           // console.log(res.data);

          setComplaint(res.data);
           
        })
        .catch((err) => {
            console.log(err);
        });

  }

  useEffect(()=>{

    location.pathname=location.pathname.replace('/complaints/','');

 //   console.log(location.pathname);

    getComplaint();

  },[complaint]);

  return (
    <div>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card className={classes2.cardOne}>
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar
                    alt="Kamlesh Raut"
                    src="/static/images/avatar/1.jpg"
                  />
                  <span style={{ marginLeft: "2vw", fontSize: "20px" }}>
                    {complaint? (complaint.customerID?"Customer ID: "+complaint.customerId:"Employee ID: "+complaint.employeeId):""}
                  </span>
                </div>

                <div style={{ marginTop: "2vh" }}>
                  {complaint ? complaint.description :"" }
                </div>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Call
                </Button>
                <Button variant="contained" color="primary">
                  Report
                </Button>
              </CardActions>
            </Card>
          
        </Grid>

        <Grid  item xs={12} sm={12} md={12} lg={12}>
            <Card  maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl} className={classes2.cardTwo}>
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar alt="You" src="/static/images/avatar/1.jpg" />
                  <span style={{ marginLeft: "2vw", fontSize: "20px" }}>
                    You
                  </span>
                </div>

                <div>
                  <TextField 
                     label="Reply" fullWidth
                  />
                </div>
                
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </CardActions>
              
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(CustomerComplaints);
