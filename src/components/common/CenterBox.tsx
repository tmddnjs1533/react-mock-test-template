import React, { FC } from "react";
import { Grid } from "@mui/material";

interface CenterBoxProps {
  minWidth: number;
}

const CenterBox: FC<CenterBoxProps> = ({ minWidth, children, ...props }) => {
  return (
    <Grid
      container
      item
      justifyContent="center"
      sx={{ minWidth, backgroundColor: "rgba(51,184,55,0.8)" }}
    >
      <Grid
        item
        sx={{ width: minWidth, backgroundColor: "rgba(88,204,224,0.8)" }}
        {...props}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default CenterBox;
