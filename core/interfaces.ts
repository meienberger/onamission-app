export interface Project {
  image: string;
  images?: string[];
  location: string;
  title: string;
  description: string;
  geoJson?: number[][][];
}

export interface StateWithValue<T> {
  use: () => [
    T,
    (newState: T | ((prev: T) => T), ac?: (newState: T) => any) => any
  ];
  useValue: () => T;
  get: () => T;
  useSelector: <TSelected = unknown>(
    selector: (state: T) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ) => TSelected;
  set: (
    newState: T | ((prev: T) => T),
    ac?: (newState: T) => any,
    ca?: (ns: T) => any
  ) => any;
  reset: () => any;
}

export type RidgeReducer<T> = {
  setter: StateWithValue<T>;
  key: string;
};

export type OffsetState = {};
