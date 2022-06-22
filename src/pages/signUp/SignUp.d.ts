import { UseFormSetValue } from "react-hook-form";

export interface ISignUpFormInputs {
  termsOfUse: boolean;
  privacyPolicy: boolean;
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export type IPolicyInputs = Pick<IPolicyInputs, "termsOfUse" | "privacyPolicy">;
export type IPolicyKey = "termsOfUse" | "privacyPolicy";

export interface PolicyDialogProps<TFieldValues> {
  name: string;
  keyName: IPolicyKey;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface ICertificationFormInput {
  countryNumber: number;
  telNumber: string;
  certNumber?: string;
}
