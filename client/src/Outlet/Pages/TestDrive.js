import React,{useState,useEffect} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Input, useMediaQuery } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PrintIcon from "@material-ui/icons/Print";
import DownloadIcon from "@material-ui/icons/FontDownload";
import testDrive from "../Data/TestDrive";
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

import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core//TablePagination";

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GenericTable from "./GenericTable";
import GenericStatCard from "./GenericStatCard";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

const styles = makeStyles((theme) => ({
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
  statCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, name, model, where, date) {
  return { id, name, model, where, date };
}

function getAllModels() {
  const allModels = [];
  testDrive.map((model) => {
    console.log(model);
    allModels.push(
      createData(model.id, model.name, model.model, model.where, model.date)
    );
  });
  return allModels;
}

//const rows = getAllModels();
//const labels = ["id", "name", "model", "where", "date", "actions"];

//Dropdown
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Request", "Pending", "Completed"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function TestDrive(props) {
  const { classes, theme } = props;

   const [rows,setRows]=useState([]);
   const [labels,setLabels]=useState([ "name", "modelname", "location", "status", "actions"]);

  

  const getTestDrives=()=>{

    const testDrives=[];

    axios.get('/test-drives')
      .then((res)=>{

        const resData=res.data;
        resData.map(data=>{
          testDrives.push(data);
        });

        //console.log(testDrives,'only testdrive')

      }).then(()=>{

        testDrives.map(testDrive=>{

          axios.get(`/testing/${testDrive['customer']}`)
            .then((res)=>{
              const customer=res.data;
              testDrive['name']=customer['fname']+" "+customer['lname'];
            //  console.log(customer['fname']);
            }).catch(err=>{
              console.log(err);
            })

        })

     //   console.log(testDrives,'customer name taken');


      }).then(()=>{

        testDrives.map(testDrive=>{

          axios.get(`/model/${testDrive['model']}`)
          .then((res)=>{
            const model=res.data;
            testDrive['modelname']=model['modelName'];
         //   console.log(model['modelName']);
          })
          .catch(err=>{
            console.log(err);
          })

        })

//        console.log(testDrives);

      }).then(()=>{

        //console.log(testDrives,'final');
        setRows(testDrives);

      }).catch(err=>{
        console.log(err);
      })
      
    

  }

  useEffect(()=>{

   getTestDrives();

  },[]);

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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme2 = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4} md={6}>
          <GenericStatCard title="Total Test Drive:" subtitle="10" />
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={6}>
          <GenericStatCard title="Test Drive At Home:" subtitle="7" />
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={6}>
          <GenericStatCard title="Test Drive At Outlet:" subtitle="3" />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Container
            maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
            className={classes.listWrapper}
          >
            <div style={{ marginBottom: "2vh" }}>
              <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Placeholder</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <GenericTable rows={rows} labels={labels} view="/testDrive/" />
          </Container>
        </Grid>

        

      </Grid>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Grid  container spacing={1}>
    //     <Grid item xs={12} sm={12} lg={3} md={6}>
    //       <GenericStatCard title="Total Test Drive:" subtitle="10" />
    //     </Grid>

    //     <Grid item xs={12} sm={12} lg={3} md={6}>
    //       <GenericStatCard title="Test Drive At Home:" subtitle="7" />
    //     </Grid>

    //     <Grid item xs={12} sm={12} lg={3} md={6}>
    //       <GenericStatCard title="Test Drive At Outlet:" subtitle="3" />
    //     </Grid>
    //   </Grid>

    //   <Container
    //     maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
    //     className={classes.listWrapper}
    //   >
    //     <div style={{ marginBottom: "2vh" }}>
    //       <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
    //         <Select
    //           multiple
    //           displayEmpty
    //           value={personName}
    //           onChange={handleChange}
    //           input={<OutlinedInput />}
    //           renderValue={(selected) => {
    //             if (selected.length === 0) {
    //               return <em>Placeholder</em>;
    //             }

    //             return selected.join(", ");
    //           }}
    //           MenuProps={MenuProps}
    //           inputProps={{ "aria-label": "Without label" }}
    //         >
    //           <MenuItem disabled value="">
    //             <em>Placeholder</em>
    //           </MenuItem>
    //           {names.map((name) => (
    //             <MenuItem
    //               key={name}
    //               value={name}
    //               style={getStyles(name, personName, theme)}
    //             >
    //               {name}
    //             </MenuItem>
    //           ))}
    //         </Select>
    //       </FormControl>
    //     </div>

    //     <GenericTable rows={rows} labels={labels} view="/testDrive/1" />
    //   </Container>

    //   <div>
    //     <h2>
    //       <span style={{ color: "blue" }}>Total :</span> 10
    //     </h2>
    //   </div>

    // </div>
  );
}

export default withStyles(styles, { withTheme: true })(TestDrive);
