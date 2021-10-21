import React from "react";
import scooter1 from "../../images/scooter1.jpeg";

import { Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  modelDetail: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  modelImage: {
    height: 220,
    width: 220,
  },
  modelInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modelSteps: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function TestDriveDetail(props) 
{
  const classes = styles();


  return (
    <div>
      <div className={classes.modelDetail}>
        <div className={classes.modelInfo}>
          <div>
            <h1 style={{ color: "red" }}>City Electric Scooter</h1>
          </div>

          <div style={{ marginLeft: "0vw" }}>
            <img src={scooter1} className="modelImage" alt="EV" />
          </div>

          <div>
            <h3>Ticket ID: C2K18192222</h3>
          </div>
        </div>

        <div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Name</span>: Sandesh Mahajan
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Contact</span>: +91 9999999999
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Model</span>: City Electric
              Scooter
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Variant</span>: Top-End Model
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Color</span>: Red
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Date</span>: 09-11-2021
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Time Slot:</span>: 6pm-7pm
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Place</span>: Home
            </h2>
          </div>
          <div>
            <Button variant="contained" color="primary">
              <CallIcon /> Customer
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "2vh" }}
            >
              <MailOutlineIcon /> Customer
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.modelSteps}>
        <div>
          <h2>
            <span style={{ color: "blue" }}>Status:</span>{" "}
            <span style={{ color: "green" }}>Completed</span>
          </h2>
        </div>
        <div>
          <Card style={{ width: "50vw", marginBottom: "5vh" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <h3>
                  <span style={{ color: "blue" }}>Employee: </span> Kamlesh Raut
                </h3>
              </Typography>
              <Typography component="div">
                <h3>
                  <span style={{ color: "blue" }}>Place: </span> Service center
                </h3>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <h3>
                  <span style={{ color: "blue" }}>Charges: </span> Rs.0/-
                </h3>
              </Typography>
              <Typography component="div">
                <h3>
                  <span style={{ color: "blue" }}>Rating: </span> <Star />{" "}
                  <Star />
                  <Star />
                  <Star />
                </h3>
              </Typography>
            </CardContent>
            {/* <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(TestDriveDetail);
