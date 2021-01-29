import React from "react";
import GridPageHeading from "../components/GridPageHeading";
import ColoredCard from "../components/ColoredCard";
import PageBreadcrumbs from "../components/PageBreadcrumbs";

import { makeStyles, Divider, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardSpacer: { marginTop: 10, marginBottom: 10 },
}));

const BreadCrumbs = () => {
  const path = [{ title: "Home", to: "/" }, { title: "Overview" }];
  return <PageBreadcrumbs items={path} />;
};

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <GridPageHeading BreadCrumbs={BreadCrumbs}>Dashboard</GridPageHeading>
      <Grid item xs={12}>
        <ColoredCard>
          <Typography variant="h6">Welcome to RMBDS!</Typography>
          <Divider className={classes.cardSpacer} />
          <Typography>A description of your project can go here.</Typography>
        </ColoredCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ColoredCard>
          <Typography variant="h6">Scan Lists</Typography>
          <Divider className={classes.cardSpacer} />
          <Typography>Scan lists go here.</Typography>
        </ColoredCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ColoredCard>
          <Typography variant="h6">Favorite Channels</Typography>
          <Divider className={classes.cardSpacer} />
          <Typography>Favorite channels go here.</Typography>
        </ColoredCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ColoredCard>
          <Typography variant="h6">Favorite Departments</Typography>
          <Divider className={classes.cardSpacer} />
          <Typography>Favorite departments go here.</Typography>
        </ColoredCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ColoredCard>
          <Typography variant="h6">Favorite Systems</Typography>
          <Divider className={classes.cardSpacer} />
          <Typography>Favorite systems go here.</Typography>
        </ColoredCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
