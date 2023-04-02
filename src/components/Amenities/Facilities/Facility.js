import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import useClasses from "../../../hooks/useClasses";
import styles from "./styles";
import clickedContext from "../clickedContext";

const Facility = ({ title, details, Icon }) => {
  const classes = useClasses(styles);
  const { clicked, setClicked } = useContext(clickedContext);
  const handleClick = () => {
    setClicked(title);
  };
  return (
    <Grid
      container
      className={classes.facilityGroup}
      direction="column"
      alignItems="center"
      justifyContent="center"
      onClick={handleClick}
    >
      <Grid item>
        <Icon className={clicked===title?classes.facilityIconBlue:classes.facilityIcon} />
      </Grid>
      <Grid itemScope>
        <Typography className={clicked===title?classes.facilityTitleBlue:classes.facilityTitle}>{title}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.facilityDetails}>{details}</Typography>
      </Grid>
    </Grid>
  );
};
export default Facility;
