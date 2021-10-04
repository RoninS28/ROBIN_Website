import IconButton from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

function BuyAccessoriesList(){
    return(
        <div>
            <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'relative' }}
            >
                <InputBase
                    sx={{ ml: 1, flex:1 }}
                    placeholder="Search Accessories"
                    inputProps={{ 'aria-label': 'search accessories' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                </Paper>
                </div>
        </div>
    )
}

export default BuyAccessoriesList