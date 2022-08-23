// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { CompareFunction } from 'types';

export const merge = <T>(a: T[], b: T[], compareFn: CompareFunction<T>) => {
	const result = [];

	let i = 0,
		j = 0;
	while (i < a.length && j < b.length) {
		if (compareFn(a[i], b[j]) < 0) {
			result.push(a[i++]);
		} else {
			result.push(b[j++]);
		}
	}

	if (i < a.length) result.push(...a.slice(i));
	if (j < b.length) result.push(...b.slice(j));

	return result;
};