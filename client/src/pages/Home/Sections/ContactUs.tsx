import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactUs = () => {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ color: "text.secondary", fontSize: { xs: "40px" } }}
      >
        Contact <Box component="span">Details</Box>
      </Typography>
      <Typography variant="body2" align="center" sx={{ maxWidth: 1000, m: "0 auto 45px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
        sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
        eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </Typography>
      <Grid
        container
        spacing={5}
        textAlign="center"
        justifyContent="center"
        direction={{ xs: "column", md: "row", lg: "row" }}
      >
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <MapIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                Address
              </Typography>
              <Box component="address">
                Duterte Street, Poblacion Danao City{" "}
                <Box component="span" sx={{ display: "block" }}>
                  {" "}
                  Cebu Philippines 6004
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <LocalPhoneIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                Phone
              </Typography>
              <Box
                component="a"
                href="tel:09432857568"
                sx={{ color: "text.black", textDecoration: "none" }}
              >
                09432857568
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <MailOutlineIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                Email
              </Typography>
              <Box
                component="a"
                href="mailto:danaoglass@gmail.com"
                sx={{ color: "text.black", textDecoration: "none" }}
              >
                danaoglass@gmail.com
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <FacebookIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                Facebook
              </Typography>
              <Box
                component="a"
                href="https://facebook.com/danaoglass"
                target="_blank"
                sx={{ color: "text.black", textDecoration: "none" }}
              >
                https://facebook.com/danaoglass
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
