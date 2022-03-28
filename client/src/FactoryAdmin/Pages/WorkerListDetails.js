import React,{useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarIcon from "@material-ui/icons/Star";
import Work from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import leave from "../Data/Leave";
import workerComplaints from "../Data/WorkerComplaints";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import LineChart from "./LineChart";
import GenericTable from "./GenericTable";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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

const label1=['id','description','status','actions'];

const label2=['id','type','status','actions'];

function WorkerListDetails(props) {
  const { classes, theme } = props;

  const [index,setIndex]=useState(0);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [position,setPosition]=useState('');
  const [salary,setSalary]=useState(0);
  const [contact,setContact]=useState(0);

  const location=useLocation();

  const getWorkerDetail=()=>{

    axios.get('/employees')
        .then(res => {
            let worker = res.data[location.pathname];
    
           setName(worker["name"]);
           setEmail(worker["emailID"]);
           setPosition(worker["position"]);
           setSalary(worker["salary"]);
           setContact(worker['contact']);

           
        })
        .catch((err) => {
            console.log(err);
        });

  }

  useEffect(()=>{

    location.pathname=location.pathname.replace('/workers/','');

   // console.log(location.pathname);

    getWorkerDetail();

  })





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
        <Grid item xs={12} md={4} lg={4}>
          <Card style={{ borderRadius: "35px",marginLeft:'2vw',marginRight:'1vw'}}  maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
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
                  <h3>{name}</h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <CallIcon />
                  <span style={{ marginLeft: "1vw" }}>{contact}</span>
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
                    {email}
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
                  <span>Position: {position}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1vh",
                  }}
                >
                  <span>Salary: Rs.{salary}</span>
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

        <Grid item xs={12} md={8} lg={8}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
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
            <Container maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
              <GenericTable rows={leave} labels={label1}/>
            </Container>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Container maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}>
            <GenericTable rows={workerComplaints} labels={label2} />
          </Container>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Card style={{marginLeft:'2vw'}}>
            <LineChart state={state}/>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(WorkerListDetails);
