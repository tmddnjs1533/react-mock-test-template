import React, { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { SignupPaper } from "./style";
import PersonSignupFormProvider from "./cutomFormProvider";
import PersonalData from "./DataForm";
import SelfCertify from "../selfCertification";
import Policy from "./Policy";
import SignUpButton from "./SignUpButton";
const PersonalForm: FC = () => {
  return (
    <Grid
      item
      xs={3}
      component={Paper}
      elevation={6}
      sx={{
        my: 8,
      }}
    >
      <SignupPaper>
        <Typography variant="h5">회원가입</Typography>
        <PersonSignupFormProvider>
          {/*  개인 정보*/}
          <PersonalData />
          {/*  본인 인증*/}
          <Typography variant="h6">본인인증</Typography>
          <SelfCertify />
          {/*  약관 동의*/}
          <Policy />
          {/*  회원가입 버튼*/}
          <SignUpButton />
        </PersonSignupFormProvider>
      </SignupPaper>
    </Grid>
  );
};

export default PersonalForm;
