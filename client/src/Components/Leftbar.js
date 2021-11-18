import { makeStyles, Container, Typography } from "@material-ui/core";
import { withThemeCreator } from "@material-ui/styles";
import HomeIcon from '@mui/icons-material/Home';

const useStyles =makeStyles((theme) => ({

    container:{
        height: "100vh",
        paddingTop: theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
        color: "white" ,
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom: theme.spacing(4),
        cursor: "pointer",

        [theme.breakpoints.up("sm")]:{
            marginBottom: theme.spacing(3),
            
        },
    },
    text:{
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
    }

}));

function Leftbar()
{
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <div className={classes.item}>
                <HomeIcon className={classes.icon}/>
                <Typography className={classes.text}>TitleName</Typography>
            </div>
            <div className={classes.item}>
                <HomeIcon className={classes.icon}/>
                <Typography className={classes.text}>TitleName</Typography>
            </div>
            <div className={classes.item}>
                <HomeIcon className={classes.icon}/>
                <Typography className={classes.text}>TitleName</Typography>
            </div>
            <div className={classes.item}>
                <HomeIcon className={classes.icon}/>
                <Typography className={classes.text}>TitleName</Typography>
            </div>
            <div className={classes.item}>
                <HomeIcon className={classes.icon}/>
                <Typography className={classes.text}>TitleName</Typography>
            </div>
        </Container>
    );
}
export default Leftbar;