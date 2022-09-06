import React from "react";
import "./styles.scss";
import { useTheme } from "@mui/material/styles";
import { Container, Box, MobileStepper, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { motion, AnimatePresence } from "framer-motion";

import slider_1 from "../../assets/images/banner/slider/1.jpg";
import slider_2 from "../../assets/images/banner/slider/2.jpg";
import slider_3 from "../../assets/images/banner/slider/3.jpg";

import imgAfter from "../../assets/images/bnr_after.png";
import bannerMain from "../../assets/images/banner/main.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: slider_1,
  },
  {
    label: "Bird",
    imgPath: slider_2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: slider_3,
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <div id="banner">
        <Box sx={{ width: "1920px", flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            interval={5000}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
        <Container>
          <Box component="div" sx={{ position: "relative" }}>
            <Box
              component="div"
              className="images"
              sx={{
                position: "relative",
                width: "450px",
                maxWidth: "100%",
              }}
            ></Box>
          </Box>
        </Container>
      </div>
      {/* <img src={imgAfter} alt="" style={{ marginTop: "-1px" }} /> */}
    </>
  );
};

export default Home;
