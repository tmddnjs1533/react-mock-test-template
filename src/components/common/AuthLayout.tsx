import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
const AuthLayout: FC = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={4.5} />

      <Outlet />
      <Grid item xs={4.5} />
    </Grid>
  );
};

export default AuthLayout;
