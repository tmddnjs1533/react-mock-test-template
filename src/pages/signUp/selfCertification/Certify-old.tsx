import React, {
  FC,
  useCallback,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
const schema = yup.object({
  certNumber: yup.string().matches(/\d{6}/, "형식에 맞지 않는 번호입니다."),
});
interface CertifyProps {
  isSended: boolean;
  setIsCertificated: Dispatch<SetStateAction<boolean>>;
}
interface ICertifyFormInput {
  certNumber?: string;
}
const CertifyOld: FC<CertifyProps> = ({ isSended, setIsCertificated }) => {
  const [isCertified, setIsCertified] = useState<string | undefined>(undefined);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICertifyFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      certNumber: "",
    },
  });
  const onCertificated = useCallback(
    (data) => {
      console.log("onCertificated", data);
      setIsCertified("성공적으로 인증되었습니다.");
      return setIsCertificated(true);
    },
    [setIsCertificated]
  );
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="certNumberLabel">인증번호</InputLabel>
        <Controller
          render={({ field }) => (
            <Input
              id="certNumber"
              {...field}
              error={!!errors.certNumber}
              disabled={!isSended}
            />
          )}
          name="certNumber"
          control={control}
        />
        {errors.certNumber && (
          <FormHelperText error>{errors.certNumber?.message}</FormHelperText>
        )}
        {isCertified && (
          <FormHelperText sx={{ color: "success.main" }}>
            {isCertified}
          </FormHelperText>
        )}
      </FormControl>
      <Button
        onClick={handleSubmit(onCertificated)}
        fullWidth
        variant="contained"
        disabled={!isSended || Boolean(isCertified)}
        sx={{ mt: 3, mb: 2 }}
      >
        인증
      </Button>
    </>
  );
};

export default CertifyOld;
