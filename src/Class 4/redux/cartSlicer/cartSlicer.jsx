import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const CartSlicer=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        }
    }
})

export const{add}=CartSlicer.actions
export default CartSlicer.reducer