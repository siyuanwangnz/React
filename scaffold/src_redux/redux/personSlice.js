import { createSlice } from '@reduxjs/toolkit';

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        personList: [{ id: '001', name: 'tom', age: 18 }]
    },
    reducers: {
        add: (state, action) => {
            state.personList = [action.payload, ...state.personList];
        },
    },
})

export const { add } = personSlice.actions;

// export const selectPersonList = (state) => state.person.personList;

export default personSlice.reducer;