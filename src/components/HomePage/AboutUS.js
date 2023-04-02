import * as React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import familyImg from "../../assets/images/HomePage/Family.png";
import logoImg from "../../assets/images/HomePage/LOGO.png";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";

const AboutUs = () => {
  const classes = useClasses(styles);
  return (
      <Grid
        container
        className={classes.footer}
        direction="row"
        justifyContent="center"
        columnSpacing={8}
      >
        <Grid item marginTop={2}>
          <img src={familyImg} alt="" />
        </Grid>
        <Grid item marginTop={2}>
          <Grid item xs={12}>
            <p className={classes.headerText}>The place</p>
            <p className={classes.headerText}>we call home</p>
            <p className={classes.subText}>
              Makadi Heights is a town built over 3.4 million square meters
              planned for development, with an elevation reaching 78 meters
              above sea level guaranteeing magnificent panoramic sea views
              residential units. Envisioned as a comprehensive town.
            </p>
          </Grid>
          <Grid item container spacing={5} marginTop={3}>
            <Grid item>
              <Button variant="contained" className={classes.btn}>
                Download Brochure
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.btn}>
                Show Master plan
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default AboutUs;
