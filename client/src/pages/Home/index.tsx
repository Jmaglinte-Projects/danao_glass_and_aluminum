import React from "react";
import "./styles.scss";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { motion, AnimatePresence } from "framer-motion";

// SECTIONS
import Main from "./Sections/Main";
import ServicesWeOffer from "./Sections/ServicesWeOffer";
import WhatWeDo from "./Sections/WhatWeDo";
import ContactUs from "./Sections/ContactUs";
import GoogleMap from "./Sections/GoogleMap";

import slider_1 from "../../assets/images/banner/slider/1.jpg";
import slider_2 from "../../assets/images/banner/slider/2.jpg";
import slider_3 from "../../assets/images/banner/slider/3.jpg";
import imgAfter from "../../assets/images/bnr_after.png";
import bannerMain from "../../assets/images/banner/main.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const sliderImages = [
  { label: "San Francisco – Oakland Bay Bridge, United States", imgPath: slider_1 },
  { label: "Bird", imgPath: slider_2 },
  { label: "Bali, Indonesia", imgPath: slider_3 },
];

// const sliderImages = [
// 	{ label: "San Francisco – Oakland Bay Bridge, United States", imgPath: slider_1 },
// 	{ label: "Bird", imgPath: slider_2 },
// 	{ label: "Bali, Indonesia", imgPath: slider_3 },
//   ];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sliderImages.length;
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
        <Box
          sx={{
            width: {
              xs: "250%",
              sm: "200%",
              md: "1920px",
              lg: "1920px",
            },
            margin: 0,
            position: "relative",
            marginLeft: "50%",
            transform: "translate(-50%, 0)",
            flexGrow: 1,
          }}
        >
          <AutoPlaySwipeableViews
            interval={5000}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {sliderImages.map((step, index) => (
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
      <Container id="main_area" sx={{ pt: "60px", pb: "60px" }}>
        <Main />
      </Container>

      <Box
        id="home_services_offer"
        sx={{ backgroundColor: "primary.main", color: "text.white", boxShadow: 10 }}
      >
        <Container sx={{ pt: "45px", pb: "45px" }}>
          <ServicesWeOffer />
        </Container>
      </Box>

      <Box
        id="home_what_we_do"
        sx={{
          backgroundColor: "primary.main",
          color: "text.white",
          boxShadow: 10,
          borderTop: "1px solid #ffffff47",
        }}
      >
        <Container sx={{ pt: "45px", pb: "45px" }}>
          <WhatWeDo />
        </Container>
      </Box>

      <Box>
        <GoogleMap />
      </Box>

      <Box id="home_contact_us">
        <Container sx={{ pt: "45px", pb: "45px" }}>
          <ContactUs />
        </Container>
      </Box>
    </>
  );
};

export default Home;
