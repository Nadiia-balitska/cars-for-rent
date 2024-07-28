import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addFavoriteCarThunk,
  fetchCarsThunk,
  removeFavoriteCarThunk,
} from "./operations";
import { selectNameFilter } from "../filters/slice";

const initialState = {
  page: 1,
  cars: [],
  loading: false,
  error: null,
  favorites: [],
  totalPage: null,
  loadMore: true,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,

  reducers: {
    like: (state, action) => {
      const car = state.favorites.some(
        (favCar) => favCar.id === action.payload.id
      );
      if (car) {
        state.favorites = state.favorites.filter(
          (favCar) => favCar.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    nextPage: (state) => {
      state.page += 1;
    },
    reset: (state) => {
      state.cars = [];
      state.page = 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        // state.cars = [...state.cars, ...action.payload.cars];
        // state.totalPage = action.payload.totalPage;
        state.loading = false;
        // state.loadMore = state.page < state.totalPage;
        if (action.payload.length > 0) {
          state.cars =
            state.page === 1
              ? action.payload
              : [...state.cars, ...action.payload];
          state.loadMore = action.payload.length === 12;
        } else {
          state.loadMore = false;
        }
      })
      .addCase(addFavoriteCarThunk.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.loading = false;
      })
      .addCase(removeFavoriteCarThunk.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.pending,
          addFavoriteCarThunk.pending,
          removeFavoriteCarThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.rejected,
          addFavoriteCarThunk.rejected,
          removeFavoriteCarThunk.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const carsReducer = carsSlice.reducer;
export const { reset, nextPage, like } = carsSlice.actions;

export const selectCars = (state) => state.cars.cars;
export const selectFavorite = (state) => state.cars.favorites;
export const selectPage = (state) => state.cars.page;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectTotalPage = (state) => state.cars.totalPage;
export const selectLoadMore = (state) => state.cars.loadMore;

export const selectFilteredMemo = createSelector(
  [selectCars, selectNameFilter],
  (cars, filter) => {
    return cars.filter((car) => {
      return (
        car.model.toLowerCase().includes(filter.toLowerCase()) ||
        car.make.toLowerCase().includes(filter.toLowerCase()) ||
        car.type.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
);
