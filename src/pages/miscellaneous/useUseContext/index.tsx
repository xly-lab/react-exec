import React, { Component } from "react";
import Toolbar from "./contextSon";
//@ts-ignore
export const ThemeContext = React.createContext();

export default class useUseContext extends Component {
  state = {
    themes: {
      light: {
        foreground: "#000000",
        background: "#eeeeee",
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222",
      },
    },
  };
  toggler = (e: any) => {
    this.setState({ themes: e });
  };
  render() {
    const { themes } = this.state;

    return (
      <>
        <h1>hello uesContext</h1>
        <ThemeContext.Provider
          value={{
            themes: themes.dark,
            toggler: this.toggler,
          }}
        >
          <Toolbar />
        </ThemeContext.Provider>
      </>
    );
  }
}
