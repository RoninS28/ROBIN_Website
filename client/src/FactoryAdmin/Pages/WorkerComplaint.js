import React from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';



function WorkerComplaint() {
    return (
        <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
            <Card style={{height:"40vh",width:"40vw"}}>
                <CardContent>

                    <div style={{display:"flex"}}>
                    <Avatar  alt="Kamlesh Raut" src="/static/images/avatar/1.jpg" />
                    <span style={{marginLeft:"2vw",fontSize:"20px"}}>Kamlesh Raut, Jr.Mechanic</span>
                    </div>

                    <div style={{marginTop:"2vh"}}>
                    Dear Sir,

                    I am indeed pleased to learn that I have been awarded the increment of (Money Amount) 
                    in my salary last month. (Describe in your own words). Unfortunately, due to delay from account office, 
                    I have not yet received the salary of the previous month. (Describe your actual cause and situation).

                    You are requested to please look into the matter with keen interest and enjoin the accounting office 
                    (Related department name) to deliver my salary, as soon as possible.
                     (Describe your actual cause and situation).

                    I shall be very thankful to you.
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

export default WorkerComplaint
