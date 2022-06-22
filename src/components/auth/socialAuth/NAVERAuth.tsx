import React, { FC, useCallback } from "react";
import { IconButton } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";
const NAVERIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 42 42" {...props}>
    <rect width="42" height="42" rx="21" fill="#03c75a" />
    <polygon
      points="23.73 21.54 18.05 13.4 13.34 13.4 13.34 28.6 18.27 28.6 18.27 20.46 23.95 28.6 28.66 28.6 28.66 13.4 23.73 13.4 23.73 21.54"
      fill="#fff"
    />
  </SvgIcon>
);

const NAVERAuth: FC = () => {
  const navigate = useNavigate();
  const handleNAVERLogin = useCallback(() => {
    alert("네이버 로그인!");
    navigate("/auth/sign-up?tp=s");
  }, [navigate]);
  return (
    <>
      <IconButton size="large" onClick={handleNAVERLogin}>
        <NAVERIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
    </>
  );
};

export default NAVERAuth;
