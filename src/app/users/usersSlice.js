const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    user: "Penulis 1",
    userId: 1,
  },
  {
    id: 2,
    user: "Penulis 2",
    userId: 2,
  },
];

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default users.reducer;
