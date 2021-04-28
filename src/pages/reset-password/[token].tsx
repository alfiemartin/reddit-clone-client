import useStyles from "../../styles/registerStyles";
import {
  Grid,
  Typography,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  TextField,
} from "@material-ui/core";
import { NextPage } from "next";
import React, { useState } from "react";
import { Template } from "../../components/Template/Template";
import { useResetPasswordMutation } from "../../generated/graphql";
import { useRouter } from "next/router";

const ResetPassword: NextPage<{ token: string }> = ({ token }) => {
  const classes = useStyles();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [, resetPassword] = useResetPasswordMutation();
  const router = useRouter();

  const handleResetPassword = async () => {
    const res = await resetPassword({ token: token, newPassword: newPassword });
    if (res.data?.resetPassword.errors) {
      setNewPasswordError(res.data.resetPassword.errors[0].message);
    } else {
      router.push("/");
    }
  };

  return (
    <Template title="Reset Password">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h3" className={classes.signupText}>
            Reset Password
          </Typography>
          <form className={classes.form}>
            <FormGroup>
              <FormControl
                className={classes.formGroup}
                style={{ marginTop: "60px", marginBottom: "50px" }}
              >
                <FormLabel>New Password</FormLabel>
                <TextField
                  type="password"
                  variant="standard"
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={newPasswordError.length > 1 ? true : false}
                  helperText={newPasswordError}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Template>
  );
};

ResetPassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ResetPassword;
