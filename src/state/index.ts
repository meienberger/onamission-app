import { RidgeReducer } from '../core/interfaces';
import { offsetReducer, OFFSET_REDUCER_KEY } from './offsetReducer';

// Reducers to persist
export const reducers: RidgeReducer<any>[] = [
  { setter: offsetReducer, key: OFFSET_REDUCER_KEY },
];
