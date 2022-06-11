import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


function fetchCount(amount = 1) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: amount }), 2000)
    );
}

export const incrementAsync = createAsyncThunk(
    'fetchCount',
    async (amount, delay) => {
        const response = await fetchCount(amount, delay);
        return response.data;
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle',
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;
// export const selectStatus = (state) => state.counter.status;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
    // const currentValue = selectCount(getState());
    const currentValue = getState().counter.value
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
};

export default counterSlice.reducer;