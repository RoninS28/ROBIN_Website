import React from 'react'
import "./BreakdownRequestsList.css"
function BreakdownRequestsList() {
    return (
        <div>
                <h1><b>BREAKDOWN REQUESTS</b></h1>            
            <div>
                <table>
                    <thead>
                        <tr className="requests">
                            <th className="column1">Sr. No.</th>
                            <th className="column2">Name</th>
                            <th className="column3">Address</th>
                            <th className="column4">Contact</th>
                            <th className="column5">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1">1</td>
                            <td className="column2">Siddhesh R Ramane</td>
                            <td className="column3">Kothrud</td>
                            <td className="column4">9359123910</td>
                            <td className="column5"><button className="btn">View</button></td>
                        </tr>
                        <tr>
                            <td className="column1">2</td>
                            <td className="column2">Kartik S Rane</td>
                            <td className="column3">Kothrud</td>
                            <td className="column4">9359123910</td>
                            <td className="column5"><button className="btn">View</button></td>
                        </tr>
                        <tr>
                            <td className="column1">3</td>
                            <td className="column2">Amey S Marathe</td>
                            <td className="column3">Kothrud</td>
                            <td className="column4">9359123910</td>
                            <td className="column5"><button className="btn">View</button></td>
                        </tr>
                        <tr>
                            <td className="column1">4</td>
                            <td className="column2">Neha M Patil</td>
                            <td className="column3">Kothrud</td>
                            <td className="column4">9359123910</td>
                            <td className="column5"><button className="btn">View</button></td>
                        </tr>
                        <tr>
                            <td className="column1">5</td>
                            <td className="column2">Nutan D. Deshmukh</td>
                            <td className="column3">Kothrud</td>
                            <td className="column4">9359123910</td>
                            <td className="column5"><button className="btn">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  
    )
}

export default BreakdownRequestsList
