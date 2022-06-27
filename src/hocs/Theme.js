/** @format */

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc000",
      contrastText: "#fff",
    },
  },
  action:{
    active: "#ffc000",
    selected: "#ffc000",
    hover: "#ffc000",
    selectedOpacity: 0.08,
    hoverOpacity: 0.08,
    focus: "#ffc000",
    focusOpacity: 0.012,
    activatedOpacity: 0.12
  }
});
