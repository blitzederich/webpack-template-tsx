// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { quickSort } from './quickSort';

test('sort [9,1,8,2,7,3,6,4,5] to equal [1,2,3,4,5,6,7,8,9]', () => {
	const actual = [9,1,8,2,7,3,6,4,5];
	const expected = [1,2,3,4,5,6,7,8,9];

	quickSort(actual, 0, actual.length - 1, (a, b) => a - b);

	expect(actual).toStrictEqual(expected);
});