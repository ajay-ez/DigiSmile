import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Toast {
  id: any;
  message: string;
  status: "success" | "error";
}
interface SharedSliceState {
  headerStatus: boolean;
  sidebarStatus: boolean;
  toast: Toast[];
}

interface sharedSliceInterface {
  sharedSlice: SharedSliceState;
}

const initialState = {
  toast: [] as Toast[],
  headerStatus: false,
  sidebarStatus: false
};

interface ToastInterface {
  message: string;
  status: "success" | "error";
  time?: number;
}

export const showToastWithTimeout = createAsyncThunk(
  "sharedSlice/showToastWithTimeout",
  async ({ message, status, time }: ToastInterface, thunkAPI) => {
    const id = Date.now().toString();
    thunkAPI.dispatch(sharedSlice.actions.showToast({ message, status, id }));
    setTimeout(() => {
      thunkAPI.dispatch(sharedSlice.actions.hideToast(id));
    }, time || 3000);
  }
);

const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState,
  reducers: {
    toggleHeader: (state, action) => {
      state.headerStatus = action.payload;
    },
    showToast: (state, action) => {
      state.toast.push({
        id: action.payload.id,
        message: action.payload.message,
        status: action.payload.status
      });
    },
    hideToast: (state, action) => {
      state.toast = state.toast.filter((toast: any) => {
        return toast.id !== action.payload;
      });
    },
    toggleSideBar: (state, action) => {
      state.sidebarStatus = action.payload;
    }
  }
});

export const { toggleHeader, showToast, toggleSideBar } = sharedSlice.actions;

export const getHeaderStatus = (state: sharedSliceInterface) =>
  state.sharedSlice.headerStatus;
export const getToasters = (state: sharedSliceInterface) =>
  state.sharedSlice.toast;
export const getSidebarStatus = (state: sharedSliceInterface) =>
  state.sharedSlice.sidebarStatus;

export default sharedSlice.reducer;
