import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Components/Reducer/mediaSlice";

const store = configureStore({
  reducer: {
    users: reducer
  }
})

export default store;