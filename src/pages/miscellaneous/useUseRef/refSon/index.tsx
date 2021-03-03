import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const BasicTextFields = forwardRef((props, ref) => {
  const [value2, setValue2] = useState<string>("");
  const classes = useStyles();
  const ref_ = useRef();
  useImperativeHandle(ref, () => ({
    //@ts-ignore
    useFocus: () => ref_.current!.lastElementChild.lastChild.focus(),
    // onChange: () => changeValue2(),
  }));
  const changeValue2 = (e: ChangeEvent) => {
    //@ts-ignore
    setValue2(e.target!.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" ref={ref_ as any} />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        value={value2}
        onChange={changeValue2}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
});

export default BasicTextFields;
