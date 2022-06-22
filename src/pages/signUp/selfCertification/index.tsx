import React, { FC, useState } from "react";
import InputComponent from "components/common/InputComponent";
import Certify from "./Certify";
import { useFormContext } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";

const SelfCertify: FC = () => {
  const [showInput, setShowInput] = useState(false);
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {/*  전화번호 입력*/}
      <Certify setShowInput={setShowInput} />
      {/*  인증번호 입력*/}
      {showInput && <InputComponent name={"certification"} />}
      <FormControl error={!!errors.certification}>
        {!!errors.certification && (
          <FormHelperText>{errors.certification.message}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default SelfCertify;
