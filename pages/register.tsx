import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <div>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Reddit Clone</Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default Register;
