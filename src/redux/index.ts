import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './features/authSlice'
import bookcaseSlice from './features/bookcase'
import bookSlice from './features/bookSlice'
import settingsSlice from './features/settingsSlice'
const persistConfig = {
    key: 'root',
    storage,
}


const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)
const persistedSettingsReducer = persistReducer({ key: 'settings', storage }, settingsSlice.reducer)
const reducer = combineReducers({
    auth: persistedAuthReducer,
    bookcase: bookcaseSlice.reducer,
    book: bookSlice.reducer,
    settings: persistedSettingsReducer
})

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions: ['persist/PERSIST'] } })
})

export default store
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector