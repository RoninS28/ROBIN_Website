import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';

function GenericStatCard(props) {

    const { title, subtitle, editBtnUrl } = props;
    const history = useHistory();

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={10}>
                        <Typography variant="h5" component="div">
                            {subtitle}
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        {editBtnUrl && (
                            <span onClick={() => history.push(editBtnUrl)} style={{  }}>
                                <EditIcon />
                            </span>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default GenericStatCard
