import React, { FC, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller, useFormContext } from "react-hook-form";
import { IPolicyInputs, IPolicyKey, PolicyDialogProps } from "../SignUp";

interface PolicyProps {
  handleNext: () => void;
}

const policies: { id: IPolicyKey; label: string }[] = [
  {
    id: "termsOfUse",
    label: "이용약관",
  },
  {
    id: "privacyPolicy",
    label: "개인정보 처리방침",
  },
];

const Policy: FC<PolicyProps> = ({ handleNext }) => {
  const { control, watch, setValue } = useFormContext();

  const handleAllCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValue("termsOfUse", event.target.checked);
      setValue("privacyPolicy", event.target.checked);
    },
    [setValue]
  );
  const allChecked = watch("termsOfUse") && watch("privacyPolicy");
  const indeterminate = watch("termsOfUse") !== watch("privacyPolicy");
  return (
    <>
      <FormControlLabel
        label="모두 동의"
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={handleAllCheck}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {policies.map((policy) => (
          <Box
            key={policy.id}
            sx={{
              display: "flex",
              justifyContent:
                policy.id === "termsOfUse" ? "space-between" : undefined,
            }}
          >
            <FormControlLabel
              label={policy.label}
              control={
                <Controller
                  name={policy.id}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id={policy.id}
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                      color="primary"
                    />
                  )}
                />
              }
            />
            <PolicyDialog
              keyName={policy.id}
              name={policy.label}
              setValue={setValue}
            />
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1 }}
        disabled={!allChecked}
      >
        동의하고 계속하기
      </Button>
    </>
  );
};

export default Policy;

const PolicyDialog: FC<PolicyDialogProps<IPolicyInputs>> = ({
  name,
  keyName,
  setValue,
}) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleCheck = useCallback(() => {
    setValue(keyName, true);
    setOpen(false);
  }, [setValue, keyName]);
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Button onClick={handleClickOpen("body")}>전문보기</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소하기</Button>
          <Button onClick={handleCheck}>동의하기</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
