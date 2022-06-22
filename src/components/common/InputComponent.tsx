import React, { forwardRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Box, TextField } from "@mui/material";
interface InputComponentProps {
  name: string;
  label?: string;
}
export type Ref = HTMLInputElement;
const InputComponent = forwardRef<Ref, InputComponentProps>(
  ({ name, label, ...rest }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <Box sx={{ width: "100%" }} ref={ref} {...rest}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              label={label}
              variant="standard"
              {...field}
              error={!!errors[name]}
              helperText={errors[name]?.message}
              sx={{
                mb: 1,
              }}
            />
          )}
        />
      </Box>
    );
  }
);

export default InputComponent;
