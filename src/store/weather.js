import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    temprature: 25,
    brief: 'Sunny',
}

const tempratureSlice = createSlice({
    name: 'temprature',
    initialState,
    reducers: {
        setTemprature: (state, action) => {
            state.temprature = action.payload;
        },
        setBrief: (state, action) => {
            state.brief = action.payload;
        }
    },
});

export const { setTemprature, setBrief } = tempratureSlice.actions;

export default tempratureSlice.reducer;