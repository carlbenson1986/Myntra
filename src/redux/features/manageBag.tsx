import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BagState={
    bag:Array<Object>;
}

const initialState ={
    bag:[{}],
}as BagState;

export const slice = createSlice({
    name:"bag",
    initialState,
    reducers:{
        emptyBag:()=>{
            return initialState;
        },
        addToBag:(state , action:PayloadAction<object>)=>{
            state.bag.push(action.payload);
        },
        removeFromBag:(state,action)=>{
            state.bag = state.bag.filter((item)=>{
                item !== action.payload
            })
        }
    }
})

export const {addToBag,removeFromBag,emptyBag} = slice.actions
export default slice.reducer;

