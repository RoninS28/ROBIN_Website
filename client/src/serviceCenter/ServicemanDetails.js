import React from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Work from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Line } from 'react-chartjs-2';
import { CardHeader } from '@material-ui/core';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Working Graph',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  const leave=[
    {
        id:1,
        description:'Sick Leave',
        status:'Approved'
    },
    {
        id:2,
        description:'Casual Leave',
        status:'Denied'
    },
    {
        id:2,
        description:'Casual Leave',
        status:'Pending'
    }
]

const workerComplaints=[
    {
        id:1,
        type:'Personal',
        status:'Addressed',
    },
    {
        id:2,
        type:'Personal',
        status:'Pending',
    }
]

const workerHistory=[
    {
        id:'C2NSFK',
        date:'01/01/21',
        address:'Kothrud',
    },
    {
        id:'C2ADLF',
        date:'01/01/21',
        address:'Kothrud',
    }
]

function ServicemanDetails() {
    return (
        <div style={{padding:'1rem'}}>
        <Grid container spacing={2} >
            <Grid item xs={6}>
            <Grid container   justifyContent="center">
                <Grid item xs={10}>
                    <Card elevation={3} style={{borderRadius:"35px"}}>
                        <CardContent>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center" }}>
                                
                                <div >
                                <AccountCircleIcon style={{height:"10vh",width:"10vw"}}/>
                                </div>

                                <div>
                                    <h3>Kamlesh Raut</h3>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                    <CallIcon/>
                                    <span style={{marginLeft:"1vw"}}>9999999999</span>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                <EmailIcon marginLeft="5vw"/>
                                <span style={{marginLeft:"1vw"}}>kameshraut@gmail.com</span>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                    <Work/>
                                    <span>Position: Jr. Mechanic</span>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                    <span>Salary: Rs.40000</span>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                    <HomeIcon/>
                                    
                                </div>

                                <p>114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025</p>

                                <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
                                <Fab color="primary" aria-label="add"> <EditIcon/> </Fab>
                                <Fab color="secondary" style={{marginLeft:"1vw"}} aria-label="add" ><DeleteIcon/></Fab>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                    <Box sx={{bgcolor: 'background.paper' }} align='center'>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding >
                                <ListItemText primary="Total Working Days : 100"  />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemText primary="Total Leaves : 5" />
                            </ListItem>
                            </List>
                        </nav>
                        <Divider/>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemText primary="Leaves Available : 20" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemText primary="Leave Applications : 2" />
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                    </Grid>
                    <Grid item xs={10}>
                    <Line
                        data={state}
                        options={{
                            title:{
                            display:true,
                            text:'sample',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h4" style={{  paddingBottom:'20px', paddingTop:'20px', paddingLeft:'200px' }}><b>LEAVES</b></Typography> 
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="leaves table" >
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {leave.id}
                                </TableCell>
                                <TableCell align="center">{leave.description}</TableCell>
                                <TableCell align="center">{leave.status=='Approved'?<span style={{color:'green'}}>Approved</span>:(leave.status=='Pending'?<span style={{color:'yellow'}}>Pending</span>:<span style={{color:'red'}}>Denied</span>)}</TableCell>
                                <TableCell align="center">
                                <Button variant="contained" color="primary">View</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="h4" style={{  paddingBottom:'20px', paddingTop:'20px', paddingLeft:'150px' }}><b>COMPLAINTS</b></Typography> 
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="complaint table" >
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                                <TableCell align="center">{row.status=='Addressed'?<span style={{color:'green'}}>Addressed</span>:<span style={{color:'red'}}>Pending</span>}</TableCell>
                                <TableCell align="center">
                                <Button variant="contained" color="primary">View</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="h4" style={{  paddingBottom:'20px', paddingTop:'20px', paddingLeft:'200px' }}><b>HISTORY</b></Typography> 
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="complaint table" >
                            <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">View</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {workerHistory.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">
                                <Button variant="contained" color="primary">View</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}

export default ServicemanDetails