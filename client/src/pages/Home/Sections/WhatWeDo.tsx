import React from "react";
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

// IMAGES
import img_1 from "../../../assets/images/what-we-do/wwd_1.jpg";
import img_2 from "../../../assets/images/what-we-do/wwd_2.jpg";
import img_3 from "../../../assets/images/what-we-do/wwd_3.jpg";
import img_4 from "../../../assets/images/what-we-do/wwd_4.jpg";
import img_5 from "../../../assets/images/what-we-do/wwd_5.jpg";
import img_6 from "../../../assets/images/what-we-do/wwd_6.jpg";
import img_7 from "../../../assets/images/what-we-do/wwd_7.jpg";
import img_8 from "../../../assets/images/what-we-do/wwd_8.jpg";
import img_9 from "../../../assets/images/what-we-do/wwd_9.jpg";
import img_10 from "../../../assets/images/what-we-do/wwd_10.jpg";
import img_11 from "../../../assets/images/what-we-do/wwd_11.jpg";
import img_12 from "../../../assets/images/what-we-do/wwd_12.jpg";

const images = [
  {
    url: img_1,
    title: "Glass",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_2,
    title: "Aluminum",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_3,
    title: "Accessories",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_4,
    title: "Sliding Window",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_5,
    title: "Mirror",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_6,
    title: "Jalousie Window",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_7,
    title: "Tempered Glass",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_8,
    title: "Swing Door",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_9,
    title: "Aquarium",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_10,
    title: "Patch Door",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_11,
    title: "Fixed Alcomesh with Screen and Door	",
    description: "Lorem ipsum char langs",
  },
  {
    url: img_12,
    title: "Bread Case",
    description: "Lorem ipsum char langs",
  },
];

const WhatWeDo = () => {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          mb: 3,
          letterSpacing: "2px",
        }}
      >
        What We Do
      </Typography>
      <Box component="span"></Box>
      <Grid container spacing={4} justifyContent="space-evenly">
        {images.map((image) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={image.title}>
              <Card sx={{ borderRadius: 2, boxShadow: 10 }}>
                <CardMedia
                  component="img"
                  //   height="140"
                  image={image.url}
                  // alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "text.dark", fontSize: 15 }}
                  >
                    {image.title}
                  </Typography>
                  <Typography variant="caption" color="text.dark">
                    {image.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WhatWeDo;
