import React, { useState } from "react";
import engine from "../../images/engine.png";
import tyre from "../../images/tyre.png";
import gear from "../../images/gear.png";
import axel from "../../images/axel.png";
import seat from "../../images/seat.png";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchBar from "material-ui-search-bar";
import { useHistory } from "react-router";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
};

const itemData = [
  {
    img: engine,
    name: "Car Engine",
    company: "Dynamo",
  },
  {
    img: tyre,
    name: "Tire Wheel Cover",
    company: "ZOHO",
  },
  {
    img: gear,
    name: "Gear Box",
    company: "Motor BO",
  },
  {
    img: axel,
    name: "Axel",
    company: "Marti-I",
  },
  {
    img: seat,
    name: "PU Leather Seat",
    company: "AGM",
  },
  {
    img: engine,
    name: "Car Engine",
    company: "Dynamo",
  },
  {
    img: tyre,
    name: "Tire Wheel Cover",
    company: "ZOHO",
  },
  {
    img: gear,
    name: "Gear Box",
    company: "Motor BO",
  },
  {
    img: axel,
    name: "Axel",
    company: "Marti-I",
  },
  {
    img: seat,
    name: "PU Leather Seat",
    company: "AGM",
  },
];

function BuyAccessories() {
  const [category, setCategory] = useState("");

  const history=useHistory();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ marginLeft: "5vw" }}
        >
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{ maxWidth: "40vw" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ marginLeft: "5vw" }}
        >
          <Box style={{ width: "10vw" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Type"
                onChange={handleChange}
              >
                <MenuItem value="Customer">Tyres And Wheels</MenuItem>
                <MenuItem value="Worker">Screw ,Nuts and Bolts</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        
          {itemData.map((item) => (
            <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            style={{ marginLeft: "5vw" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={item.img} />
              <h3>{item.name}</h3>
              <Button variant="contained" color="primary" onClick={()=>history.push('/buyAccessories/1')}>
                Add
              </Button>
            </div>
            </Grid>
          ))}
        
      </Grid>
    </div>
  );
}

export default BuyAccessories;
