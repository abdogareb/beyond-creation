import { Grid, Typography } from "@mui/material";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";
const FormImage = () => {
  const classes = useClasses(styles);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.formImageContainer}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        xs={11}
      >
        <Grid item>
          <Typography className={classes.imageSubTxt}>
            Ready for a Home at
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.imageTxt}
          >
            Makadi Heights
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FormImage;
