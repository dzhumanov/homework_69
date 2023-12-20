import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { RootState } from "./store";
import { ShowData, ShowInfo } from "../types";

export const fetchShows = createAsyncThunk<
  ShowData[],
  string,
  { state: RootState }
>("app/fetch", async (search, _thunkAPI) => {
  try {
    const response = await axiosApi.get(`search/shows?q=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});

export const fetchInfo = createAsyncThunk<
  ShowInfo,
  number,
  { state: RootState }
>("app/fetchInfo", async (id, _thunkAPI) => {
  try {
    const response = await axiosApi.get(`shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});
