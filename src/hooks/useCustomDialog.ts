import { useAppDispatch } from "hooks/useRedux";
import {
  DialogTextContext,
  setHide,
  setMessage,
  setShow,
} from "redux/dialogSlice";
let resolveCallback: (x: unknown | boolean) => unknown | boolean;
const useCustomDialog = () => {
  const dispatch = useAppDispatch();

  const confirm = (textObj: DialogTextContext) => {
    dispatch(setShow());
    dispatch(setMessage(textObj));
    return new Promise((res) => {
      resolveCallback = res;
    });
  };
  const closeConfirm = () => {
    dispatch(setHide());
  };

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };
  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };
  return { confirm, onConfirm, onCancel };
};
export default useCustomDialog;
