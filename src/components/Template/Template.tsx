import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { ReactChild } from "react";
import useStyles from "./styles";

interface TemplateProps {
  children: ReactChild;
}

export const Template: React.FC<TemplateProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6">Reddit Clone</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.childrenCont}>{children}</div>
    </>
  );
};
