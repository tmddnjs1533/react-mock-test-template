import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
} from "@mui/material";
import { useAppSelector } from "hooks/useRedux";
import { dialogState } from "redux/store";
import useCustomDialog from "../../hooks/useCustomDialog";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 528px;
    border-radius: 3px;
    box-shadow: ${({ theme }) => theme.shadows[10]};
  }
`;
const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
  padding: 30px 30px 20px;
`;

const StyledDialogContentText = styled(DialogContentText)`
  text-align: center;
  padding: 10px 15px;
`;

const StyledDialogActions = styled(DialogActions)`
  justify-content: center;
  padding-bottom: 30px;
`;

const StyledButton = styled(Button)`
  background-color: #505051;
  border-radius: 0;
  width: 120px;
  height: 45px;

  &:hover {
    background-color: rgba(80, 80, 81, 0.7);
  }
`;

const CustomDialog = () => {
  const dialog = useAppSelector(dialogState);
  const { onConfirm, onCancel } = useCustomDialog();
  return (
    <StyledDialog
      open={dialog.show}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      hideBackdrop
    >
      <StyledDialogTitle id="alert-dialog-title">
        {dialog.title}
      </StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText id="alert-dialog-description">
          {dialog.message}
        </StyledDialogContentText>
      </DialogContent>
      <StyledDialogActions>
        <StyledButton
          size="large"
          variant="contained"
          onClick={onConfirm}
          disableRipple
          disableElevation
          autoFocus
        >
          확인
        </StyledButton>
        <StyledButton
          size="large"
          disableRipple
          disableElevation
          variant="contained"
          onClick={onCancel}
        >
          취소
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default CustomDialog;
