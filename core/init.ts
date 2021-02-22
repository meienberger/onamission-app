import * as Font from "expo-font";
import { reducers } from "../state";
import { hydrateStates } from "../state/state-helpers";

export default async () => {
  try {
    // Hydrate reducers
    await hydrateStates(reducers);
  } catch (e) {
    console.error(e);
  }
};
