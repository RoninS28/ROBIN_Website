import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function GenericStatCard(props) {
    const { title, subtitle } = props;
    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: "1rem" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GenericStatCard