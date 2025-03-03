// src/app/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "@/services/api";
import sharedSlice from "./SharedSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  sharedSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
