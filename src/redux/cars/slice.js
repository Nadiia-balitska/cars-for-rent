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
};

const carsSlice = createSlice({
  name: "cars",
  initialState,

  selectors: {
    selectCars: (state) => state.cars,
    selectFavorite: (state) => state.favorites,
    selectPage: (state) => state.page,
    selectTotalPage: (state) => state.totalPage,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },

  reducers: {
    like: (state, action) => {
      const cars = state.cars.find((car) => car.id === action.payload);
      if (state.favorites.some((car) => car.id === cars)) {
        state.favorites = state.favorites.filter(
          (car) => car.id !== action.payload
        );
      } else {
        state.favorites.push(cars);
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
        state.cars = action.payload;
      })
      .addCase(addFavoriteCarThunk.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFavoriteCarThunk.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload
        );
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
          fetchCarsThunk.fulfilled,
          addFavoriteCarThunk.fulfilled,
          removeFavoriteCarThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
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

export const selectFilteredMemo = createSelector(
  [carsSlice.selectors.selectCars, selectNameFilter],
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

export const carsReducer = carsSlice.reducer;
export const { reset, nextPage, like } = carsSlice.actions;
export const {
  selectCar,
  selectFavorite,
  selectPage,
  selectLoading,
  selectError,
  selectTotalPage,
} = carsSlice.selectors;
