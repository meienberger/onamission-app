type UnitsUnion = 'tons CO2/y' | 'Individuals';

export const OFFSET_TYPE_HOUSEHOLD = 'OFFSET_TYPE_HOUSEHOLD';
export const OFFSET_TYPE_LEISURE = 'OFFSET_TYPE_LEISURE';
export const OFFSET_TYPE_MOBILITY = 'OFFSET_TYPE_MOBILITY';
export const OFFSET_TYPE_ENERGY = 'OFFSET_TYPE_ENERGY';
export const OFFSET_TYPE_FOOD = 'OFFSET_TYPE_FOOD';
export const OFFSET_TYPE_SHOPPING = 'OFFSET_TYPE_SHOPPING';

export type OffsetTypeUnion =
  | typeof OFFSET_TYPE_HOUSEHOLD
  | typeof OFFSET_TYPE_LEISURE
  | typeof OFFSET_TYPE_MOBILITY
  | typeof OFFSET_TYPE_ENERGY
  | typeof OFFSET_TYPE_SHOPPING
  | typeof OFFSET_TYPE_FOOD
  | typeof OFFSET_TYPE_SHOPPING;

export interface OffsetSection {
  title: string;
  type: OffsetTypeUnion;
  unit: UnitsUnion;
}

export const COMMUTE_TYPE_BIKE = 'COMMUTE_TYPE_BIKE';
export const COMMUTE_TYPE_CAR = 'COMMUTE_TYPE_CAR';
export const COMMUTE_TYPE_ELECTRIC_CAR = 'COMMUTE_TYPE_ELECTRIC_CAR';
export const COMMUTE_TYPE_PUBLIC = 'COMMUTE_TYPE_PUBLIC';

export type CommuteTypeUnion =
  | typeof COMMUTE_TYPE_BIKE
  | typeof COMMUTE_TYPE_CAR
  | typeof COMMUTE_TYPE_ELECTRIC_CAR
  | typeof COMMUTE_TYPE_PUBLIC;

export const INSULATION_TYPE_HIGH = 'INSULATION_TYPE_HIGH';
export const INSULATION_TYPE_MEDIUM = 'INSULATION_TYPE_MEDIUM';
export const INSULATION_TYPE_LOW = 'INSULATION_TYPE_LOW';

export type InsulationTypeUnion =
  | typeof INSULATION_TYPE_HIGH
  | typeof INSULATION_TYPE_MEDIUM
  | typeof INSULATION_TYPE_LOW;

const UNIT_CO2: UnitsUnion = 'tons CO2/y';
const UNIT_INDIVIDUALS: UnitsUnion = 'Individuals';

export const FOOD_TYPE_VEGAN = 'FOOD_TYPE_VEGAN';
export const FOOD_TYPE_VEGETARIAN = 'FOOD_TYPE_VEGETARIAN';
export const FOOD_TYPE_PESCATARIAN = 'FOOD_TYPE_PESCATARIAN';
export const FOOD_TYPE_AVERAGE_MEAT = 'FOOD_TYPE_AVERAGE_MEAT';
export const FOOD_TYPE_HEAVY_MEAT = 'FOOD_TYPE_HEAVY_MEAT';

export type FoodTypeUnion =
  | typeof FOOD_TYPE_VEGAN
  | typeof FOOD_TYPE_VEGETARIAN
  | typeof FOOD_TYPE_PESCATARIAN
  | typeof FOOD_TYPE_AVERAGE_MEAT
  | typeof FOOD_TYPE_HEAVY_MEAT;

export const SHOPPING_TYPE_REALLY_NECESSARY = 'SHOPPING_TYPE_REALLY_NECESSARY';
export const SHOPPING_TYPE_NECESSARY = 'SHOPPING_TYPE_NECESSARY';
export const SHOPPING_TYPE_REGULARLY = 'SHOPPING_TYPE_REGULARLY';

export type ShoppingTypeUnion =
  | typeof SHOPPING_TYPE_REALLY_NECESSARY
  | typeof SHOPPING_TYPE_NECESSARY
  | typeof SHOPPING_TYPE_REGULARLY;

export const OFFSET_SECTIONS: OffsetSection[] = [
  {
    title: '👨‍👩‍👦‍👦 Household',
    type: OFFSET_TYPE_HOUSEHOLD,
    unit: UNIT_INDIVIDUALS,
  },
  {
    title: '✈️ Leisure',
    type: OFFSET_TYPE_LEISURE,
    unit: UNIT_CO2,
  },
  {
    title: '🚙 Mobility',
    type: OFFSET_TYPE_MOBILITY,
    unit: UNIT_CO2,
  },
  {
    title: '⚡️ Energy',
    type: OFFSET_TYPE_ENERGY,
    unit: UNIT_CO2,
  },
  {
    title: '🥗 Food',
    type: OFFSET_TYPE_FOOD,
    unit: UNIT_CO2,
  },
  {
    title: '🛒 Shopping',
    type: OFFSET_TYPE_SHOPPING,
    unit: UNIT_CO2,
  },
];

export const MAX_FLIGHTS = 10;
export const MAX_SURFACE = 500;
