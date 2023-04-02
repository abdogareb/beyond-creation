import { Grid } from "@mui/material";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";
import FormImage from "../../components/ContactFrom/FormImage";
import ContactInfoForm from "../../components/ContactFrom/ContactInfoForm";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactForm = () => {
  const classes = useClasses(styles);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="row" className={classes.formContainer}>
      {!isMobile && (
        <Grid item md={4.8}>
          <FormImage />
        </Grid>
      )}
      <Grid item md={7.2}>
        <ContactInfoForm />
      </Grid>
    </Grid>
  );
};
export default ContactForm;
