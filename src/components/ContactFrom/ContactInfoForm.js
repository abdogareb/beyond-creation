import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";
import { schema } from "./ContactInfoValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";

const ContactInfoForm = () => {
  const classes = useClasses(styles);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [data, SetData] = React.useState({});

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  };
  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    SetData(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={7}
        marginTop={2}
        // style={{ height: "100%" }}
      >
        <Grid item xs={9}>
          <Typography className={classes.formHeaderTxt}>
            Enter your details and our representative will get back to you
            shortly
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label="Your name"
                variant="standard"
                type="text"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                inputProps={{
                  classes: {
                    icon: classes.notchedOutline,
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={9}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label="Email ID"
                variant="standard"
                type="text"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                inputProps={{
                  classes: {
                    icon: classes.notchedOutline,
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={9}>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label="Phone number"
                variant="standard"
                type="text"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                inputProps={{
                  classes: {
                    icon: classes.notchedOutline,
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={9}>
          <Controller
            name="budget"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label="Choose your bugdet"
                variant="standard"
                type="number"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                inputProps={{
                  classes: {
                    icon: classes.notchedOutline,
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={9}>
          <Controller
            name="message"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label="Enter you message"
                variant="standard"
                type="Text"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                inputProps={{
                  classes: {
                    icon: classes.notchedOutline,
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item container xs={9} alignItems="center">
          <Grid item>
            <Checkbox
              style={{
                color: "#646464",
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.checkBoxTxt}>
              I agree to the processing of personal data
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            className={classes.submitButton}
            fullWidth
            onClick={handleSubmit(onSubmit)}
            disabled={!checked}
          >
            leave a Call request
          </Button>
        </Grid>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Contact Info
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={classes.closeIcon}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography component="span" className={classes.popupTitle}>
            Name:
          </Typography>
          <Typography display="inline" className={classes.popupInfo}>
            {data.name}
          </Typography>
          <Divider variant="middle" className={classes.popupDivider} />
          <Typography component="span" className={classes.popupTitle}>
            Email:
          </Typography>
          <Typography display="inline" className={classes.popupInfo}>
            {data.email}
          </Typography>
          <Divider variant="middle" className={classes.popupDivider} />
          <Typography component="span" className={classes.popupTitle}>
            Phone:
          </Typography>
          <Typography display="inline" className={classes.popupInfo}>
            {data.phone}
          </Typography>
          <Divider variant="middle" className={classes.popupDivider} />
          <Typography component="span" className={classes.popupTitle}>
            Budget:
          </Typography>
          <Typography display="inline" className={classes.popupInfo}>
            {data.budget}
          </Typography>
          <Divider variant="middle" className={classes.popupDivider} />
          <Typography component="span" className={classes.popupTitle}>
            message:
          </Typography>
          <Typography display="inline" className={classes.popupInfo}>
            {data.message}
          </Typography>
        </DialogContent>
      </Dialog>
      ;
    </div>
  );
};
export default ContactInfoForm;
