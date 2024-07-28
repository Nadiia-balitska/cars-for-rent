import { createAsyncThunk } from "@reduxjs/toolkit";
import { carApi } from "../../config/carApi";

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchCatalogue",
  async ({ page }, thunkApi) => {
    try {
      const { data } = await carApi.get("/adverts", {
        params: {
          page,
          limit: 12,

          // orientation: "landscape",
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteThunk = createAsyncThunk(
  "cars/fetchFavorite",
  async (_, thunkApi) => {
    try {
      const { data } = await carApi.get("/adverts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteCarThunk = createAsyncThunk(
  "cars/add",
  async (car, thunkApi) => {
    try {
      const { data } = await carApi.post("/adverts", car);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteCarThunk = createAsyncThunk(
  "cars/remove",
  async (id, thunkApi) => {
    try {
      const { data } = await carApi.delete(`/adverts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
