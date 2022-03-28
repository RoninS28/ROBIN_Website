import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import evimg1 from "./evimg1.jpg";
import evimg2 from "../ImageCarousel/evimg2.jpg";
import evimg3 from "./evimg3.jpeg";
import { color } from "@mui/system";
 
const MyCollection = [
  {
    label: "First Picture",
    imgPath:
    "https://media.zigcdn.com/media/model/2021/Aug/rear-right-view-755667737_600x400.jpg",
    },
    {
    label: "Second Picture",
    imgPath:
    "https://img.etimg.com/thumb/msid-86285506,width-650,imgsize-229527,,resizemode-4,quality-100/ola-electric-scooter.jpg",
    },
    {
    label: "Third Picture",
    imgPath:
    "https://i.cdn.newsbytesapp.com/images/l200_31021626003047.jpg",
    },
];
 
const ImageCarousel = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);
 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 
  return (
    <div style={{marginLeft: "40%",}} onScroll="Footer">
      <h2>Products</h2>
      <div style={{maxWidth: 400,flexGrow: 1,}}>
        <Paper
          square
          elevation={0}
          style={{
            height: 50,
            display: "flex",
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
            backgroundColor: "#34bdeb",
          }}
        >
          {/* <Typography>{MyCollection[index].label}</Typography> */}
        </Paper>
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: 255,
            width: "100%",
            maxWidth: 400,
            display: "block",
            overflow: "hidden",
          }}
          alt={MyCollection[index].label}
        />
        <MobileStepper
        //   variant="text"
          position="static"
        //   index={index}
        //   steps={CollectionSize}
          
          nextButton={
              <center>
            <div className="multibutton">
            <Button
                size="small"
                onClick={goToPreviousPicture}
                disabled={index === 0}
            >
              {theme.direction !== "rtl" ? (
              <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
              Previous
            
          </Button>
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
            </div>
            </center>
          }
        />
      </div>
    </div>
  );
};
 
export default ImageCarousel;