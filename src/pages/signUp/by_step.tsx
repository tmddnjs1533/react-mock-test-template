import React, { FC, useState, useCallback } from "react";
import Box from "@mui/material/Box";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignUpForm from "./signupForm";
import SelfCertification from "./selfCertification/index-old";
import Policy from "./policy";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISignUpFormInputs } from "./SignUp";
const schema = yup
  .object({
    termsOfUse: yup.boolean(),
    privacyPolicy: yup.boolean(),
    userName: yup.string().required("필수 입력 영역입니다."),
    email: yup.string().required("필수 입력 영역입니다."),
    password: yup
      .string()
      .required("필수 입력 영역입니다.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{6,})/,
        "비밀번호는 6-12 내외의 영문 대소문자,숫자, 특수문자를 혼합하여 만들어주세요"
      ),
    passwordConfirm: yup
      .string()
      .required("필수 입력 영역입니다.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일지하지 않습니다."),
  })
  .required();
const SignUp: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<ISignUpFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      termsOfUse: false,
      privacyPolicy: false,
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const handleNext = useCallback(() => {
    setActiveStep(activeStep + 1);
  }, [activeStep]);

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormProvider {...methods}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              회원가입이 완료되었습니다.
            </Typography>
            <Typography variant="subtitle1">
              로그인 후 사이트를 이용하실 수 있습니다.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 ? (
              <Policy handleNext={handleNext} />
            ) : activeStep === 1 ? (
              <SelfCertification handleNext={handleNext} />
            ) : activeStep === 2 ? (
              <SignUpForm />
            ) : null}
          </React.Fragment>
        )}
      </FormProvider>
    </Box>
  );
};

export default SignUp;

const steps = ["약관 동의", "본인 인증", "정보 입력", "회원가입 완료"];
