import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BagState = {
  bag: Array<Object>;
  totalAmount: number;
};

const initialState = {
  bag: [{}],
  totalAmount: 0,
} as BagState;

export const slice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    emptyBag: () => {
      return initialState;
    },
    addToBag: (state, action: PayloadAction<object>) => {
      state.bag.push(action.payload);
    },
    removeFromBag: (state, action) => {
        const index = state.bag.findIndex((item:any) => item === action.payload.name);

        state.bag.splice(index, 1);
    },
    addPrice: (state, action) => {
      state.totalAmount += action.payload;
    },
    removePrice: (state, action) => {
      // if(action.payload = NaN) {
      //   state.totalAmount = 0;
      //   return}
      state.totalAmount -= action.payload;
    },
  },
});

export const { addToBag, removeFromBag, addPrice, removePrice, emptyBag } =
  slice.actions;
export default slice.reducer;
