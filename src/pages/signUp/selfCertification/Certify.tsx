import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import { CertifyPhoneBox } from "./style";
interface CertifyProps {
  setShowInput: Dispatch<SetStateAction<boolean>>;
}
interface CertifyFormInput {
  phoneNumber: string;
}
const schema = yup.object({
  phoneNumber: yup.string().matches(/\d{6}/, "형식에 맞지 않는 번호입니다."),
});
const Certify: FC<CertifyProps> = ({ setShowInput }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<CertifyFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  const handleCertify = useCallback(
    (data) => {
      console.log(data, "전송완료");
      setShowInput(true);
    },
    [setShowInput]
  );
  return (
    <CertifyPhoneBox>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="certNumberLabel">휴대전화</InputLabel>
        <Controller
          render={({ field }) => (
            <Input id="phoneNumber" {...field} error={!!errors.phoneNumber} />
          )}
          name="phoneNumber"
          control={control}
        />
        {errors.phoneNumber && (
          <FormHelperText error>{errors.phoneNumber?.message}</FormHelperText>
        )}
      </FormControl>
      <Button onClick={handleSubmit(handleCertify)} variant="contained">
        {isSubmitted ? "재전송" : "인증번호 받기"}
      </Button>
    </CertifyPhoneBox>
  );
};

export default Certify;
