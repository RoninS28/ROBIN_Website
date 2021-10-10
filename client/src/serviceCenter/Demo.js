import React from 'react'

function Demo() {
    return (
        <div>
            
        </div>
    )
}

export default Demo


// import React from 'react'
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import CallIcon from '@material-ui/icons/Call';
// import EmailIcon from '@material-ui/icons/Email';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import StarIcon from '@material-ui/icons/Star';
// import WorkIcon from '@material-ui/icons/Work';
// import Work from '@material-ui/icons/Work';
// import HomeIcon from '@material-ui/icons/Home';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import orders from '../Data/Order';
// import Fab from "@material-ui/core/Fab";
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from "@material-ui/icons/Delete";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import leave from '../Data/Leave';
// import { Line } from 'react-chartjs-2';
// import workerComplaints from '../Data/WorkerComplaints';

// const state = {
//     labels: ['January', 'February', 'March',
//              'April', 'May'],
//     datasets: [
//       {
//         label: 'Working Graph',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   }




// function WorkerListDetails() {



//     return (
//         <div>
            
//             <div style={{display:"flex"}}>

//                     <div style={{marginLeft:"2vh",marginTop:"0vh",width:"25vw"}}>
//                         <Card style={{borderRadius:"35px"}}>
//                             <CardContent>
//                                 <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center" }}>
                                    
//                                     <div >
//                                     <AccountCircleIcon style={{height:"10vh",width:"10vw"}}/>
//                                     </div>

//                                     <div>
//                                         <h3>Kamlesh Raut</h3>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                         <CallIcon/>
//                                         <span style={{marginLeft:"1vw"}}>9999999999</span>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                     <EmailIcon marginLeft="5vw"/>
//                                     <span style={{marginLeft:"1vw"}}>kameshraut@gmail.com</span>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                         <StarIcon/>
//                                         <StarIcon/>
//                                         <StarIcon/>
//                                         <StarIcon/>
//                                         <StarIcon/>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                         <Work/>
//                                         <span>Position: Jr. Mechanic</span>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                         <span>Salary: Rs.40000</span>
//                                     </div>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                         <HomeIcon/>
                                        
//                                     </div>

//                                     <p>114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025</p>

//                                     <div style={{display:"flex",flexDirection:"row",marginTop:"2vh"}}>
//                                     <Fab color="primary" aria-label="add"> <EditIcon/> </Fab>
//                                     <Fab color="secondary" style={{marginLeft:"1vw"}} aria-label="add" ><DeleteIcon/></Fab>
//                                     </div>

//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <div style={{marginLeft:"10vh",marginTop:"0vh",width:"25vw"}}>
//                         <div>
//                     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                             <nav aria-label="main mailbox folders">
//                                 <List>
//                                 <ListItem disablePadding >
//                                     <ListItemText primary="Total Working Days : 100"  />
//                                 </ListItem>
//                                 <Divider />
//                                 <ListItem disablePadding>
//                                     <ListItemText primary="Total Leaves : 5" />
//                                 </ListItem>
//                                 </List>
//                             </nav>
//                             <Divider />
//                             <nav aria-label="secondary mailbox folders">
//                                 <List>
//                                 <ListItem disablePadding>
//                                     <ListItemText primary="Leaves Available : 20" />
//                                 </ListItem>
//                                 <Divider />
//                                 <ListItem disablePadding>
//                                     <ListItemText primary="Leave Applications : 2" />
//                                     </ListItem>
//                                 </List>
//                             </nav>
//                         </Box>
//                         </div>

//                         <div style={{marginTop:"4vh"}}>
//                             <Line
//                             data={state}
//                             options={{
//                                 title:{
//                                 display:true,
//                                 text:'Average Rainfall per month',
//                                 fontSize:20
//                                 },
//                                 legend:{
//                                 display:true,
//                                 position:'right'
//                                 }
//                             }}
//                             />
//                         </div>



//                     </div>

//                     <div>
//                     <Container maxWidth="lg" >
//                     <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 650 }} aria-label="simple table" >
//                             <TableHead>
//                             <TableRow>
//                                 <TableCell>LEAVE ID</TableCell>
//                                 <TableCell align="center">DESCRIPTION</TableCell>
//                                 <TableCell align="center">STATUS</TableCell>
//                                 <TableCell align="center">VIEW</TableCell>
//                             </TableRow>
//                             </TableHead>
//                             <TableBody>
//                             {leave.map((leave) => (
//                                 <TableRow
//                                 key={leave.id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                 <TableCell component="th" scope="row">
//                                     {leave.id}
//                                 </TableCell>
//                                 <TableCell align="center">{leave.description}</TableCell>
//                                 <TableCell align="center">{leave.status=='Approved'?<span style={{color:'green'}}>Approved</span>:(leave.status=='Pending'?<span style={{color:'yellow'}}>Pending</span>:<span style={{color:'red'}}>Denied</span>)}</TableCell>
//                                 <TableCell align="center">
//                                 <Button variant="contained" color="primary">View</Button>
//                                 </TableCell>
//                                 </TableRow>
//                             ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Container>


//                     </div>




           
                
//             </div>

//             <div style={{marginTop:"4vh",marginBottom:"4vh"}}>
//             <Container maxWidth="lg" >
//                     <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 650 }} aria-label="simple table" >
//                             <TableHead>
//                             <TableRow>
//                                 <TableCell>Complaint Id</TableCell>
//                                 <TableCell align="center">Type</TableCell>
//                                 <TableCell align="center">Status</TableCell>
//                                 <TableCell align="center">View</TableCell>
//                             </TableRow>
//                             </TableHead>
//                             <TableBody>
//                             {workerComplaints.map((row) => (
//                                 <TableRow
//                                 key={row.id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                 <TableCell component="th" scope="row">
//                                     {row.id}
//                                 </TableCell>
//                                 <TableCell align="center">{row.type}</TableCell>
//                                 <TableCell align="center">{row.status=='Addressed'?<span style={{color:'green'}}>Addressed</span>:<span style={{color:'red'}}>Pending</span>}</TableCell>
//                                 <TableCell align="center">
//                                 <Button variant="contained" color="primary">View</Button>
//                                 </TableCell>
//                                 </TableRow>
//                             ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Container>
//             </div>


            
//         </div>
//     )
// }

// export default WorkerListDetails

// *************************************************************************************************************************************************************************************

// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import { Input, useMediaQuery } from '@material-ui/core';
// import SearchIcon from "@material-ui/icons/Search";
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import PrintIcon from '@material-ui/icons/Print';
// import DownloadIcon from '@material-ui/icons/FontDownload';
// import orders from '../Data/Order';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Fab from "@material-ui/core/Fab";
// import TextField from '@material-ui/core/TextField';
// import scooter1 from '../../images/scooter1.jpeg';
// import { makeStyles } from '@material-ui/styles';
// import { withStyles } from "@material-ui/core/styles";

// import PropTypes from 'prop-types';
// import { useTheme } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';



// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core//TablePagination';


// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import workers from '../Data/Workers.js';


// const styles = makeStyles((theme) => ({
//     listWrapper: {
//         display: "flex",
//         flexDirection: "column",
//         marginBottom: "1rem"
//     },
//     topRow: {
//         display: "flex",
//         justifyContent: "flex-end",
//     },
//     rowHeader: {
//         fontWeight: "bold !important",
//     }

// }));

// function TablePaginationActions(props) {
    
//     const theme = useTheme();
//     const { count, page, rowsPerPage, onPageChange } = props;


//     const handleFirstPageButtonClick = (event) => {
//         onPageChange(event, 0);
//     };

//     const handleBackButtonClick = (event) => {
//         onPageChange(event, page - 1);
//     };

//     const handleNextButtonClick = (event) => {
//         onPageChange(event, page + 1);
//     };

//     const handleLastPageButtonClick = (event) => {
//         onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };

//     return (
//         <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//             <IconButton
//                 onClick={handleFirstPageButtonClick}
//                 disabled={page === 0}
//                 aria-label="first page"
//             >
//                 {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//             </IconButton>
//             <IconButton
//                 onClick={handleBackButtonClick}
//                 disabled={page === 0}
//                 aria-label="previous page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             </IconButton>
//             <IconButton
//                 onClick={handleNextButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="next page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//             </IconButton>
//             <IconButton
//                 onClick={handleLastPageButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="last page"
//             >
//                 {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//             </IconButton>
//         </Box>
//     );
// }

// TablePaginationActions.propTypes = {
//     count: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(id,name, phone, email,position,address,salary) {
//     return { id, name,phone,email, position,address,salary};
// }

// function getAllModels() {
//     const allModels = [];
//     workers.map(model => {
//         console.log(model);
//         allModels.push(createData(model.id, model.name, model.phone, model.email, model.position,model.address,model.salary))
//     })
//     return allModels
// }

// const rows = getAllModels();

// function WorkerList(props) {

//     const { classes, theme } = props;
//     const xs=useMediaQuery(theme.breakpoints.down('xs'));
//     const sm=useMediaQuery(theme.breakpoints.up('xs')&&theme.breakpoints.down('sm'));
//     const md=useMediaQuery(theme.breakpoints.up('sm')&&theme.breakpoints.down('md'));
//     const lg=useMediaQuery(theme.breakpoints.up('md')&&theme.breakpoints.down('lg'));
//     const xl=useMediaQuery(theme.breakpoints.up('lg'));


//         const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(3);

//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };


//     return (
//         <div>

//         <Container 
//             maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
//             className={classes.listWrapper}>
//                 <TableContainer component={Paper}>
//                     <Table  aria-label="custom pagination table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>ID</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>NAME</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>PHONE</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>EMAIL</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>POSITION</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>ADDRESS</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>SALARY</h3></TableCell>
//                             <TableCell  align="center" className={classes.rowHeader}><h3>VIEW</h3></TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {(rowsPerPage > 0
//                             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             : rows
//                         ).map((row) => (
                            
//                             // individual row
//                             <TableRow>
//                                 <TableCell  align="center">
//                                     {row.id}
//                                     </TableCell>
//                                 <TableCell  align="center">
//                                     {row.name}
//                                 </TableCell>
//                                 <TableCell  align="center">
//                                     {row.phone}
//                                 </TableCell>
//                                 <TableCell  align="center">
//                                     {row.email}
//                                 </TableCell>
//                                 <TableCell  align="center">
//                                     {row.position}
//                                 </TableCell>
//                                 <TableCell  align="center">
//                                     {row.address}
//                                 </TableCell>
//                                 <TableCell  align="center">
//                                     {row.salary}
//                                 </TableCell>
//                                 <TableCell align="center">
//                                 <Button variant="contained" color="primary" >View</Button>
//                                 </TableCell>
//                             </TableRow>

//                         ))}

//                         {emptyRows > 0 && (
//                             <TableRow style={{ height: 53 * emptyRows }}>
//                                 <TableCell colSpan={6} />
//                             </TableRow>
//                         )}
//                     </TableBody>
//                     <TableFooter>
//                         <TableRow>
//                             <TablePagination
//                                 rowsPerPageOptions={[3,5, 10, 25, { label: 'All', value: -1 }]}
//                                 colSpan={3}
//                                 count={rows.length}
//                                 rowsPerPage={rowsPerPage}
//                                 page={page}
//                                 SelectProps={{
//                                     inputProps: {
//                                         'aria-label': 'rows per page',
//                                     },
//                                     native: true,
//                                 }}
//                                 onPageChange={handleChangePage}
//                                 onRowsPerPageChange={handleChangeRowsPerPage}
//                                 ActionsComponent={TablePaginationActions}
//                             />
//                         </TableRow>
//                     </TableFooter>
//                     </Table>
//     </TableContainer>
// </Container>
//     </div>
//     )
   
// }

// export default withStyles(styles, { withTheme: true })(WorkerList);