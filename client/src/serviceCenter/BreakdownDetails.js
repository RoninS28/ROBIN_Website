import "./BreakdownDetails.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import { Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import placeholder from './images/placeholder.png';
function createData(property, data) {
    return { property, data};
  }

  const rows = [
    createData('NAME', 'Siddhesh R. Ramane'),
    createData('PROBLEM', 'Breaks have been Failed'),
    createData('LOCATION', 'Tilak Square, GB Road'),
    createData('IMAGE', 
        <img src={placeholder} alt="Image" width="250px" height="200px"></img>),
    createData('MAP',
        <IconButton aria-label="map"><RoomIcon /></IconButton>),
    ];

function BreakdownDetails() {
    return(
        <div align="center" style={{padding:"1rem"}}>
            <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>BREAKDOWN DETAILS</b></Typography>  
            <TableContainer component={Card } style={{ height:'500px', width: "800px"}}>
                <Table aria-label="Requests Details">
                  <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell component="th" scope="row" align="center">
                            {row.property}
                            </TableCell>
                            <TableCell align="center">{row.data}</TableCell>
                                        </TableRow>
                                        ))}
                    </TableBody>
                </Table>
            </TableContainer>                    
            <div className="buttons" align="center">
                <Button variant="contained" color="primary" style={{marginRight:'100px'}}>ACCEPT</Button>
                <Button variant="contained" color="secondary" style={{marginLeft:'100px'}}>REJECT</Button>
            </div>
        </div>
    )
}

export default BreakdownDetails