import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFlights = createAsyncThunk(
  "flights/search",
  async (
    {
      payload,
      page = 1,
      limit = 20,
      filters = {}
    },
    { rejectWithValue }
  ) => {
    try {

      // QUERY PARAMS BANAAO
      const query = new URLSearchParams({
        page,
        limit,
        airlines: filters.airlines?.join(",") || "",
        stops: filters.stops?.join(",") || "",
        minPrice: filters.minPrice ?? 0,
        maxPrice: filters.maxPrice ?? 100000,
        cabin_class: filters.cabin_class?.join(",") || "",
        refundableOnly: filters.refundableOnly,
        wifiOnly: filters.wifiOnly,
        layovers:  filters.layovers?.join(",") || "",
        time: filters.time?.join(",") || "",
      });

      const resp = await fetch(
        `http://localhost:5000/api/flights?${query}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      const flightData = await resp.json();

      if (!resp.ok) {
        return rejectWithValue(
          flightData?.message || "Flight fetch failed"
        );
      }

      return flightData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  offers: [],
  pagination: null,
  filtersData: {
    cabinClasses: [],
    airlines: [],
  },
  loading: false,
  error: null,
};

const flightSlice = createSlice({
  name: "flight-search",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;

        state.offers =
          action.payload?.data?.offers || [];

        state.pagination =
          action.payload?.pagination || null;

        // SAVE FILTER DATA
        state.filtersData =
          action.payload?.filtersData || {
            cabinClasses: [],
            airlines: [],
          };
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default flightSlice.reducer;