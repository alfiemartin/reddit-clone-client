import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import NextLink from "next/link";
import useStyles from "./styles";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";

interface TemplateProps {
  children: any;
  title: String;
}

export const Template: React.FC<TemplateProps> = ({ children, title }) => {
  const classes = useStyles();
  const [{ data, fetching }] = useMeQuery({ pause: isServer() }); //query tells me if logged in based on cookie. dont fetch from server please
  const [, useLogout] = useLogoutMutation();
  let loginRegisterButtons = <div></div>;

  if (fetching) {
    //data loading
    loginRegisterButtons = <div>loading..</div>;
  } else if (!data?.me) {
    //not logged in
    loginRegisterButtons = (
      <>
        <NextLink href="/register">
          <Button
            color="secondary"
            variant="contained"
            className={classes.marginRight}
          >
            Register
          </Button>
        </NextLink>
        <NextLink href="/login">
          <Button color="secondary" variant="contained">
            Login
          </Button>
        </NextLink>
      </>
    );
  } else {
    loginRegisterButtons = (
      <>
        <Typography className={classes.marginRight}>
          {data.me.username}
        </Typography>
        <Button variant="contained" onClick={() => useLogout()}>
          Logout
        </Button>
      </>
    );
  }

  return (
    <>
      <title>{title}</title>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Reddit Clone
          </Typography>
          {loginRegisterButtons}
        </Toolbar>
      </AppBar>
      <div className={classes.childrenCont}>{children}</div>
    </>
  );
};
