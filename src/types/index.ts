// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

export type CompareFunction<T> = (a: T, b: T) => number;

export type Dictionary<T> = {
	[key: string]: T;
};