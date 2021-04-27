import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { ReactChild } from "react";
import NextLink from "next/link";
import useStyles from "./styles";
import { useMeQuery } from "../../generated/graphql";

interface TemplateProps {
  children: ReactChild[] | ReactChild;
  title: String;
}

export const Template: React.FC<TemplateProps> = ({ children, title }) => {
  const classes = useStyles();
  const [{ data, fetching }] = useMeQuery();
  let loginRegisterButtons = <div></div>;

  if (fetching) {
    //data loading
    loginRegisterButtons = <div></div>;
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
          Logged in as {data.me.username}
        </Typography>
        <Button variant="contained">Logout</Button>
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
