import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const CartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((el) => el.id !== action.payload)
        },
        addToQty: (state, action) => {
            let element = state.find((el) => el.id === action.payload);
            element.quantity+=1
            state=[...state,element]
        },
        incCount:(state,action)=>{
            let item=state.find((el)=>el.id===action.payload)
            if(item){
                item.quantity+=1
            }
        },
        decCount:(state,action)=>{
            let item=state.find((el)=>el.id===action.payload)
            if(item){
                item.quantity-=1
            }
        }
    }
})

export const { add, remove, addToQty, incCount, decCount } = CartSlicer.actions
export default CartSlicer.reducer