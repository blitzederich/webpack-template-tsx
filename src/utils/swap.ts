// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

export const swap = <T>(arr: T[], a: number, b: number) => {
	[arr[a], arr[b]] = [arr[b], arr[a]];
};