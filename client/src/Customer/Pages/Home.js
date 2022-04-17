import ImageCarousel from "../Shared/ImageCarousel/ImageCarousel";
import img1 from "../Assets/hpimg1.png";
import img2 from "../Assets/hpimg2.png";
import img3 from "../Assets/hpimg3.png";
import { useHistory } from "react-router";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Grid } from "@material-ui/core";
import ImageSlider from "../Shared/ImageSlider/ImageSlider.js";

import Chatbot from 'react-simple-chatbot'

export default function Home() {
  const props = {
    image1: img1,
    image2: img2,
    image3: img3,
  };

  const history = useHistory()
  const handleProduct = () => {
    history.push('/products');
  }

  const handleTestDrive = () => {
    history.push('/testdrive');
  }

  const steps = [
    {
      id: "1",
      message: "Hello!",
      trigger: "2"
    },
    {
      id: "2",
      message: "How can I help you?",
      trigger: "3"
    },
    {
      id: "3",
      options: [
        { value: 1, label: "Dead Battery", trigger: "4" },
        { value: 2, label: "Tyre damage", trigger: "5" }
      ]
    },
    {
        id: "4",
        message: "Where are you?",
        trigger: "5"
    },
    {
        id: "5",
        message: "Please share your location, we will use it to put you in touch with nearest provider.",
        trigger: "6"
    },
    {
        id: "6",
        user: true,
        trigger: "7"
    },
    {
        id: "7",
        message: "We will reach you. :)",
        trigger: "2"
    }];

    const config ={
      width: "400px",
      height: "500px",
      floating: true,
    };

  return (
    <div>
      {/* <Chatbot
        headerTitle="Speech Synthesis"
  speechSynthesis={{ enable: true, lang: 'en' }}
        steps={steps}
        {...config}
      /> */}
      <div style={{ backgroundColor: "black", paddingBottom: "35px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: "white", textShadow: "2px 2px blue", fontSize: "40px" }}>
          <center>WE BUILD THE VEHICLES FOR FUTURE.</center>
        </div>
        {/* <div className="image">
          <img src={props.image1} />
        </div> */}

        <ImageSlider/>

      </div>

      <div style={{ backgroundColor: "white", padding: "15px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="image">
          <img src={props.image2} />
        </div>
        <div style={{ color: "black", fontSize: "40px", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleProduct()}>
          <center>View All EVs</center> <KeyboardArrowRight style={{ color: "yellow", fontSize: "60px" }} />
        </div>
      </div>

      <div style={{ backgroundColor: "black", padding: "35px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={3} justifyContent="space-evenly">
        <Grid container xs={12} md={12} lg={12} xl={12} sx={{ border: 1 }} style={{ borderRadius: "0.5rem", borderColor: "black" }}>
        <Grid spacing={3} xs={4} md={4} lg={4} xl={4} >
        <div style={{ color: "white", fontSize: "40px", textAlign: "center", textShadow: "-1px 0 blue, 0 1px blue, 1px 0 blue, 0 -1px blue", alignSelf: 'start' }}>
          <center>We're Happy to Help you...</center>
        </div>
        </Grid>
        <Grid spacing={3} xs={8} md={8} lg={8} xl={8} >
        <div className="image" style={{justifyContent:"right",justifyItems:"right"}}>
          <img src={props.image3} width="600px" />
        </div>
        </Grid>
        </Grid>
        </Grid>
        <div style={{ marginTop: "30px", color: "white", fontSize: "40px", textAlign: "center", textShadow: "-1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen", display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleTestDrive()}>
          <center>Book a free Test Drive Today</center><KeyboardArrowRight style={{ color: "white", fontSize: "60px" }} />
        </div>

      </div>

    </div>
  );
}
