import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      margin: "auto",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function CustomizedInputBase(props: {
  vaule: string;
  onChange: Function;
  search: Function;
}) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        value={props.vaule}
        onChange={(e) => props.onChange(e.target.value)}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={() => props.search()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
