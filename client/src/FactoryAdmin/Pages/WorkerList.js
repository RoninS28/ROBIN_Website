import React,{useState,useEffect} from "react";
import Container from "@material-ui/core/Container";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import workers from "../Data/Workers.js";
import GenericTable from "./GenericTable";
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

function createData(id, name, phone, email, position, address, salary) {
  return { id, name, phone, email, position, address, salary };
}

function getAllModels() {
  const allModels = [];
  workers.map((model) => {
    console.log(model);
    allModels.push(
      createData(
        model.id,
        model.name,
        model.phone,
        model.email,
        model.position,
        model.address,
        model.salary
      )
    );
  });
  return allModels;
}



const rows = getAllModels();

const labels = [
  "id",
  "name",
  "phone",
  "email",
  "position",
  "dateOfJoin",
  "salary",
  "actions",
];

function WorkerList(props) {
  const { classes, theme } = props;

  const [rows,setRows]=useState([]);

  const [labels,setLabels]=useState(["name","contact","emailID","position","actions",]);

  const getAllWorkers = () => {

      const allWorkers=[];

    axios.get('/employees')
        .then(res => {
            let workerArr = res.data;
            console.log(workerArr);
            workerArr.map(worker => {
                allWorkers.push(worker);
            });
            console.log("all workers ", allWorkers)
            setRows(allWorkers);
        })
        .catch((err) => {
            console.log(err);
        });
  }



  useEffect(()=>{
    console.log("In useEffect");
    getAllWorkers();

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

  return (
    <div>
      <Container
        maxWidth={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl}
        className={classes.listWrapper}
      >
        <GenericTable rows={rows} labels={labels} view="/workers/1" />
      </Container>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(WorkerList);
