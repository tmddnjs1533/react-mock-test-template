import React, { FC, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import MuiFormControlLabel from "@mui/material/FormControlLabel";
const FormContainer = styled(Box)`
  margin-top: 3em;
  display: flex;
  justify-content: center;
`;

const FormBox = styled(Box)`
  width: 350px;
`;

const CustomCheckbox = styled(MuiFormControlLabel)`
  & .MuiFormControlLabel-label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.info.main};
  }
`;

const SignUpForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleClickShowPasswordConfirm = useCallback(() => {
    setShowPasswordConfirm((prevState) => !prevState);
  }, []);

  return (
    <FormContainer>
      <FormBox>
        <Controller
          name="userName"
          render={({ field }) => (
            <TextField
              autoComplete="이름"
              required
              fullWidth
              id="userName"
              label="이름"
              autoFocus
              variant="standard"
              {...field}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              sx={{ mb: 1 }}
            />
          )}
          control={control}
        />
        <Controller
          name="email"
          render={({ field }) => (
            <TextField
              required
              fullWidth
              id="email"
              label="이메일"
              autoComplete="email"
              autoFocus
              variant="standard"
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 1 }}
            />
          )}
          control={control}
        />
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel htmlFor="password" required error={!!errors.password}>
            비밀번호
          </InputLabel>
          <Controller
            render={({ field }) => (
              <Input
                id="password"
                required
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="비밀번호 표시"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...field}
                error={!!errors.password}
                sx={{ mb: 1 }}
              />
            )}
            name="password"
            control={control}
          />
          {errors.password && (
            <FormHelperText error>{errors.password?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel
            htmlFor="passwordConfirm"
            required
            error={!!errors.passwordConfirm}
          >
            비밀번호 확인
          </InputLabel>
          <Controller
            render={({ field }) => (
              <Input
                id="passwordConfirm"
                type={showPasswordConfirm ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="비밀번호 확인 표시"
                      onClick={handleClickShowPasswordConfirm}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...field}
                error={!!errors.passwordConfirm}
                sx={{ mb: 1 }}
              />
            )}
            name="passwordConfirm"
            control={control}
          />
          {errors.passwordConfirm && (
            <FormHelperText error>
              {errors.passwordConfirm?.message}
            </FormHelperText>
          )}
        </FormControl>
        <CustomCheckbox
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="키포인트 어노테이션에서 보내는 정보를 이메일로 받겠습니다."
          sx={{ fontSize: "0.8rem" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          회원가입
        </Button>
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
