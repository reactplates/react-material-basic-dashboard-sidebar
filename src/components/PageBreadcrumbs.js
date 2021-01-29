import React from "react";
import LinkRouter from "../components/LinkRouter";

import { Breadcrumbs, Typography } from "@material-ui/core";

import { NavigateNext as NavigateNextIcon } from "@material-ui/icons";

const PageBreadcrumbs = ({ items, children }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      style={{ float: "right", display: "inline" }}
    >
      {items
        ? items.map(({ title, to }) =>
            to ? (
              <LinkRouter color="inherit" to={to}>
                {title}
              </LinkRouter>
            ) : (
              <Typography color="textPrimary">{title}</Typography>
            )
          )
        : children}
    </Breadcrumbs>
  );
};

export default PageBreadcrumbs;
