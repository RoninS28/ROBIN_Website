import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Input, useMediaQuery } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PrintIcon from "@material-ui/icons/Print";
import DownloadIcon from "@material-ui/icons/FontDownload";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import scooter1 from "../../images/scooter1.jpeg";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@mui/material/Grid";
import GenericTable from "./GenericTable";

const styles = (theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  custInfo: {
    maxHeight: "60vh",
    minwidth: "30vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  topRow: {
    display: "flex",
    justifyContent: "flex-end",
  },
  rowHeader: {
    fontWeight: "bold !important",
  },
  custDetail: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
  },
  rootContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
});

const rows1 = [
  {
    id: 1,
    model: "Hero Splender Plus",
    num: 20,
    Stage: "Brazing",
    img: scooter1,
  },
  {
    id: 2,
    model: "Hero Splender Plus",
    num: 20,
    Stage: "Brazing",
    img: scooter1,
  },
];

const complaints = [
  {
    id: "1",
    type: "Damage EV",
    date: "04-08-2021",
    status: "Addressed",
  },
  {
    id: "2",
    type: "Damage EV",
    date: "04-08-2021",
    status: "Addressed",
  },
];

const services = [
  {
    id: 1,
    date: "02-07-2021",
    vehicle: "4444-2222-9999",
    cost: 500,
  },
  {
    id: 2,
    date: "02-07-2021",
    vehicle: "4444-2222-9999",
    cost: 500,
  }
];

//orders
function createData(id, model, Stage) {
  return { id, model, Stage };
}

function getAllModels() {
  const allModels = [];
  rows1.map((model) => {
    console.log(model);
    allModels.push(createData(model.id, model.model, model.Stage));
  });
  return allModels;
}

const orders = getAllModels();
const orderLabels = ["id", "model", "Stage", "actions"];

//complaints

function createData2(id, type, status, date) {
  return { id, type, date, status };
}

function getAllModels2() {
  const allModels = [];
  complaints.map((model) => {
    console.log(model);
    allModels.push(createData2(model.id, model.type, model.status, model.date));
  });
  return allModels;
}

const complaintsRows = getAllModels2();
const complaintsLabels = ["id", "type", "status", "date", "actions"];

// services
function createData3(id, date, vehicle, cost) {
  return { id, date, vehicle, cost };
}

function getAllModels3() {
  const allModels = [];
  services.map((model) => {
    console.log(model);
    allModels.push(
      createData3(model.id, model.date, model.vehicle, model.cost)
    );
  });
  return allModels;
}

const servicesRows = getAllModels3();
const servicesLabels = ["id", "date", "vehicle", "cost", "actions"];

function CustomerDetail(props) {
  const { classes, theme } = props;
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

  return (
    <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
          >
            Details
            <Card className={classes.custInfo}>
              <div style={{ marginTop: "2vh" }}>
                <AccountCircleIcon />
              </div>
              <div className={classes.custDetail}>
                <div>
                  <h3>
                    {" "}
                    <span style={{ color: "blue" }}>Name:</span>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span style={{ color: "blue" }}>Phone:</span>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span style={{ color: "blue" }}>Email:</span>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span style={{ color: "blue" }}>Address:</span>{" "}
                  </h3>
                </div>
                <div>
                  <h3> Sandesh Mahajan</h3>
                  <h3> +91 9999999999 </h3>
                  <h3> sandeshmahajan@gmail.com </h3>
                  <h3> 12,Gloria Villa Shanti Nagar Pune </h3>
                </div>
              </div>

              <div>
                <Button
                  style={{ width: "7vw" }}
                  variant="contained"
                  color="secondary"
                >
                  Call
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    marginTop: "2vh",
                    marginBottom: "1vh",
                    width: "7vw",
                  }}
                  variant="contained"
                  color="primary"
                >
                  Message
                </Button>
              </div>
            </Card>
          </Container>
        </Grid>

        {/* //Services */}
        <Grid item xs={12} md={6} lg={6}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
          >
            Recent Services
            <GenericTable rows={servicesRows} labels={servicesLabels} />
          </Container>
        </Grid>
        {/* 
          Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
          >
            Orders
            <GenericTable rows={orders} labels={orderLabels} />
          </Container>
        </Grid>

        {/* Complaints */}
        <Grid item xs={12} md={6} lg={6}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
          >
            Complaints
            <GenericTable rows={complaintsRows} labels={complaintsLabels} />
          </Container>
        </Grid>

      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(CustomerDetail);
