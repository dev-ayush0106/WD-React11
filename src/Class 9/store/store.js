import { configureStore } from '@reduxjs/toolkit'
import { CounterSlicer } from '../slicer/slicer'

export const store = configureStore({
  reducer: {
    counter:CounterSlicer.reducer
  },
})