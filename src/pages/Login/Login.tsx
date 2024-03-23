import { Box, Button, TextField, Typography } from "@mui/material";
import AppBarMenu from "src/components/AppBarMenu/AppBarMenu";
import Footer from "src/components/Footer/Footer";
import { sxStyles } from "./Login.style";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login: React.FC = () => {
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/");
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="App" sx={sxStyles.home}>
      <AppBarMenu isHome={false} />
      <Typography sx={{ marginTop: 5 }}>
        Faça o login para comprar em nosso site!
      </Typography>
      <Box
        sx={{ margin: "auto", marginTop: 5, width: "50%", textAlign: "center" }}
      >
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ marginTop: 4, marginBottom: 5 }}
        >
          Login
        </Button>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Login;
