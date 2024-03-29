// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
  