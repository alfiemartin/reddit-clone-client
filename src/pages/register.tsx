import { Template } from "../components/Template/Template";
import React from "react";
import {
  Button,
  Container,
  FormGroup,
  FormLabel,
  Input,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles/registerStyles";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const classes = useStyles();
  return (
    <Template>
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.signupText}>
          Sign Up Now!
        </Typography>
        <form className={classes.form}>
          <FormGroup className={classes.formGroup}>
            <FormLabel>Username</FormLabel>
            <Input />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <Input />
          </FormGroup>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up!
          </Button>
        </form>
      </Container>
    </Template>
  );
};

export default Register;
