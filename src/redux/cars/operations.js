import { createAsyncThunk } from "@reduxjs/toolkit";
import { carApi } from "../../config/carApi";

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (page, thunkApi) => {
    try {
      const { data } = await carApi.get("adverts", {
        params: {
          page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteThunk = createAsyncThunk(
  "cars/favorite",
  async (_, thunkApi) => {
    try {
      const { data } = await carApi.get("adverts");
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
      const { data } = await carApi.get("adverts", car);
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
      const { data } = await carApi.get(`adverts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
