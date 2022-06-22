import React, { FC, useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Button,
  Typography,
  Divider,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import onssAxios from "../../utils/fetcher";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginForm,
  LoginPaper,
  WithCheckBoxLink,
  ColorButton,
  WithTextLink,
} from "./style";
import InputComponent from "components/common/InputComponent";
import PasswordComponent from "components/common/PasswordComponent";
import CheckboxComponent from "components/auth/CheckboxComponent";
import FbAuth from "../../components/auth/socialAuth/FbAuth";
import KAKAOAuth from "../../components/auth/socialAuth/KAKAOAuth";
import NAVERAuth from "../../components/auth/socialAuth/NAVERAuth";
import GoogleAuth from "../../components/auth/socialAuth/GoogleAuth";
interface ILoginFormInputs {
  id: string;
  password: string;
  rememberMe: boolean;
}
const schema = yup.object({
  id: yup.string().required("필수 입력 영역입니다."),
  password: yup.string().required("필수 입력 영역입니다."),
  rememberMe: yup.boolean(),
});

const Login: FC = () => {
  const navigate = useNavigate();

  const methods = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: "",
      password: "",
      rememberMe: false,
    },
  });
  const { handleSubmit, setError } = methods;
  const handleLogin = useCallback(
    (data: ILoginFormInputs) => {
      console.log(data);
      return onssAxios({
        method: "post",
        url: "user-service/login",
        data: JSON.stringify({
          userEmail: data.id,
          userPw: data.password,
          rememberMe: data.rememberMe,
        }),
      }).then((data) => {
        if (data.data?.token && typeof data.data.token === "string") {
          // 로그인 성공(아이디,비밀번호 유효)
          navigate("/");
        } else if (data.status === 401) {
          if (data.data?.errs && typeof data.data.errs === "string") {
            // 로그인 실패
            setError("id", { type: "login-error", message: data.data.errs });
            setError("password", {
              type: "login-error",
              message: data.data.errs,
            });
          } else {
            // 미인증
            navigate("/auth/not-authored");
          }
        } else if (data.status === 423) {
          // 잠금
          navigate("/auth/locked");
        } else if (data.status === 410) {
          // 1년 미접속 휴면
          navigate("/auth/sleeped");
        } else if (data.status === 403) {
          // 미승인
          navigate("/auth/not-allowed");
        } else {
          navigate("/not-found");
        }
      });
    },
    [navigate, setError]
  );
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
      <LoginPaper>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <LoginForm
          component={"form"}
          noValidate
          onSubmit={handleSubmit(handleLogin)}
        >
          <FormProvider {...methods}>
            <InputComponent name={"id"} label={"아이디"} />
            <PasswordComponent name={"password"} label={"비밀번호"} />
            <WithCheckBoxLink>
              <CheckboxComponent name="rememberMe" label="로그인 기억하기" />

              <Button component={Link} to="/auth/pw-reset">
                비밀번호 재설정
              </Button>
            </WithCheckBoxLink>
            <ColorButton
              fullWidth
              type="submit"
              onClick={handleSubmit(handleLogin)}
              variant="contained"
            >
              LOGIN
            </ColorButton>
            <WithTextLink>
              <Typography variant="body2">계정이 있으신가요?</Typography>
              <Button component={Link} to="/auth/sign-up">
                회원가입
              </Button>
            </WithTextLink>
          </FormProvider>
        </LoginForm>
        <Divider sx={{ width: "350px" }}>
          <Typography variant="body2">O R</Typography>
        </Divider>
        <Stack direction="row">
          <GoogleAuth />
          <KAKAOAuth />
          <NAVERAuth />
          <FbAuth />
        </Stack>
      </LoginPaper>
    </Grid>
  );
};

export default Login;
