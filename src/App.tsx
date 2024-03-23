import { Box, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const theme = createTheme({
  typography: {
    h1: {
      color: "#389cd6",
      fontSize: "2.19rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: 700,
    },
    h2: {
      paddingTop: "1rem",
      color: "white",
      fontSize: "1.563rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: 700,
    },
    h3: {
      color: "#7B7070",
      fontSize: "1.16rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: "normal",
    },
    h4: {
      color: "white",
      fontSize: "1rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: 700,
    },
    h5: {
      color: "#7B7070",
      fontSize: "1.25rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: "normal",
    },
    h6: {
      color: "white",
      fontSize: "0.88rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: "normal",
    },
    button: {
      color: "white",
      fontSize: "1.25rem",
      fontFamily: ["Trebuchet MS", "sans serif"].join(),
      fontWeight: 700,
    },
  },
});

const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Box>
  );
};

export default App;
