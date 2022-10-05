import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterSlice'
import CartReducer from  './CartSlice'


 const store = configureStore({
  reducer: {
    cart : CartReducer,
  },
});

export default  store;
