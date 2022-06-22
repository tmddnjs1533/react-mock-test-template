import React, { FC } from "react";
import { Typography, Container } from "@mui/material";

const Main: FC = () => {
  return (
    <Container>
      <Typography variant="h1">타이포그래피 H1</Typography>
      <Typography variant="h2">타이포그래피 H2</Typography>
      <Typography variant="h3">타이포그래피 H3</Typography>
      <Typography variant="h4">타이포그래피 H4</Typography>
      <Typography variant="h5">타이포그래피 H5</Typography>
      <Typography variant="h6">타이포그래피 H6</Typography>
      <Typography variant="subtitle1">타이포그래피 subtitle1</Typography>
      <Typography variant="subtitle2">타이포그래피 subtitle2</Typography>
      <Typography variant="body1">타이포그래피 body1</Typography>
      <Typography variant="body2">타이포그래피 body2</Typography>
      <Typography variant="strong">타이포그래피 strong</Typography>
      <Typography variant="button">타이포그래피 button</Typography>
    </Container>
  );
};

export default Main;
