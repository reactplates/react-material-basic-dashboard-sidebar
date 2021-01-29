import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoogleButton from "react-google-button";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import { useHistory, useLocation } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    spacing: 0,
    justify: "space-around",
  },
  cardSpacer: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const LoginPage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const next = useQuery().get("next");
  const isloggedIn = useSelector(selectIsLoggedIn);

  const doGoogleLogin = () => {};

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (isloggedIn) {
      history.push(next || "/");
    }
  }, [isloggedIn, history, next]);

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={4}>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={15000}
          onClose={closeSnackbar}
        ></Snackbar>
        <Card>
          <CardContent>
            <Typography variant="h3" align="center">
              Sign In
            </Typography>
            <Typography variant="subtitle1" align="center">
              to continue to RMBDS
            </Typography>
            <Divider className={classes.cardSpacer} />
            <Box display="flex" flexDirection="row" justifyContent="center">
              <GoogleButton onClick={doGoogleLogin} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
