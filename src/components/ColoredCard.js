import React from "react";
import { selectDarkMode } from "../redux/features/layout/layoutSlice";
import { useSelector } from "react-redux";

import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardheader: {
    backgroundColor: (props) => !props.darkMode && "#1976D2",
    paddingTop: 3,
    paddingBottom: 3,
  },
}));

const ColoredCard = ({ children }) => {
  const darkMode = useSelector(selectDarkMode);
  const classes = useStyles({ darkMode });
  return (
    <Card>
      <CardHeader className={classes.cardheader} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ColoredCard;
