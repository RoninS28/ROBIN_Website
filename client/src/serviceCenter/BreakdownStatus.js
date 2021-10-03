// import "./BreakdownStatus.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PrintIcon from '@material-ui/icons/Print';
import DownloadIcon from '@material-ui/icons/FontDownload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function BreakdownStatus() {
    return(
        <div >
            {/* <h1><b>REQUEST STATUS</b></h1>      
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{display:"flex",justifyContent:"center"}} className="detail1">Customer Name</td>
                            <td className="Name">Siddhesh R Ramane</td>
                        </tr>
                        <tr>
                            <td style={{display:"flex",justifyContent:"center"}} className="detail2">Contact</td>
                            <td className="Problem">9359123910</td>
                        </tr>
                        <tr>
                            <td className="detail3">Location</td>
                            <td className="Location">Tilak Square, GB Road, Pune</td>
                        </tr>
                        <tr>
                            <td className="detail4">ServiceMan Assigned</td>
                            <td className="SMAssigned">Nitin Kumar</td>
                        </tr>
                        <tr>
                            <td className="detail5">ServiceMan Contact</td>
                            <td className="SMContact">8888884161</td>
                        </tr>
                        <tr>
                            <td className="detail6">Status</td>
                            <td className="Status">Pending</td>
                        </tr>
                    </tbody>
                </table>                
            </div> */}
             <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Dessert (100g serving)</TableCell>
           <TableCell align="right">Calories</TableCell>
           <TableCell align="right">Fat&nbsp;(g)</TableCell>
           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
           <TableCell align="right">Protein&nbsp;(g)</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {row.name}
             </TableCell>
             <TableCell align="right">{row.calories}</TableCell>
             <TableCell align="right">{row.fat}</TableCell>
             <TableCell align="right">{row.carbs}</TableCell>
             <TableCell align="right">{row.protein}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
        </div>
    
    )
}

export default BreakdownStatus