import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * 단체 회원가입 유효성 schema
 */
const schema = yup
  .object({
    email: yup.string().required("필수 입력 영역입니다."),
    name: yup.string().required("필수 입력 영역입니다."),
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
    certification: yup
      .string()
      .matches(/\d{6}/, "형식에 맞지 않는 번호입니다."),
    groupName: yup.string().required("필수 입력 영역입니다."),
    groupEngName: yup.string().required("필수 입력 영역입니다."),
    groupType: yup.string().required("필수 입력 영역입니다."),
    isFourteen: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    termsOfUse: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    privacyPolicy: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    receiveNotification: yup.boolean(),
  })
  .required();

/**
 * 단체 회원가입 타입선언
 */
interface IGroupFormInput {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  certification: string;
  groupName: string;
  groupEngName: string;
  groupType: string;
  isFourteen: boolean;
  termsOfUse: boolean;
  privacyPolicy: boolean;
  receiveNotification: boolean;
}

const GroupForm: FC = () => {
  const methods = useForm<IGroupFormInput>({
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      {/*  담당자 정보*/}
      {/*  담당자 본인인증*/}
      {/*  단체 정보*/}
      {/*  약관 동의*/}
    </FormProvider>
  );
};

export default GroupForm;
