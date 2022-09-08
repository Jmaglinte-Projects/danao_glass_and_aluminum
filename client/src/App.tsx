import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import Theme1 from "./themes/theme1";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

// PAGES
import SigninSide from "./components/Auth/SigninSide";
import Signup from "./components/Auth/Signup";
import Images from "./components/Images/Images";
import Receipt from "./components/Receipt";

import Home from "./pages/Home";
import ShowRoom from "./pages/ShowRoom";
import Accessories from "./pages/Accessories";

function App() {
  return (
    <ThemeProvider theme={Theme1}>
      <div className="App clearfix">
        <div style={{ display: "block" }}>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/signin" element={<SigninSide />} />
            <Route path="/temp-signup" element={<Signup />} />

            <Route path="/show-room" element={<ShowRoom />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </div>
        <Container>
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
