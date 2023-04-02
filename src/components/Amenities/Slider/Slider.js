import React, { useContext } from "react";
import { Grid, Radio } from "@mui/material";
import clickedContext from "../clickedContext";
import useClasses from "../../../hooks/useClasses";
import styles from "./styles";
import { sliderImages } from "./SliderImages";

const Slider = () => {
  const classes = useClasses(styles);
  const { clicked, setClicked } = useContext(clickedContext);

  const handleChange = (event) => {
    setClicked(event.target.value);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <img src={sliderImages.get(clicked)} alt="" className={classes.image} />
      </Grid>
      <Grid item>
        {[...sliderImages.keys()].map((key) => (
          <Radio
          key={key}
            disableRipple
            className={classes.radioBtn}
            checked={clicked === key}
            onChange={handleChange}
            value={key}
            name="radio-buttons"
            inputProps={{ "aria-label": { key } }}
          />
        ))}
      </Grid>
    </Grid>
  );
};
export default Slider;
