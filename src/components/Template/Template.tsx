import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { ReactChild } from "react";
import NextLink from "next/link";
import useStyles from "./styles";

interface TemplateProps {
  children: ReactChild[] | ReactChild;
  title: String;
}

export const Template: React.FC<TemplateProps> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      <title>{title}</title>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.marginRight}>
            Reddit Clone
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            Logged in as:{" "}
          </Typography>
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
        </Toolbar>
      </AppBar>
      <div className={classes.childrenCont}>{children}</div>
    </>
  );
};
