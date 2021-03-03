import React, { useContext } from "react";
import { ThemeContext } from "../../index";

export default function ThemedButton() {
  const { themes, toggler }: any = useContext(ThemeContext);

  return (
    <button
      style={{ backgroundColor: themes.background, color: themes.foreground }}
      onClick={() =>
        toggler({
          dark: {
            foreground: "#000000",
            background: "#eeeeee",
          },
          light: {
            foreground: "#ffffff",
            background: "#222222",
          },
        })
      }
    >
      I am styled by theme context!
    </button>
  );
}
