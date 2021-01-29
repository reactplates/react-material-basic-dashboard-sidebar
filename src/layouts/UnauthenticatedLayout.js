import React from "react";

import { CssBaseline } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

const UnauthenticatedLayout = ({ children }) => {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>{children}</main>
    </>
  );
};

export default UnauthenticatedLayout;
