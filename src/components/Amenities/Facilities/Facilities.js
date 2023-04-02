import { Grid, Divider, Typography } from "@mui/material";
import Facility from "./Facility";
import useClasses from "../../../hooks/useClasses";
import styles from "./styles";
import { facilities } from "./FacilitiesData";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Facilities = () => {
  const classes = useClasses(styles);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={2}
    >
      <Grid item xs={12}>
        <Typography className={classes.facilitiesHeaderTxt}>
          Discover Lifestyle
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.facilitiesSubHeaderTxt}>
          Amenities
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.facilitiesTxt}>
          Occupying a land area of 33,000 square meters, Makadi Heights’
          stunning clubhouse
        </Typography>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" xs={5}>
          <Grid item>
            <Facility
              title={facilities[0].title}
              details={facilities[0].details}
              Icon={facilities[0].Icon}
            />
          </Grid>
          <Divider variant="middle" className={classes.divider} />
          <Grid item>
            <Facility
              title={facilities[1].title}
              details={facilities[1].details}
              Icon={facilities[1].Icon}
            />
          </Grid>
          <Divider variant="middle" className={classes.divider} />
          <Grid item>
            <Facility
              title={facilities[2].title}
              details={facilities[2].details}
              Icon={facilities[2].Icon}
            />
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Grid item container direction="column" xs={5}>
          <Grid item>
            <Facility
              title={facilities[3].title}
              details={facilities[3].details}
              Icon={facilities[3].Icon}
            ></Facility>
          </Grid>
          <Divider variant="middle" className={classes.divider} />
          <Grid item>
            <Facility
              title={facilities[4].title}
              details={facilities[4].details}
              Icon={facilities[4].Icon}
            />
          </Grid>
          <Divider variant="middle" className={classes.divider} />
          <Grid item>
            <Facility
              title={facilities[5].title}
              details={facilities[5].details}
              Icon={facilities[5].Icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Facilities;
