import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/user/loginSlice'
import registerReducer from '../features/user/registerSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch