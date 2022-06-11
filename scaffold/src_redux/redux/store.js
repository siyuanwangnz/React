import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import personReducer from './personSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        person: personReducer,
    },
});