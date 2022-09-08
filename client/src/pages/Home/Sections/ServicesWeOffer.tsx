import React from "react";
import { Grid, Typography, Box, Tabs, Tab, CardMedia, Paper } from "@mui/material";
import { setConstantValue } from "typescript";

// IMAGES
import services_img1 from "../../../assets/images/services/services_1.png";
import services_img2 from "../../../assets/images/services/services_2.png";
import services_img3 from "../../../assets/images/services/services_3.png";
import services_img4 from "../../../assets/images/services/services_4.png";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, backgroundColor: "background.white" }}>{children}</Box>}
    </div>
  );
};

const ServicesWeOffer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Services We Offer
      </Typography>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs variant="scrollable" allowScrollButtonsMobile value={value} onChange={handleChange}>
          <Tab label="Design" sx={{ color: "text.dark" }} />
          <Tab label="Estimate" sx={{ color: "text.dark" }} />
          <Tab label="Installation" sx={{ color: "text.dark" }} />
          <Tab label="Sales and Services" sx={{ color: "text.dark" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper
          sx={{ maxWidth: "310px", margin: "auto", backgroundColor: "transparent", boxShadow: "0" }}
        >
          <CardMedia component="img" image={services_img1} />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper
          sx={{ maxWidth: "310px", margin: "auto", backgroundColor: "transparent", boxShadow: "0" }}
        >
          <CardMedia component="img" image={services_img2} />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper
          sx={{ maxWidth: "310px", margin: "auto", backgroundColor: "transparent", boxShadow: "0" }}
        >
          <CardMedia component="img" image={services_img3} />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Paper
          sx={{ maxWidth: "310px", margin: "auto", backgroundColor: "transparent", boxShadow: "0" }}
        >
          <CardMedia component="img" image={services_img4} />
        </Paper>
      </TabPanel>
    </>
  );
};

export default ServicesWeOffer;
