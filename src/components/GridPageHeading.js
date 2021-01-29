import React from "react";

import { Grid, Typography, Hidden } from "@material-ui/core";

const GridPageHeading = ({ BreadCrumbs, children }) => {
  return (
    <>
      <Hidden mdUp>
        <Grid item xs={12}>
          <BreadCrumbs />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={8}>
        <Typography variant="h4">{children}</Typography>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={4}>
          <BreadCrumbs />
        </Grid>
      </Hidden>
    </>
  );
};

export default GridPageHeading;
