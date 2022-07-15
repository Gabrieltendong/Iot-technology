import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/user";
import { RootState } from "../../app/store";

const initialState = {
    status: 'idle',
    data: {},
    error: null
}

export const auth = createAsyncThunk('user/login', login)

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(auth.pending, (state, {payload}) => {
                state.status = 'loading'
            })
            .addCase(auth.fulfilled, (state, {payload}) => {
                
                if(payload.error){
                    state.status = 'failed'
                    state.error = payload.message
                }else{
                    state.status = "succeeded"
                    state.data = payload
                    state.error = null
                }
            })
    }
})

export const loginSelector = (state: RootState) => state.login

export default loginSlice.reducer