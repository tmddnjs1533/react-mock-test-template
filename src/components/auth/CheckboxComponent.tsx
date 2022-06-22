import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, styled } from "@mui/material";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
const CustomFormControlLabel = styled(MuiFormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.8rem",
  },
});

interface CheckboxComponentProps {
  name: string;
  label: string;
}

const CheckboxComponent: FC<CheckboxComponentProps> = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <CustomFormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox id={name} {...field} color="primary" />
          )}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;
