// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...restProps }) => {
	return (
		<button {...restProps}>
			{children}
		</button>
	);
};