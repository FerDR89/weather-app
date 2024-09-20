import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ILocation } from "../interfaces/location";

const initialState: ILocation = {
  lat: 0,
  lon: 0,
  cityName: "Buenos Aires",
};

export const userSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ILocation>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLocation } = userSlice.actions;
export const selectLocation = (state: RootState) => state.location;
export const locationReducer = userSlice.reducer;
