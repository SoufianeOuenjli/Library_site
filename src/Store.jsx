import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./BookSlice";

export const store = configureStore({
    reducer: {
        books: bookSlice,
    },
});

export default store