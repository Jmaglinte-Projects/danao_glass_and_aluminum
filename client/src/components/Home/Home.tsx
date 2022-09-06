import React from "react";
import "./styles.scss";
import { Container, Box, Grid, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import imgAfter from "../../assets/images/bnr_after.png";

const Home = () => {
  return (
    <>
      <div id="banner"></div>
      <img src={imgAfter} alt="" style={{ marginTop: "-1px" }} />
    </>
  );
};

export default Home;
