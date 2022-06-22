import React, { FC, useCallback } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
} from "@mui/material";
import { PolicyBox } from "../policy/style";
import { ChevronRight } from "@mui/icons-material";

const Policy: FC = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const label_all_checked = "모두 동의합니다.";
  const label_is_fourteen = "만 14세 이상입니다.";
  const label_terms_of_use = "서비스 이용약관에 동의합니다";
  const label_privacy_policy = "개인정보 수집/이용에 동의합니다";
  const label_receive_notification = "이벤트 및 혜택 알림 수신에 동의합니다";
  const allChecked =
    watch("isFourteen") &&
    watch("termsOfUse") &&
    watch("privacyPolicy") &&
    watch("receiveNotification");
  const handleAllCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValue("isFourteen", event.target.checked);
      setValue("termsOfUse", event.target.checked);
      setValue("privacyPolicy", event.target.checked);
      setValue("receiveNotification", event.target.checked);
    },
    [setValue]
  );
  return (
    <Box>
      <FormControlLabel
        label={label_all_checked}
        control={<Checkbox checked={allChecked} onChange={handleAllCheck} />}
      />
      <Divider />
      <PolicyBox>
        <FormControl required error={!!errors.isFourteen}>
          <FormControlLabel
            label={<FormLabel>{label_is_fourteen}</FormLabel>}
            control={
              <Controller
                name={"isFourteen"}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={"isFourteen"}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                    color="primary"
                  />
                )}
              />
            }
          />
        </FormControl>
      </PolicyBox>
      <PolicyBox>
        <FormControl required error={!!errors.termsOfUse}>
          <FormControlLabel
            label={<FormLabel>{label_terms_of_use}</FormLabel>}
            control={
              <Controller
                name={"termsOfUse"}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={"termsOfUse"}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                    color="primary"
                  />
                )}
              />
            }
          />
        </FormControl>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </PolicyBox>
      <PolicyBox>
        <FormControl required error={!!errors.privacyPolicy}>
          <FormControlLabel
            label={<FormLabel>{label_privacy_policy}</FormLabel>}
            control={
              <Controller
                name={"privacyPolicy"}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={"privacyPolicy"}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                    color="primary"
                  />
                )}
              />
            }
          />
        </FormControl>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </PolicyBox>
      <PolicyBox>
        <FormControl>
          <FormControlLabel
            label={<FormLabel>{label_receive_notification}</FormLabel>}
            control={
              <Controller
                name={"receiveNotification"}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={"receiveNotification"}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                    color="primary"
                  />
                )}
              />
            }
          />
        </FormControl>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </PolicyBox>
    </Box>
  );
};

export default Policy;
