import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * 소셜 회원가입 유효성 schema
 */
const schema = yup
  .object({
    email: yup.string().required("필수 입력 영역입니다."),
    name: yup.string().required("필수 입력 영역입니다."),
    certification: yup
      .string()
      .matches(/\d{6}/, "형식에 맞지 않는 번호입니다."),
    isFourteen: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    termsOfUse: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    privacyPolicy: yup.boolean().oneOf([true], "필수 체크 항목입니다."),
    receiveNotification: yup.boolean(),
  })
  .required();

/**
 * 소셜 회원가입 타입선언
 */
interface ISocialFormInput {
  email: string;
  name: string;
  certification: string;
  isFourteen: boolean;
  termsOfUse: boolean;
  privacyPolicy: boolean;
  receiveNotification: boolean;
}

const SocialForm: FC = () => {
  const methods = useForm<ISocialFormInput>({
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      {/*  개인 정보*/}
      {/*  본인 인증*/}
      {/*  약관 동의*/}
    </FormProvider>
  );
};

export default SocialForm;
