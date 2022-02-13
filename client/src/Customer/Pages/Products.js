import { Grid } from "@material-ui/core";
import { blue, green, orange, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@mui/styles";
import ImageCarousel from "../Shared/ImageCarousel/ImageCarousel";
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import v4 from '../Assets/v4.png'
import v5 from '../Assets/v5.png'
import v6 from '../Assets/v6.png'
import v7 from '../Assets/v7.png'
import '../PagesStyles/Products.css'
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => {
  return {
    heading: {
      color: blue[500],
      marginTop: '20px',
      textAlign: "center",
      fontSize: '26px',
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.21)',
    },
  }
})


export default function Products() {
  const classes = useStyles()
  const history = useHistory()


  const handleProduct = (e) => {
    history.push('/products/' + e.id)
  }


  const modelList = [
    {
      model: "CITY 1",
      id: "M001",
      image: v3,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.8",
      range: "80",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "170",
      price: 20000
    },
    {
      model: "CITY 2",
      id: "M002",
      image: v2,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.9",
      range: "85",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "172",
      price: 20500
    },
    {
      model: "CITY TR",
      id: "M003",
      image: v4,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.9",
      range: "90",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "165",
      price: 21000
    },
    {
      model: "ZEUS RX2",
      id: "M004",
      image: v5,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.8",
      range: "80",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "170",
      price: 20000
    },
    {
      model: "PEGASUS",
      id: "M005",
      image: v6,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.9",
      range: "85",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "172",
      price: 20500
    },
    {
      model: "PATRIOT",
      id: "M006",
      image: v7,
      colors: [
        yellow[500],
        blue[500],
        green[500],
        orange[500]
      ],
      battery: "1.9",
      range: "90",
      voltage: "72",
      chargingTime: "3-4",
      groundClearance: "165",
      price: 21000
    },
  ]


  return (
    <div className="productsViewScreen">


      <div className="heading">
        Products Page
      </div>
      {/* <ImageCarousel/> */}
      <Grid container spacing={3}>
        {modelList.map(model => (
          // <Grid container item>
          <Grid item spacing={3} key={model.id} xs={12} md={6} lg={4} xl={4} onClick={(e) => handleProduct(model)}>
            <div className="productDisplay">
              <div className="image">
                <img src={model.image} alt="image" width="300" height="300" />
              </div>
              <div className="productText">
                {model.model}
              </div>

            </div>

          </Grid>

          // </Grid>
        ))}


      </Grid>
    </div>
  );
}
