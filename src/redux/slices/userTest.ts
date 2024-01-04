import { createSlice } from "@reduxjs/toolkit";

const userTest = createSlice({
  name: "test",
  initialState: {
    testId: "",
  },
  reducers: {
    testId: (state, action) => {
      state.testId = action.payload;
    },
  },
});
export const { testId } = userTest.actions;
export default userTest.reducer;
