import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Button, Icon, TextField, Paper, Typography, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@material-ui/core';
import { fontFamily, fontSize } from '@mui/system';
import GenericTable from './GenericTable';
import { Divider, Grid } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

//Leave
function createData(srno, date, status, view) {
  return { srno, date, status, view };
}

const labels = ["srno", "date", "status", "view" ];

const rows=[
  createData('1', '01/01/21', 'Accepted', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('2', '01/01/21', 'Accepted', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('3', '01/01/21', 'Rejected', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('4', '01/01/21', 'Rejected', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('5', '01/01/21', 'Pending', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('1', '01/01/21', 'Accepted', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('2', '01/01/21', 'Accepted', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('3', '01/01/21', 'Rejected', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('4', '01/01/21', 'Rejected', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('5', '01/01/21', 'Pending', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
 ]

 //Complaints
function createComplaint(srno, date, status, view) {
  return { srno, date, status, view };
}

const labelsC = ["srno", "date", "status", "view" ];

const rowsC=[
  createData('1', '01/01/21', 'Read', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('2', '01/01/21', 'Read', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('3', '01/01/21', 'Read', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('4', '01/01/21', 'Read', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
  createData('5', '01/01/21', 'Unread', 
  <Button variant="contained" color="primary">VIEW</Button>
  ),
 ]
function SMComplaint(props) {


    const classes = useStyles();
    // create state variables for each input
    const [theme, setTheme] = useState('');
    const [topic, setTopic] = useState('');
    const [body, setBody] = useState('');
    
  const handleSubmit = e => {
      e.preventDefault();
      console.log(theme, topic, body);
      handleClose();
    };

  const [open, setOpen] = useState(false);
    
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

    return (
        <div style={{padding:'1rem'}}>
          <div align='right'>
        <Button 
        variant="contained"  
        color="primary"
        onClick={handleOpen}
        style={{marginBottom:'1rem'}}>
          COMPOSE 
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Application</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Choose type of application.
          </DialogContentText>

          <form className={classes.root} onSubmit={handleSubmit} property={Card}>
          <InputLabel id="theme-of-application"></InputLabel>
        <Select
            style={{ width: 300 }}
            value={theme}
                onChange={handleChange}
                name="theme"
                label="Theme"

              >
                <MenuItem value="Leave"  >Leave</MenuItem>
                <MenuItem value="Complaint">Complaint</MenuItem>
            </Select>

          <TextField
            label="Topic"
            variant="filled"
            required
            style={{ width: 300 }}
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
           <TextareaAutosize
            label="message-body"
            minRows={10}
            value={body}
            placeholder="Message"
            style={{ width: 300 }}
            onChange={e => setBody(e.target.value)}
          />
     
      </form>
      </DialogContent>
      <DialogActions>
        
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    <Divider />
    <Grid 
    container xs={12} 
    spacing={1}
    marginTop={1}
    >
      <Grid item xs={12} align='center'>
        <Typography variant="h4" ><b>LEAVES</b></Typography> 
      </Grid>
    
      <Grid item xs={12}>
        <GenericTable rows={rows} labels={labels}/>
      </Grid>
      <Grid item xs={12} align='center'>
        <Typography variant="h4" ><b>COMPLAINTS</b></Typography> 
      </Grid>
      <Grid item xs={12}>
        <GenericTable rows={rowsC} labels={labelsC}/>
      </Grid>
    </Grid>
  </div>
    )
}

export default SMComplaint
