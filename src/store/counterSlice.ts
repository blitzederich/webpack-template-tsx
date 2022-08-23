// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export type CounterState = {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter.value;
export const counterReducer = counterSlice.reducer;