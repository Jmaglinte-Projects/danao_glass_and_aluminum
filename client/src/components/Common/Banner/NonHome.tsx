import React from "react";
import { Box } from "@mui/material";

function NonHome(prop) {
  return (
    <Box
      component="figure"
      sx={{
        width: "1920px",
        margin: 0,
        position: "relative",
        marginLeft: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <img src={prop.image} />
    </Box>
  );
}

export default NonHome;
