import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    course: dataReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
