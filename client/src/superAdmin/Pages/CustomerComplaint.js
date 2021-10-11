import React from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

function CustomerComplaint() {
    return (
        <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
            <Card style={{height:"50vh",width:"40vw"}}>
                <CardContent>

                    <div style={{display:"flex"}}>
                    <Avatar  alt="Kamlesh Raut" src="/static/images/avatar/1.jpg" />
                    <span style={{marginLeft:"2vw",fontSize:"20px"}}>Akshay Jain, Pune</span>
                    </div>

                    <div style={{marginTop:"2vh"}}>
                    Dear Sir,
                    The goods supplied as part of this contract are not of satisfactory quality.
                    One of the radiators leaks and has ruined my carpet.
                    I enclose copies of photos of the damage to my carpets from the leaky radiator in support of my claim.
                    I would like you to replace the leaky radiator, and the other radiators that have all been 
                    painted using paint meant for walls and provide payment to cover for the cost of the damaged carpet.
                    Please respond to my complaint in the next 14 days. If you fail to respond or put the problem 
                    right in this time, I will have no option but to consider taking the matter further.

                    Yours faithfully
                    </div>
                    
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary">Call</Button>
                    <Button variant="contained" color="primary">Report</Button>
                </CardActions>
                </Card> 
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center',marginTop:"4vh"}}>
            <Card style={{height:"30vh",width:"40vw"}}>
                <CardContent>

                    <div style={{display:"flex"}}>
                    <Avatar  alt="You" src="/static/images/avatar/1.jpg" />
                    <span style={{marginLeft:"2vw",fontSize:"20px"}}>You</span>
                    </div>

                    <div style={{marginTop:"2vh"}}>
                    <TextField id="standard-basic" style={{width:"38vw"}} label="Reply" variant="standard" />
                    </div>
                    
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">Send</Button>
                </CardActions>
                </Card> 
        </div>
        </div>
    )
}

export default CustomerComplaint
