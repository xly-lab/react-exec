import {
  Avatar,
  Container,
  createStyles,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { reqestMostData } from "../services/getMostData";
import { debounce } from "../utils";
import Search from "./search";

interface MostDataType {
  name: string;
  title: string;
  text: string;
  tid: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: "auto",
      maxHeight: 500,
      overflowY: "scroll",
    },
    Typography: {
      textAlign: "center",
    },
  })
);

export default function MostData() {
  const classes = useStyles();
  const [ulScrollTop, setUlScrollTop] = useState<number>(0);
  const [ulHeight, setUlHeight] = useState<number>(0);
  const [prvY, setPrvY] = useState<number>(0);
  const [mostData, setMostData] = useState<MostDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [mostAllData, setMostAllData] = useState<MostDataType[]>([]);
  const [mostSearchData, setMostSearchData] = useState<MostDataType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const listRef = useRef(null);
  const getMostData = async () => {
    const result = await reqestMostData();
    await setMostAllData(result?.data?.data);
  };

  const handleData = () => {
    //@ts-ignore
    if (ulScrollTop > prvY) {
      //@ts-ignore
      // eslint-disable-next-line react-hooks/rules-of-hooks
      debounce(setPrvY, 1000, ulScrollTop);
      if (ulHeight < ulScrollTop + 510) {
        setPage(page + 1);
        let mostData_: MostDataType[] = searchValue
          ? mostSearchData.slice(0, page * 16)
          : mostAllData.slice(0, page * 16);
        setMostData(mostData_);
      }
    }
  };
  const reg = new RegExp(searchValue, "gi");
  const search = () => {
    if (searchValue) {
      setFlag(true);
    }
    const mostSearchData_ = mostAllData.filter((item) => reg.test(item.title));
    setMostSearchData(mostSearchData_);
  };
  useEffect(() => {
    getMostData();
  }, []);
  useEffect(() => {
    if (!searchValue) {
      setMostData(mostAllData.slice(0, 16));
      setFlag(false);
    }
  }, [searchValue]);
  useEffect(() => {
    setMostData(mostAllData.slice(0, 16));
  }, [mostAllData]);

  useEffect(() => {
    setMostData(mostSearchData.slice(0, 16));
  }, [mostSearchData]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Search vaule={searchValue} onChange={setSearchValue} search={search} />
        <br />
        <Typography
          className={classes.Typography}
          variant="subtitle1"
          gutterBottom
        >
          {!flag
            ? `当前共有${mostAllData.length}个项目`
            : `当前搜索到的项目有${mostSearchData.length}个`}
        </Typography>
        <br />
        <List
          className={classes.root}
          ref={listRef as any}
          onScrollCapture={(e) => {
            //@ts-ignore
            setUlScrollTop(e.target.scrollTop);
            //@ts-ignore
            setUlHeight(e.target.scrollHeight);
            debounce(handleData, 1000)();
          }}
        >
          {mostData.map((item: MostDataType) => (
            <Fragment key={item.text}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.text} />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Container>
    </>
  );
}
