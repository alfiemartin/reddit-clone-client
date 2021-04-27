import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    padding: theme.spacing(2),
  },
  signupText: {
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(16),
  },
  inputLabel: {
    width: "50%",
  },
  inputField: {
    width: "50%",
  },
  formGroup: {
    marginBottom: theme.spacing(8),
  },
  form: {
    // width: "50%",
  },
  button: {
    marginTop: theme.spacing(2),
    float: "right",
  },
}));
