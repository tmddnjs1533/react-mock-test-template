import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
  email: string;
  userId: string;
  profileUrl?: string;
  position?: string;
  department?: string;
}

const initialState: IUser = {
  name: "",
  email: "",
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      reducer(state, action: PayloadAction<IUser>) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.userId = action.payload.userId;
        state.profileUrl = action.payload.profileUrl;
        state.position = action.payload.position;
        state.department = action.payload.department;
      },
      prepare({
        name,
        email,
        userId,
        profileUrl,
        position,
        department,
      }: IUser) {
        return {
          payload: { name, email, userId, profileUrl, position, department },
        };
      },
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.userId = "";
      state.profileUrl = undefined;
      state.position = undefined;
      state.department = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
