import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import { useState } from "react";
import Auth from "./Page/Authentication/Auth";

function App() {
  const { user } = true;
  return (
    <ThemeProvider theme={darkTheme}>
      {user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
