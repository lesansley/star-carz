import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchPeople = createAsyncThunk("people/fetch", async (...args) => {
  const query = args[0]?.search
    ? `?${new URLSearchParams(args[0]).toString()}`
    : "";
  const response = await client.get(`people/${query}`);
  return response.data;
});

export const fetchNext = createAsyncThunk("people/fetchNext", async (page) => {
  const url = new URL(page);
  const query = url.search;

  const response = await client.get(`people/${query}`);
  return response.data;
});

const initialState = {
  data: [],
  hasNextPage: false,
  isFetching: false,
  status: "idle",
  error: null,
  nextPage: null,
};

const handleFulfilled = (state, action) => {
  state.data.push(...action.payload.results);
  state.hasNextPage = action.payload.next ? true : false;
  state.isFetching = false;
  state.status = "fulfilled";
  state.error = null;
  state.nextPage = action.payload.next;
};

const handlePending = (state) => {
  state.status = "pending";
  state.isFetching = true;
};

const handleRejected = (state, action) => {
  state.isFetching = false;
  state.status = "rejected";
  state.error = action.error.message;
  console.error(`Error: ${state.error}`);
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.hasNextPage = false;
      state.isFetching = false;
      state.status = "idle";
      state.error = null;
      state.nextPage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchNext.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchNext.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNext.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const { reset } = peopleSlice.actions;

export const selectPeople = (state) => state.people;

export default peopleSlice.reducer;
