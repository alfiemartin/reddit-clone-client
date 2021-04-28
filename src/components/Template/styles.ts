import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appbar: {
    height: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },
  childrenCont: {
    marginTop: theme.spacing(8),
    background: theme.palette.background.default,
    minHeight: "100vh",
  },
  marginRight: {
    marginRight: theme.spacing(2),
  },
}));
