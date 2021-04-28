import { Template } from "../components/Template/Template";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles/registerStyles";
import { useRegisterMutation } from "src/generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/creatUrqlClient";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const classes = useStyles();

  const [, register] = useRegisterMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const res = await register({ username, email, password });
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    if (res.data?.register.errors) {
      switch (res.data.register.errors[0].field) {
        case "username":
          setUsernameError(res.data.register.errors[0].message);
          break;
        case "email":
          setEmailError(res.data.register.errors[0].message);
          break;
        case "password":
          setPasswordError(res.data.register.errors[0].message);
          break;
      }
    } else if (res.data?.register.user) {
      router.push("/");
    }
  };

  return (
    <Template title="register">
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
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  error={usernameError.length > 1 ? true : false}
                  helperText={usernameError}
                />
              </FormControl>
              <FormControl className={classes.formGroup}>
                <FormLabel>email</FormLabel>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError.length > 1 ? true : false}
                  helperText={emailError}
                />
              </FormControl>
              <FormControl className={classes.formGroup}>
                <FormLabel>Password</FormLabel>
                <TextField
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError.length > 1 ? true : false}
                  helperText={passwordError}
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

export default withUrqlClient(createUrqlClient)(Register);
