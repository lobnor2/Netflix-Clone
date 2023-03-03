// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
