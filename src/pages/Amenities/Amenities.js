import React, { useState } from "react";
import clickedContext from "../../components/Amenities/clickedContext";
import Facilities from "../../components/Amenities/Facilities/Facilities";
import Slider from "../../components/Amenities/Slider/Slider";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";
import { Grid } from "@mui/material";

const Amenities = () => {
  const classes = useClasses(styles);
  const [clicked, setClicked] = useState("COMMERCIAL AREAS");
  return (
    <clickedContext.Provider value={{ clicked, setClicked }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.amenitiesContainer}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          md={12}
          lg={9}
        >
          <Grid item xs={12} sm={6}>
            <Facilities />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Slider />
          </Grid>
        </Grid>
      </Grid>
    </clickedContext.Provider>
  );
};
export default Amenities;
