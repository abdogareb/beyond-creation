import * as React from "react";
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  Select,
  MenuItem,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import logoImg from "../../assets/images/HomePage/LOGO.png";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileMenuButtons from "./MobileMenuButtons";

const Header = () => {
  const classes = useClasses(styles);
  const [icon, setIcon] = React.useState("");
  const [temperature, setTemperature] = React.useState();
  const celisiusDegree = React.useMemo(
    () => temperature - 273.15,
    [temperature]
  );
  const [celisius, setCelisius] = React.useState("celisius");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
      )
      .then((response) => {
        setIcon(response.data.weather[0].icon);
        setTemperature(response.data.main.temp);
      });
  }, []);
  const handleChange = (event) => {
    setCelisius(event.target.value);
  };
  return temperature ? (
    <Grid item className={classes.header}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        className={classes.navBar}
      >
        <Grid item>
          <img src={logoImg} className={classes.logo} alt="" />
        </Grid>
        <Grid
          item
          container
          xs={9}
          direction="row"
          justifyContent="flex-end"
          columnSpacing={isMobile ? 1 : 2}
        >
          <Grid item>
            <Select
              className={classes.degreeType}
              variant="standard"
              value={celisius}
              onChange={handleChange}
              inputProps={{
                classes: {
                  icon: classes.degreeTypeIcon,
                },
              }}
              label="Type"
            >
              <MenuItem value={"celisius"}>celisius</MenuItem>
              <MenuItem value={"kelvin"}>kelvin</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              className={classes.weatherIcon}
              alt=""
            />
          </Grid>
          <Grid item>
            <Typography className={classes.temperatureTxt}>
              {celisius === "celisius"
                ? celisiusDegree.toFixed(1)
                : temperature.toFixed(1)}
              &deg;
            </Typography>
          </Grid>
          {isMobile ? (
            <MobileMenuButtons />
          ) : (
            <Grid item >
              <Button variant="outlined" className={classes.callBtn}>
                <CallIcon />
              </Button>
              <Button
                variant="contained"
                direction="row"
                className={classes.bookBtn}
              >
                Book Now
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <CircularProgress />
  );
};
export default Header;
