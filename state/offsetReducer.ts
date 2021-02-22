import { newRidgeState } from "react-ridge-state";
import { StateWithValue, OffsetState } from "../core/interfaces";
import { onSet } from "./state-helpers";

export const OFFSET_REDUCER_KEY = "OFFSET_REDUCER_KEY";

const initialState = {};

export const offsetReducer: StateWithValue<OffsetState> = newRidgeState(
  initialState,
  { onSet: () => onSet(OFFSET_REDUCER_KEY, offsetReducer.get()) }
);
