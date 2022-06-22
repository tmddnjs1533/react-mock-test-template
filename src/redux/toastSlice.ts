import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";

export interface ToastContext {
  show: boolean;
  status?: AlertColor;
}

export type ToastOptionContext = Omit<ToastContext, "show">;

const initialState: ToastContext = {
  show: false,
  status: "success",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastShow: (state) => {
      state.show = true;
    },
    setToastHide: (state) => {
      state.show = false;
    },
    setToastStatus: {
      reducer(state, action: PayloadAction<ToastOptionContext>) {
        state.status = action.payload.status;
      },
      prepare({ status }: ToastOptionContext) {
        return {
          payload: { status },
        };
      },
    },
  },
});

export const { setToastShow, setToastHide, setToastStatus } =
  toastSlice.actions;
export default toastSlice.reducer;
