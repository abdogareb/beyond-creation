import { Grid } from "@mui/material";
import useClasses from "../../hooks/useClasses";
import styles from "./styles";
import Header from "../../components/HomePage/Header";
import AboutUs from "../../components/HomePage/AboutUS";
const HomePage = () => {
  const classes = useClasses(styles);
  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <AboutUs />
      </Grid>
    </Grid>
  );
};
export default HomePage;
