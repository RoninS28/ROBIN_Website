import React from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
import Work from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import orders from "../Data/Order";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import leave from "../Data/Leave";
import { Line } from "react-chartjs-2";
import workerComplaints from "../Data/WorkerComplaints";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import LineChart from "./LineChart";

const styles = makeStyles((theme) => ({
  container: {},
}));

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Working Graph",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 40, 25, 89, 23, 26, 34, 47],
    },
  ],
};

function WorkerListDetails(props) {
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
    <div>
      <Grid container spacing={1}>
        <Grid item sx={12} md={4} lg={4}>
          <Card style={{ borderRadius: "35px" }}  maxWidth={xs ? "sx" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div>
                  <AccountCircleIcon
                    style={{ height: "10vh", width: "10vw" }}
                  />
                </div>

                <div>
                  <h3>Kamlesh Raut</h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <CallIcon />
                  <span style={{ marginLeft: "1vw" }}>9999999999</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <EmailIcon marginLeft="5vw" />
                  <span style={{ marginLeft: "1vw" }}>
                    kameshraut@gmail.com
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <Work />
                  <span>Position: Jr. Mechanic</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <span>Salary: Rs.40000</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <HomeIcon />
                </div>

                <p>114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <Fab color="primary" aria-label="add">
                    {" "}
                    <EditIcon />{" "}
                  </Fab>
                  <Fab
                    color="secondary"
                    style={{ marginLeft: "1vw" }}
                    aria-label="add"
                  >
                    <DeleteIcon />
                  </Fab>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sx={12} md={8} lg={8}>
          <Container
            maxWidth={xs ? "sx" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>Total Working Days : 100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Leaves : 5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Leaves Available : 20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Leave Applications : 2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>

          <div style={{ marginTop: "2vh" }}>
            <Container maxWidth={xs ? "sx" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>LEAVE ID</TableCell>
                      <TableCell align="center">DESCRIPTION</TableCell>
                      <TableCell align="center">STATUS</TableCell>
                      <TableCell align="center">VIEW</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leave.map((leave) => (
                      <TableRow
                        key={leave.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {leave.id}
                        </TableCell>
                        <TableCell align="center">
                          {leave.description}
                        </TableCell>
                        <TableCell align="center">
                          {leave.status == "Approved" ? (
                            <span style={{ color: "green" }}>Approved</span>
                          ) : leave.status == "Pending" ? (
                            <span style={{ color: "yellow" }}>Pending</span>
                          ) : (
                            <span style={{ color: "red" }}>Denied</span>
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <Button variant="contained" color="primary">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </div>
        </Grid>

        <Grid item sx={12} md={12} lg={12}>
          <Container maxWidth={xs ? "sx" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Complaint Id</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">View</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workerComplaints.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">
                        {row.status == "Addressed" ? (
                          <span style={{ color: "green" }}>Addressed</span>
                        ) : (
                          <span style={{ color: "red" }}>Pending</span>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="primary">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Grid>

        <Grid item sx={12} sm={12} md={10} lg={10}>
          
          <Card>
            <LineChart state={state}/>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(WorkerListDetails);
