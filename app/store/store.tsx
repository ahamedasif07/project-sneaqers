import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice"; // ফাইলের নাম ঠিক আছে কিনা চেক করুন

export const store = configureStore({
  reducer: {
    // এখানে apiSlice.reducerPath এর মান হবে "api" (যা স্লাইসে ডিফাইন করেছেন)
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
