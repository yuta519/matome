import '../../../../vendor/deps/reduxjs_toolkit.js';
import { fetchCount } from './counterAPI.ts.js';
import { createAsyncThunk, createSlice } from '../../../../vendor/deps/chunk-R2B5IURW.js';

const initialState = {
  value: 0,
  status: "idle"
};
const incrementAsync = createAsyncThunk("counter/fetchCount", async (amount) => {
  const response = await fetchCount(amount);
  return response.data;
});
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = "loading";
    }).addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.value += action.payload;
    }).addCase(incrementAsync.rejected, (state) => {
      state.status = "failed";
    });
  }
});
const { increment, decrement, incrementByAmount } = counterSlice.actions;
const selectCount = (state) => state.counter.value;
const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};
var contentFeaturesCounterCounterSlice_tsFYvc3 = counterSlice.reducer;

export { counterSlice, decrement, contentFeaturesCounterCounterSlice_tsFYvc3 as default, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount };
