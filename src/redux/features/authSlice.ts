import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from '@src/models';
export interface AuthState {
    loading: boolean,
    isLogged: boolean
    authProfile?: Auth,
}

const initialState: AuthState = {
    loading: false,
    isLogged: false,
    authProfile: undefined,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.loading = true
        },
        signInSuccess: (state, payload: PayloadAction<Auth>) => {
            state.loading = false
            state.authProfile = payload.payload
        },
        signInFail: (state) => {
            state.loading = false
        },
        login: (state) => {
            state.loading = true
        },
        loginSuccess: (state, payload: PayloadAction<Auth>) => {
            state.loading = false
            state.authProfile = payload.payload
            state.isLogged = true
        },
        loginFail: (state) => {
            state.loading = false
        },
        logout: (state) => {
            state.authProfile = undefined
            state.loading = false
            state.isLogged = false
        }
    }


})
export default authSlice
export const { signIn, signInSuccess, signInFail, login, loginSuccess, loginFail, logout } = authSlice.actions

