import { Box, styled } from "@mui/material";

export const SignupPaper = styled(Box)`
  margin: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(4)}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
