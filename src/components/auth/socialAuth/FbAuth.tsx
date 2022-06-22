import React, { FC, useCallback } from "react";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useNavigate } from "react-router-dom";
const FbAuth: FC = () => {
  const navigate = useNavigate();
  const handleFbLogin = useCallback(() => {
    alert("페이스북 로그인!");
    navigate("/auth/sign-up?tp=s");
  }, [navigate]);
  return (
    <>
      <IconButton size="large" onClick={handleFbLogin}>
        <FacebookOutlinedIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
    </>
  );
};

export default FbAuth;
