import React, { useEffect, useState } from "react";
import useTable from "./UseTable";
import PageHeader from "./PageHeader";
import NewModel from "./NewModel";
import Controls from "./controls/Controls";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import {
  Paper,
  makeStyles,
  CssBaseline,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "./controls/Popup";
import axios from "axios";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ConfirmDialog from "../Pages/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  searchInput: {
    width: "65%",
  },
  newButton: {
    position: "Absolute",
    right: "40px",
    top: "200px",
  },
}));

const headCells = [
  { id: "name", label: "Model Name" },
  { id: "MnName", label: "Manager Name", disableSorting: true },
  { id: "mobile", label: "Mobile Number", disableSorting: true },
  { id: "statusId", label: "Status" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Inspection() {
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState([]);

  const getModels = () => {
    axios
      .get("http://localhost:8080/api/factory-worker")
      .then(({ data }) => {
        console.log({ data });
        setModels(data.models);
        setLoading(false);
      })
      .then((err) => {
        console.log({ err });
      });

    /*This part not working. Showing status in numbers. Show completed or not.
        let statustypes = getDepartmentCollection();
        models.map(x => ({
            ...x,
            status: statustypes[x.status].title
        })) */
  };

  const editModel = async (item) => {
    try {
      console.log({ item });
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    getModels();
  }, [loading]);

  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState({
    value: false,
    type: "new",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else return items.filter((x) => x.name.includes(target.value));
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    resetForm();
    setRecordForEdit(null);
    setOpenPopup((prev) => ({ ...prev, value: false }));
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup((prev) => ({ type: "update", value: true }));
  };

  const onDelete = (id) => {
    console.log({ id });

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    axios
      .delete(`http://localhost:8080/api/factory-worker/${id}`)
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.log({
          err: err,
        });
      });
    window.location.reload();
  };

  const getStatusString = (status) => {
    if (status === 0) {
      return "Stage 1";
    } else if (status === 1) {
      return "Stage 2";
    } else if (status === 2) {
      return "Stage 3";
    } else {
      return "Stage 4";
    }
  };

  return (
    <>
      <PageHeader
        title="Vehicles' Inspection"
        subTitle="Manufacturing in factory"
        icon={<TwoWheelerIcon fontSize="large" />}
      />

      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <Controls.Button
          text="Add New"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.newButton}
          onClick={() => {
            setOpenPopup((prev) => ({ value: true, type: "new" }));
            setRecordForEdit(null);
          }}
        />
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.managerName}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{getStatusString(item.status)}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are you sure to delete this record?",
                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          onDelete(item._id);
                        },
                      });
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title={openPopup.type === "new" ? "Add new model" : "Update Model"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewModel
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          setOpenPopup={setOpenPopup}
          type={openPopup.type}
        />
      </Popup>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <CssBaseline />
    </>
  );
}
