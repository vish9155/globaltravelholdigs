import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export let flightOffer = createAsyncThunk(
  "offer/flight",
  async (offerId, { rejectWithValue }) => {
    try {
      if (!offerId) throw new Error("Offer ID not found");
      console.log(offerId)
      let res = await fetch(
        `https://globaltravel-holdings.com/api/get-offers/${offerId}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await res.json();

      console.log("API RESPONSE:", data);

      return data.data; 
    } catch (error) {
        // console.log(error)
      return rejectWithValue(error.message);
    }
  }
);

let initialState = {
  items: null,
  error: null,
  loading: false,
};

let offerSlice = createSlice({
  name: "offerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(flightOffer.pending, (state) => {
        state.loading = true; 
        state.error = null;
      })
      .addCase(flightOffer.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false; 
      })
      .addCase(flightOffer.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default offerSlice.reducer;