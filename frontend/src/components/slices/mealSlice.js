import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainIngredient: "",
  areaName: "",
  letter: "",
  isLoggedIn: false,
  currentUser: {},
  token: "",
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMainIngredient: (state, action) => {
      state.mainIngredient = action.payload;
    },
    setArea: (state, action) => {
      state.areaName = action.payload;
    },
    setLetter: (state, action) => {
      state.letter = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  setMainIngredient,
  setArea,
  setLetter,
  setIsLoggedIn,
  setCurrentUser,
  setToken,
} = mealSlice.actions;
export default mealSlice.reducer;
