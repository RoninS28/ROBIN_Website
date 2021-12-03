import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Accessory(props) {

    const img=props.img;
    const name=props.name;
  return (
    <div>
      <Grid item xs={3}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={img} style={{ height: "15vh", width: "10vw" }} />
          <h3>{name}</h3>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default Accessory;
