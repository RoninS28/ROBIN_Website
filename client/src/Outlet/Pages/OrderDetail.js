import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import scooter1 from "../../images/scooter1.jpeg";
import { Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { Grid } from "@material-ui/core";
import GenericSteps from "../../FactoryAdmin/Pages/GenericSteps";
import GenericAccordian from "../../FactoryAdmin/Pages/GenericAccordian";

const steps = [
  "Deformation",
  "Casting",
  "Polymer process",
  "Machining",
  "Finishing",
];

const styles = makeStyles((theme) => ({
  modelDetail: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  modelImage: {
    height: 400,
    width: 400,
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
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  stepDescription: {
    marginTop: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5vh",
  },

  workerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function OrderDetail(props) {
  const classes = styles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.modelInfo}>
            <div>
              <h1 style={{ color: "red" }}>CITY ELECTRIC SCOOTER</h1>
            </div>

            <div style={{ marginLeft: "0vw" }}>
              <img src={scooter1} className={classes.modelImage} alt="EV" />
            </div>

            <div>
              <h3>Ticket ID: C2K18192222</h3>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.description}>
            <div>
              <h2>
                <span style={{ color: "blue" }}>Name</span>: Tanaya Wankar
              </h2>
            </div>
            <div>
              <h2>
                <span style={{ color: "blue" }}>Phone</span>: 7802048930
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
                <span style={{ color: "blue" }}>Price of each EV</span>:
                20,000/-
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
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.modelSteps}>
            <GenericSteps steps={steps} />
            <div>
              <Button variant="contained" color="secondary">
                Update Status
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.stepDescription}>
            <GenericAccordian />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.workerInfo}>
            <div>
              <h2>
                <span style={{ color: "blue" }}>Batch Supervisior</span>:
                Sandesh Mahajan
              </h2>
            </div>
            <div>
              <h2>
                <span style={{ color: "blue" }}>Contact</span>: +91 9999999999
              </h2>
            </div>
            <div>
              <Button variant="contained" color="primary">
                <CallIcon /> Supervisior
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "2vh" }}
              >
                <MailOutlineIcon /> Supervisior
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(OrderDetail);
