// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { merge } from './merge';

test('merge [2,4,6] and [1,3,5] to equal [1,2,3,4,5,6]', () => {
	expect(merge([2,4,6], [1,3,5], (a, b) => a - b)).toStrictEqual([1,2,3,4,5,6]);
});

test('merge [1,2,3] and [4,5,6] to equal [1,2,3,4,5,6]', () => {
	expect(merge([1,2,3], [4,5,6], (a, b) => a - b)).toStrictEqual([1,2,3,4,5,6]);
});