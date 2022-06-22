import React, { FC } from "react";
import { Tooltip } from "@mui/material";
import InputComponent from "components/common/InputComponent";
import PasswordComponent from "components/common/PasswordComponent";

const PersonalData: FC = () => {
  const tooltip_email = "이메일 형식으로 입력하세요";
  const tooltip_name = "띄어쓰기 없이 한글 또는 영문자 8자 내외로 입력하세요.";
  const tooltip_password =
    "8~16자 내외, 영문(대,소문자), 숫자 및 특수문자를 포함하여 입력하세요.";

  return (
    <>
      <Tooltip title={tooltip_email} placement="right" arrow>
        <InputComponent name={"email"} label={"이메일"} />
      </Tooltip>
      <Tooltip title={tooltip_name} placement="right" arrow>
        <InputComponent name={"name"} label={"이름"} />
      </Tooltip>
      <Tooltip title={tooltip_password} placement="right" arrow>
        <PasswordComponent name={"password"} label={"비밀번호"} />
      </Tooltip>
      <PasswordComponent name={"passwordConfirm"} />
    </>
  );
};

export default PersonalData;
