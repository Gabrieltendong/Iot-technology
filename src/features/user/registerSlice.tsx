import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../../api/user";
import { RootState } from "../../app/store";

const initialState = {
    status: 'idle',
    data: {},
    error: null
}

export const signUp = createAsyncThunk('user/register', register)

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        clearData: (state) => {
            state.status= 'idle'
            state.data= {}
            state.error= null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signUp.pending, (state, {payload}) => {
                state.status = 'loading'
            })
            .addCase(signUp.fulfilled, (state, {payload}) => {
                if(payload.message){
                    state.status = 'failed'
                    state.error = payload.message
                }
                if(payload.token){
                    state.status = "succeeded"
                    state.data = payload
                    state.error = null
                }
            })
    }
})

export const { clearData } = registerSlice.actions
export const registerSelector = (state: RootState) => state.register

export default registerSlice.reducer