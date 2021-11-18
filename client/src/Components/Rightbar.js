import { makeStyles, Container, Typography } from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

function Rightbar()
{
    const classes = useStyles();
    return(
        <Container className={classes.container}>
        Rightbar
       </Container>
    );
};

export default Rightbar;