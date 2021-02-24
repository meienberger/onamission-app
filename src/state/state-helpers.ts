import debounce from 'lodash.debounce';
import Store from 'react-native-fs-store';
import { RidgeReducer } from '../core/interfaces';

const Storage = new Store('deevent');

/**
 * Persist the given data to the local file system
 * @param {String} key // The key
 * @param {Object} value // The value to persist
 */
export const onSet = debounce((key: string, value: any) => {
  try {
    Storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}, 2000);

/**
 * Hydrate all given states by looking into the local storage based on key
 * @param {[{ setter: function, key: String }]} reducers An array of ridge states to hydrate. Each entry should have a setter function and a key
 */
export const hydrateStates = async (
  reducers: RidgeReducer<any>[]
): Promise<void[]> => {
  return Promise.all(
    reducers.map(async ({ setter, key }) => {
      try {
        const value = await Storage.getItem(key);

        if (value) {
          setter.set(JSON.parse(value));
        }
      } catch (e) {
        // Storage is compromised
        Storage.clear();
        console.error(e);
      }
    })
  );
};
