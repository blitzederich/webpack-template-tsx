// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { CompareFunction } from 'types';
import { swap } from './swap';

export const partition = <T>(arr: T[], left: number, right: number, compareFn: CompareFunction<T>) => {
	const pivot = arr[right];
	let i = left - 1;

	for (let j = left; j < right; j++) {
		if (compareFn(arr[j], pivot) <= 0) {
			swap(arr, ++i, j);
		}
	}
	swap(arr, ++i, right);

	return i;
};

export const quickSort = <T>(arr: T[], left: number, right: number, compareFn: CompareFunction<T>) => {
	if (left < right) {
		const p = partition(arr, left, right, compareFn);
		quickSort(arr, left, p - 1, compareFn);
		quickSort(arr, p + 1, right, compareFn);
	}
};