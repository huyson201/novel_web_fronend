import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@src/models";

export interface BookState {
    loading?: boolean,
    book?: Book,
    error?: string
}

const initialState: BookState = {
    loading: false,
}

const bookSlice = createSlice({
    initialState,
    name: 'bookSlice',
    reducers: {
        fetchBook: (state) => {
            state.loading = true
        },
        fetchBookSuccess: (state, actions: PayloadAction<Book>) => {
            state.loading = false
            state.book = actions.payload
        },
        fetchBookFail: (state) => {
            state.loading = false
        }
    }
})

export default bookSlice
export const { fetchBook, fetchBookSuccess, fetchBookFail } = bookSlice.actions