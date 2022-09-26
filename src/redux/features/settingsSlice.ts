import { Settings, themeType } from '@src/models';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: Settings = { theme: 'light', fontSize: 16 }



const settingsSlice = createSlice({
    initialState,
    name: 'settings',
    reducers: {
        updateTheme: (state, actions: PayloadAction<themeType>) => {
            state.theme = actions.payload
        },
        increaseFontSize: (state) => {
            if (state.fontSize < 32) state.fontSize += 2


        },
        decreaseFontSize: (state) => {
            if (state.fontSize > 10) state.fontSize -= 2
        }

    }

})

export default settingsSlice
export const { updateTheme, increaseFontSize, decreaseFontSize } = settingsSlice.actions