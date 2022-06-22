import React from "react";
import { Box } from "@mui/material";
import CenterBox from "./CenterBox";
import { green } from "@mui/material/colors";
const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: green[100] }}>
      <CenterBox minWidth={1200}>Footer CenterBox</CenterBox>
    </Box>
  );
};

export default Footer;
