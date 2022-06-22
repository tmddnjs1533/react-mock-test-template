import React, { FC, useCallback } from "react";
import { IconButton } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";
const KAKAOIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="50" fill="#fee500" />
      <path
        d="M50.46,33.04c-9.94,0-18,6.26-18,13.97,0,4.8,3.12,9.03,7.86,11.55l-2,7.33c-.18,.65,.56,1.17,1.13,.79l8.75-5.81c.74,.07,1.49,.11,2.25,.11,9.94,0,18-6.26,18-13.97s-8.06-13.97-18-13.97"
        fill="#231815"
      />
    </SvgIcon>
  );
};

const KAKAOAuth: FC = () => {
  const navigate = useNavigate();
  const handleKAKAOLogin = useCallback(() => {
    alert("카카오 로그인!");
    navigate("/auth/sign-up?tp=s");
  }, [navigate]);
  return (
    <>
      <IconButton size="large" onClick={handleKAKAOLogin}>
        <KAKAOIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
    </>
  );
};

export default KAKAOAuth;
