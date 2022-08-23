// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
