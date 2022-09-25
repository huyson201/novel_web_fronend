import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { BookCase, DeleteBookCaseResponse } from "@src/models";

export interface BookcaseState {
    loading?: boolean,
    bookcase?: Array<BookCase>,
    error?: string
}

const initialState: BookcaseState = {
    loading: false,
    bookcase: []
}

const bookcaseSlice = createSlice({
    initialState,
    name: 'bookcase',
    reducers: {
        fetchBookcase: (state) => {
            state.loading = true
        },
        fetchBookcaseSuccess: (state, actions: PayloadAction<Array<BookCase>>) => {
            state.loading = false
            state.bookcase = actions.payload
        },
        fetchBookcaseFail: (state) => {
            state.loading = false
        },
        deleteBookcase: (state, actions: PayloadAction<DeleteBookCaseResponse>) => {
            if (!state.bookcase) return

            let index = state.bookcase?.findIndex(value => value.book.id === actions.payload.bookId)

            if (!index || index === -1) return

            let newBookcase = [...state.bookcase]
            newBookcase.splice(index, 1)
            state.bookcase = newBookcase
        }
    }
})
export default bookcaseSlice
export const { fetchBookcase, fetchBookcaseSuccess, fetchBookcaseFail, deleteBookcase } = bookcaseSlice.actions