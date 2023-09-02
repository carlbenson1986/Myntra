
import {configureStore} from "@reduxjs/toolkit"
import reducers from "./features/manageBag"
import {useSelector, TypedUseSelectorHook} from "react-redux";

export  const store = configureStore({
    reducer:{
        reducers
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector; 