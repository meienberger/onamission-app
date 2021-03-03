import { newRidgeState } from 'react-ridge-state';
import {
  COMMUTE_TYPE_BIKE,
  FOOD_TYPE_AVERAGE_MEAT,
  INSULATION_TYPE_MEDIUM,
  OFFSET_SECTIONS,
  OFFSET_TYPE_ENERGY,
  OFFSET_TYPE_FOOD,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
  OFFSET_TYPE_MOBILITY,
  OFFSET_TYPE_SHOPPING,
  SHOPPING_TYPE_NECESSARY,
} from '../constants/CoreConstants';
import { StateWithValue, OffsetState } from '../core/interfaces';
import { onSet } from './state-helpers';

export const OFFSET_REDUCER_KEY = 'OFFSET_REDUCER_KEY';

const initialState: OffsetState = {
  [OFFSET_TYPE_HOUSEHOLD]: {
    value: 0,
  },
  [OFFSET_TYPE_ENERGY]: {
    value: 0,
    surface: 0,
    renewable: null,
    insulation: INSULATION_TYPE_MEDIUM,
  },
  [OFFSET_TYPE_LEISURE]: {
    value: 0,
    longFlights: 1,
    shortFlights: 1,
  },
  [OFFSET_TYPE_MOBILITY]: {
    value: 0,
    kilometers: 0,
    commuteType: COMMUTE_TYPE_BIKE,
  },
  [OFFSET_TYPE_FOOD]: {
    value: 0,
    foodType: FOOD_TYPE_AVERAGE_MEAT,
  },
  [OFFSET_TYPE_SHOPPING]: {
    value: 0,
    shoppingType: SHOPPING_TYPE_NECESSARY,
  },
};

export const offsetReducer: StateWithValue<OffsetState> = newRidgeState(
  initialState,
  { onSet: () => onSet(OFFSET_REDUCER_KEY, offsetReducer.get()) }
);
