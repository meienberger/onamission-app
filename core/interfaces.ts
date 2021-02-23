import {
  OFFSET_TYPE_ENERGY,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
  OFFSET_TYPE_MOBILITY,
} from "../constants/CoreConstants";

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

export type UnitsUnion = "tons CO2/y" | "Individuals";
interface OffsetSection {
  value: number;
}

export type OffsetState = {
  [OFFSET_TYPE_HOUSEHOLD]: OffsetSection;
  [OFFSET_TYPE_ENERGY]: OffsetSection;
  [OFFSET_TYPE_LEISURE]: OffsetSection & {
    shortFlights: number;
    longFlights: number;
  };
  [OFFSET_TYPE_MOBILITY]: OffsetSection;
};
