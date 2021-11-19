import React, { useState } from 'react'
import { evModelList } from '../Data/EVModels';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { SketchPicker } from 'react-color';
import { withStyles } from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel'

import scooter1_i2 from '../../images/scooter1_i2.png';
import scooter1_i3 from '../../images/scooter1_i3.png';
import scooter1_i4 from '../../images/scooter1_i4.png';


const styles = theme => ({
    imageWrapper: {
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        [theme.breakpoints.down("sm")]: {
        }

    },
    modelBasicDetails: {
        [theme.breakpoints.up("sm")]: {
            paddingLeft: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "2rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "1rem",
        }
    },
    modelWrapper: {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "0.6fr 1.2fr",
            margin: "2rem",
        },
    },
    modelImage: {
        height: "320px",
        width: "240px",
        [theme.breakpoints.up("sm")]: {
            height: "480px",
            width: "340px",
            display: "block",
        },
    },

    inputTextWrapper: {
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
        },

        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr",
        }
    },
    inputText: {
        marginBottom: "1rem !important",
        [theme.breakpoints.up("sm")]: {
            minWidth: "320px !important",
            marginRight: "1rem !important"
        },
        [theme.breakpoints.down("sm")]: {
            width: "210px !important",
        }
    },
    modelBasicFeatures: {
        marginTop: "1rem"
    },

    chipWrapper: {
        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "0.4fr",
        }
    },
    modelBasicChipItem: {
        margin: "0.4rem 0.1rem 0 0.1rem"
    },

    modelBasicColorContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    colorChipWrapper: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
            alignItems: "center"
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "column"
        }
    },

    colorWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    colorPickerWrapper: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: "2rem"
        },
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginLeft: "1rem",
    },
    btnImgWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1rem"
    }
});

const handleDesignDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleSafetyDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleColorDelete = () => {
    console.log('Ypu clicked the delete icon');
};

const EVModelDetail = (props) => {

    const { classes, theme } = props;

    const { name, basePrice, imgUrl, colors, features, safety, design } = evModelList[0];

    const [pickerBackground, setPickerBackground] = useState('#fff');

    const handlePickerChangeComplete = (color) => {
        setPickerBackground(color.hex);
    };

    return (
        <div className={classes.modelWrapper}>
            <div className={classes.imageWrapper}>
                <div className={classes.btnImgWrapper}>
                    <Carousel>
                        <img className={classes.modelImage} src={imgUrl} alt={`EV Model Pic: ${name}`} />
                        <img className={classes.modelImage} src={scooter1_i2} alt={`EV Model Pic: ${name}`} />
                        <img className={classes.modelImage} src={scooter1_i3} alt={`EV Model Pic: ${name}`} />
                        <img className={classes.modelImage} src={scooter1_i4} alt={`EV Model Pic: ${name}`} />
                    </Carousel>
                    <Button variant="contained" color="primary" style={{ marginTop: "0.6rem" }}>Upload</Button>
                </div>

                <div className={classes.modelBasicColorContainer}>
                    {/* Colors available */}
                    <div className={classes.colorWrapper}>
                        <h2>Colors</h2>
                        <div className={classes.colorChipWrapper}>
                            {colors.map(color => (
                                <Chip
                                    className={classes.modelBasicChipItem}
                                    onDelete={handleColorDelete}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classes.colorPickerWrapper}>
                        {/* Color Picker */}
                        <SketchPicker
                            color={pickerBackground}
                            onChangeComplete={handlePickerChangeComplete}
                        />
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add Color</Button>
                    </div>
                </div>

            </div>

            {/* Model Features Text fields */}
            <div className={classes.modelBasicDetails}>
                <div className={classes.inputTextWrapper}>
                    <TextField id="standard-basic" label="Name" variant="standard" className={classes.inputText} value={name} />
                    <TextField id="standard-basic" label="Base Price" variant="standard" className={classes.inputText} value={basePrice} />
                </div>
                <div className={classes.modelBasicFeatures}>
                    <h2>Features</h2>
                    <div className={classes.inputTextWrapper}>
                        {Object.entries(features).map(([key, value]) => (
                            <TextField id={key} label={key} variant="standard" className={classes.inputText} value={value} />
                        ))}
                    </div>
                </div>

                <div className="Model-basic-chip-container">
                    <h2>Design</h2>
                    <div className={classes.chipWrapper}>
                        {design.map(item => (
                            <Chip className={classes.modelBasicChipItem} label={item} onDelete={handleDesignDelete} />
                        ))}
                    </div>

                    <div style={{ marginTop: "1rem", marginLeft: "0.6rem" }}>
                        <TextField label="Add new Design Feature" variant="standard" className={classes.inputText} />
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add</Button>
                    </div>

                </div>

                <div className="Model-basic-chip-container">
                    <h2>Safety</h2>
                    <div className={classes.chipWrapper}>
                        {safety.map(item => (
                            <Chip className={classes.modelBasicChipItem} label={item} onDelete={handleSafetyDelete} />
                        ))}
                    </div>
                    <div style={{ marginTop: "1rem", marginLeft: "0.6rem" }}>
                        <TextField label="Add new Safety Feature" variant="standard" className={classes.inputText} />
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add</Button>
                    </div>
                </div>

                <div className={classes.btnContainer}>
                    <Button className={classes.btn} variant="contained" style={{ marginTop: "3rem", marginBottom: "1rem" }} color="secondary">Delete</Button>
                    <Button className={classes.btn} variant="contained" style={{ marginTop: "3rem", marginBottom: "1rem" }} color="primary">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(EVModelDetail);
