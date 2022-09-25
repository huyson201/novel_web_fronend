import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from '@src/models';
export interface AuthState {
    loading: boolean,
    isLogged: boolean
    authProfile?: Auth,
    error?: string
}

const initialState: AuthState = {
    loading: false,
    isLogged: false,
    authProfile: undefined,
    error: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuth: (state) => {
            state.loading = true
        },
        fetchAuthSuccess: (state, action: PayloadAction<Auth>) => {
            state.isLogged = false
            state.authProfile = action.payload
        },
        fetchAuthFail: (state) => {
            state.isLogged = false
        },
        signIn: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action: PayloadAction<Auth>) => {
            state.loading = false
            state.authProfile = action.payload
        },
        signInFail: (state) => {
            state.loading = false
        },
        login: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action: PayloadAction<Auth>) => {
            state.loading = false
            state.authProfile = action.payload
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
export const { signIn, signInSuccess, signInFail, login, loginSuccess, loginFail, logout, fetchAuth, fetchAuthSuccess, fetchAuthFail } = authSlice.actions

