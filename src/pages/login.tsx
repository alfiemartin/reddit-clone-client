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
import { useLoginMutation } from "src/generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/creatUrqlClient";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const classes = useStyles();

  const [, login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await login({ options: { username, password } });
    setUsernameError("");
    setPasswordError("");

    if (res.data?.login.errors) {
      if (res.data.login.errors[0].field === "username") {
        setUsernameError(res.data.login.errors[0].message);
      } else if (res.data.login.errors[0].field === "password") {
        setPasswordError(res.data.login.errors[0].message);
      }
    } else if (res.data?.login.user) {
      router.push("/");
    }
  };

  return (
    <Template title="login">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h3" className={classes.signupText}>
            Login
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
                onClick={handleLogin}
              >
                Login
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Template>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
