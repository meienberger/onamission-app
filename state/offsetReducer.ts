import { newRidgeState } from "react-ridge-state";
import {
  OFFSET_SECTIONS,
  OFFSET_TYPE_ENERGY,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
  OFFSET_TYPE_MOBILITY,
} from "../constants/CoreConstants";
import { StateWithValue, OffsetState } from "../core/interfaces";
import { onSet } from "./state-helpers";

export const OFFSET_REDUCER_KEY = "OFFSET_REDUCER_KEY";

const initialState: OffsetState = {
  [OFFSET_TYPE_HOUSEHOLD]: {
    value: 0,
  },
  [OFFSET_TYPE_ENERGY]: {
    value: 0,
  },
  [OFFSET_TYPE_LEISURE]: {
    value: 0,
    longFlights: 1,
    shortFlights: 1,
  },
  [OFFSET_TYPE_MOBILITY]: {
    value: 0,
  },
};

export const offsetReducer: StateWithValue<OffsetState> = newRidgeState(
  initialState,
  { onSet: () => onSet(OFFSET_REDUCER_KEY, offsetReducer.get()) }
);
