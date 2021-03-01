import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { Switch } from "react-router-dom";
import routes from "./routes";
export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ height: "100vh" }}>
            <Switch>{renderRoutes(routes)}</Switch>
          </Typography>
        </Container>
      </>
    );
  }
}
