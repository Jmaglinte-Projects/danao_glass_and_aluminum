import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

// IMAGES
import main_img from "../../../assets/images/main_img.jpg";

const Main = () => {
  return (
    <>
      <Grid container spacing={5} alignItems="center">
        <Grid item lg={4} md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <CardMedia
            component="img"
            image={main_img}
            alt="real estate building"
            sx={{ borderRadius: 2, boxShadow: 10 }}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Typography variant="subtitle1">Welcome to</Typography>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ color: "text.primary", fontSize: { xs: 30, lg: 40 }, fontWeight: 400 }}
          >
            Danao Glass and Aluminum <span>Supply</span>
          </Typography>
          <Typography variant="body1">
            The Danao Glass and Aluminum Supply is based on Danao City, this has been one of the
            trusted Glass Manufacturer since 1997. The Store was first established at Olivar St.
            Danao City, Cebu. Until on 2009, Danao Glass and Aluminum Supply decided to relicate at
            S, Duterte St, Barangay Poblacion, Danao City, Cebu. Up until the present day, Danao
            Glass and Aluminum Supply is still at Duterte St. Poblacion, still continues to offer
            it&apos;s service. The Store isn&apos;t only providing their service in Danao City. But
            it also caters outside Cebu City.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
