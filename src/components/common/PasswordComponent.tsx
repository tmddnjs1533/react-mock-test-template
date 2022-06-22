import React, { forwardRef, FC, useCallback, useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
interface PasswordComponentProps {
  name: string;
  label?: string;
  id?: string;
}
export type Ref = HTMLInputElement;
const PasswordComponent = forwardRef<Ref, PasswordComponentProps>(
  ({ name, label, id, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const {
      control,
      formState: { errors },
    } = useFormContext();
    const handleClickShowPassword = useCallback(() => {
      setShowPassword((prevState) => !prevState);
    }, []);
    return (
      <FormControl variant="standard" fullWidth {...rest} ref={ref}>
        {label && (
          <InputLabel htmlFor={id ?? name} error={!!errors.password}>
            {label}
          </InputLabel>
        )}
        <Controller
          render={({ field }) => (
            <Input
              fullWidth
              id={id ?? name}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={`${label} 표시`}
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...field}
              error={!!errors[name]}
            />
          )}
          name={name}
          control={control}
        />
        {errors[name] && (
          <FormHelperText error>{errors[name]?.message}</FormHelperText>
        )}
      </FormControl>
    );
  }
);

export default PasswordComponent;
