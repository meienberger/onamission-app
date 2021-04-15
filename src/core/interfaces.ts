import {
  CommuteTypeUnion,
  FoodTypeUnion,
  InsulationTypeUnion,
  OFFSET_TYPE_ENERGY,
  OFFSET_TYPE_FOOD,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
  OFFSET_TYPE_MOBILITY,
  OFFSET_TYPE_SHOPPING,
  ShoppingTypeUnion,
} from '../constants/CoreConstants';

export interface Project {
  image: string;
  images?: string[];
  location: string;
  title: string;
  description: string;
  geoJson?: number[][][];
  objective: number;
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
interface OffsetSection {
  value: number;
}

export type OffsetState = {
  [OFFSET_TYPE_HOUSEHOLD]: OffsetSection;
  [OFFSET_TYPE_ENERGY]: OffsetSection & {
    surface: number;
    renewable: boolean | null;
    insulation: InsulationTypeUnion;
  };
  [OFFSET_TYPE_LEISURE]: OffsetSection & {
    shortFlights: number;
    longFlights: number;
  };
  [OFFSET_TYPE_MOBILITY]: OffsetSection & {
    kilometers: number;
    commuteType: CommuteTypeUnion;
  };
  [OFFSET_TYPE_FOOD]: OffsetSection & {
    foodType: FoodTypeUnion;
  };
  [OFFSET_TYPE_SHOPPING]: OffsetSection & {
    shoppingType: ShoppingTypeUnion;
  };
};
