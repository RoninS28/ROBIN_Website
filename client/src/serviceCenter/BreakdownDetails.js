import "./BreakdownDetails.css"
function BreakdownDetails() {
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="detail1">Name</td>
                        <td className="Name">Siddhesh R Ramane</td>
                    </tr>
                    <tr>
                        <td className="detail2">Problem</td>
                        <td className="Problem">Breaks have been Failed.</td>
                    </tr>
                    <tr>
                        <td className="detail3">Location</td>
                        <td className="Location">Tilak Square, GB Road, Pune</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p className="available">3 Repairmen Available</p>
            </div>
            <div>
                <button className="btnAcc">Accept</button>
                <button className="btnRej">Reject</button>
            </div>
        </div>
    )
}

export default BreakdownDetails