import { configureStore } from "@reduxjs/toolkit";
import { CartSlicer } from "../cartSlicer/cartSlicer";

export const store=configureStore({
    reducer:{
        cart:CartSlicer.reducer
    }
})