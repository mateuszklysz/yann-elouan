import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: "#ffffff";
      black: "#000000";
      red: "#f05545";
      green: "#4c8c4a";
      blue: "#5472d3";
    };
    font: {
      size: {
        s: "2.4em";
        m: "4.8em";
        l: "9.6em";
      };
      family: {
        karla: "'Karla', sans-serif;";
      };
    };
  }
}
