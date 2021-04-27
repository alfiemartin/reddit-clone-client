import { Template } from "../components/Template/Template";
import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles/registerStyles";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const classes = useStyles();
  return (
    <Template>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h3" className={classes.signupText}>
            Sign Up Now!
          </Typography>
          <form className={classes.form}>
            <FormGroup>
              <FormControl className={classes.formGroup}>
                <FormLabel>Username</FormLabel>
                <Input />
              </FormControl>
              <FormControl className={classes.formGroup}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up!
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Register;
