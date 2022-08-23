// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

export const useAppDispatch = () => useDispatch<AppDispatch>();