import { Button, Typography } from "@mui/material";
import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { WithTextLink } from "../../login/style";
import { useFormContext } from "react-hook-form";

const SignUpButton: FC = () => {
  const { handleSubmit } = useFormContext();
  const handlePersonalSignup = useCallback((data) => {
    console.log("일반 회원가입", data);
  }, []);
  return (
    <>
      <Button onClick={handleSubmit(handlePersonalSignup)} variant="contained">
        회원가입
      </Button>
      <WithTextLink>
        <Typography>계정이 있으신가요?</Typography>
        <Button component={Link} to="/auth/login">
          로그인하기
        </Button>
      </WithTextLink>
    </>
  );
};

export default SignUpButton;
