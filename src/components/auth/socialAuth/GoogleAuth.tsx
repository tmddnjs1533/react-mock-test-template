import React, { FC, useCallback } from "react";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
const GoogleAuth: FC = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = useCallback(() => {
    alert("구글 로그인!");
    navigate("/auth/sign-up?tp=s");
  }, [navigate]);
  return (
    <>
      <IconButton size="large" onClick={handleGoogleLogin}>
        <GoogleIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
    </>
  );
};

export default GoogleAuth;
