import { Template } from "../components/Template/Template";
import React, { useState } from "react";
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
import { useRegisterMutation } from "src/generated/graphql";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const classes = useStyles();

  const [, register] = useRegisterMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();

  const handleRegister = async () => {
    const res = await register({ username, password });

    if (res.data?.register.errors) {
      console.log(res.data.register.errors);
    }
  };

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
                <Input onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl className={classes.formGroup}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleRegister}
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
