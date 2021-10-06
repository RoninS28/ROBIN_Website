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
import orders from '../Data/Order';
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";


  




function WorkerListDetails() {



    return (
        <div>
            
            <div style={{display:"flex"}}>
            <div style={{marginLeft:"10vh",marginTop:"0vh",width:"25vw"}}>
                <Card style={{borderRadius:"35px"}}>
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
            </div>
            <Container maxWidth="lg" >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell align="center">Model</TableCell>
                                <TableCell align="center">Customer</TableCell>
                                <TableCell align="center">Stage</TableCell>
                                <TableCell align="center">View</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {order.id}
                                </TableCell>
                                <TableCell align="center">{order.model}</TableCell>
                                <TableCell align="center">{order.Customer}</TableCell>
                                <TableCell align="center">{order.Stage}</TableCell>
                                <TableCell align="center">
                                <Button variant="contained" color="primary">View</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>
                
            </div>


            
        </div>
    )
}

export default WorkerListDetails