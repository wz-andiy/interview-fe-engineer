import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f2566",
      light: "",
    },
    secondary: {
      main: "#19857b",
    },
    success: {
      main: "#D2EFCE",
    },
    warning: {
      main: "#FFF2DD",
    },
    error: {
      main: "#d8d8d8",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
          color: "#000000",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        paddingX: "15px",
        fontWeight: "400",
        color: "#000000",
      },
    },
    MuiTableHead: {
      defaultProps: {
        sx: {
          textTransform: "uppercase",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Nunito Sans"].join(","),
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
});

export default theme;
