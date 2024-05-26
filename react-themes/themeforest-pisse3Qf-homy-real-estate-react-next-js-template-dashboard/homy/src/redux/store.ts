import { configureStore } from '@reduxjs/toolkit'
import propertySlice from './features/propertySlice'

const store = configureStore({
   reducer: {
      properties: propertySlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
})

export default store;