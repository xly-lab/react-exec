import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import List from "./modules/List";
const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    height: "100vh",
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List />
      </CardContent>
    </Card>
  );
}
