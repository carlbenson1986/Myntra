import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACTION } from "next/dist/client/components/app-router-headers";

type BagState={
    bag:Array<Object>;
    totalAmount:number;
}

const initialState ={
    bag:[{}],
    totalAmount:0
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
        },
        addPrice:(state,action)=>{
            state.totalAmount += action.payload;
        }

    }
})

export const {addToBag,removeFromBag,addPrice,emptyBag} = slice.actions
export default slice.reducer;

