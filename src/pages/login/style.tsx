import { Box, Button, styled } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

import { BaseSyntheticEvent } from "react";

export const LoginPaper = styled(Box)`
  margin: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(4)}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface LoginFormProps extends BoxProps {
  noValidate: boolean;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
export const LoginForm = styled(Box)<LoginFormProps>`
  margin-top: ${({ theme }) => theme.spacing(3)};
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WithCheckBoxLink = styled(Box)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WithTextLink = styled(Box)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorButton = styled(Button)({
  "&:disabled": {
    backgroundColor: "#D6D6D6",
  },
  "&:hover": {
    backgroundColor: "#FF0078",
  },
});
// export const CustomFormControlLabel = styled(MuiFormControlLabel)({
//   "& .MuiFormControlLabel-label": {
//     fontSize: "0.8rem",
//   },
// });
