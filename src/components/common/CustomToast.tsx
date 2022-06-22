import { AlertTitle, IconButton, Snackbar, styled } from "@mui/material";
import React, { FC, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { toastState } from "redux/store";
import { setToastHide } from "redux/toastSlice";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const StyledAlert = styled(MuiAlert)`
  background-color: #fff;
  border: 0 none;
  border-left: 15px solid
    ${({ theme, severity = "success" }) => theme.palette[severity].main};
  border-radius: 9px;
  height: 75px;
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <StyledAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

const CustomToast: FC = () => {
  const toast = useAppSelector(toastState);
  const dispatch = useAppDispatch();
  const handleClose = useCallback(() => {
    dispatch(setToastHide());
  }, [dispatch]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        /* autoHideDuration={3000}*/
        open={toast.show}
        onClose={handleClose}
        key={toast.status}
      >
        <Alert
          onClose={handleClose}
          severity={toast.status}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <AlertTitle>{String(toast.status).toUpperCase()}</AlertTitle>
          정상적으로 처리되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomToast;
