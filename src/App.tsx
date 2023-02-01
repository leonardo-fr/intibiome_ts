import { Box, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home/Home";

const theme = createTheme({
  
  typography: {
    h1: {
      color: "#389cd6",
      fontSize: "1.938rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: 700
    },
    h2: {
      paddingTop: "1rem",
      color: "white",
      fontSize: "1.563rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: 700
    },
    h3: {
      color: "#7B7070",
      fontSize: "1rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: "normal"
    },
    h4: {
      color: "white",
      fontSize: "1rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: 700
    },
    h5: {
      color: "#7B7070",
      fontSize: "1.25rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: "normal"
    },
    h6: {
      color: "white",
      fontSize: "0.88rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: "normal"
    },
    button: {
      color: "white",
      fontSize: "1.25rem",
      fontFamily: ['Trebuchet MS', 'sans serif'].join(),
      fontWeight: 700
    }
  },
});

const App: React.FC = () => {
  return(
    <Box>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </Box>
  );
}

export default App;