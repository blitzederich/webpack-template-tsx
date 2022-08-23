// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { FC } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { increment, selectCounter } from 'store/counterSlice';
import { Button } from 'components/Button/Button';

export const App: FC = () => {
	const dispatch = useAppDispatch();
	const counter = useAppSelector(selectCounter);

	const handleClick = () => dispatch(increment(1));

	return (
		<>
			<h1>Hello, World!</h1>
			<hr />
			counter: <b>{counter}</b>
			<br/>
			<Button onClick={handleClick}>Increment</Button>
		</>
	);
};
