import {
  CommuteTypeUnion,
  COMMUTE_TYPE_BIKE,
  COMMUTE_TYPE_CAR,
  COMMUTE_TYPE_ELECTRIC_CAR,
  COMMUTE_TYPE_PUBLIC,
  FoodTypeUnion,
  FOOD_TYPE_AVERAGE_MEAT,
  FOOD_TYPE_HEAVY_MEAT,
  FOOD_TYPE_PESCATARIAN,
  FOOD_TYPE_VEGAN,
  FOOD_TYPE_VEGETARIAN,
  InsulationTypeUnion,
  INSULATION_TYPE_HIGH,
  INSULATION_TYPE_LOW,
  INSULATION_TYPE_MEDIUM,
  ShoppingTypeUnion,
  SHOPPING_TYPE_NECESSARY,
  SHOPPING_TYPE_REALLY_NECESSARY,
  SHOPPING_TYPE_REGULARLY,
} from '../../constants/CoreConstants';
import { OffsetState } from '../interfaces';

export const getOffsetLeisure = (
  shortFlights: number,
  longFlights: number
): number => {
  return (
    (Math.round(shortFlights) * 700 + Math.round(longFlights) * 8000) / 1000
  );
};

export const getOffsetMobility = (
  commuteType: CommuteTypeUnion,
  kilometers: number
): number => {
  switch (commuteType) {
    case COMMUTE_TYPE_BIKE:
      return 0;
    case COMMUTE_TYPE_CAR:
      return Math.round(0.29 * kilometers) / 1000;
    case COMMUTE_TYPE_ELECTRIC_CAR:
      return Math.round(0.04 * kilometers) / 1000;
    case COMMUTE_TYPE_PUBLIC:
      return Math.round(0.109 * kilometers) / 1000;
    default:
      return 0;
  }
};

export const getOffsetEnergy = (
  insulation: InsulationTypeUnion,
  surface: number,
  renewable: boolean | null
): number => {
  let insulationOffset = 0;
  let renewableOffset = 0;

  switch (insulation) {
    case INSULATION_TYPE_HIGH:
      insulationOffset = 0.5;
      break;
    case INSULATION_TYPE_MEDIUM:
      insulationOffset = 1.25;
      break;
    case INSULATION_TYPE_LOW:
      insulationOffset = 2.5;
      break;
  }

  if (renewable) {
    renewableOffset = 0.015;
  } else {
    renewableOffset = 0.149;
  }

  return (
    Math.round(
      surface * 49.1 * insulationOffset + surface * 200 * renewableOffset
    ) / 1000
  );
};

export const getOffsetFood = (foodType: FoodTypeUnion): number => {
  switch (foodType) {
    case FOOD_TYPE_VEGAN:
      return 1.5;
    case FOOD_TYPE_VEGETARIAN:
      return 1.7;
    case FOOD_TYPE_PESCATARIAN:
      return 2;
    case FOOD_TYPE_AVERAGE_MEAT:
      return 2.5;
    case FOOD_TYPE_HEAVY_MEAT:
      return 3.3;
  }
};

export const getShoppingOffset = (shoppingType: ShoppingTypeUnion) => {
  switch (shoppingType) {
    case SHOPPING_TYPE_REALLY_NECESSARY:
      return 0.5;
    case SHOPPING_TYPE_NECESSARY:
      return 1.5;
    case SHOPPING_TYPE_REGULARLY:
      return 2.5;
  }
};

export const getTotalOffset = (offset: OffsetState): string => {
  return (
    offset.OFFSET_TYPE_ENERGY.value +
    offset.OFFSET_TYPE_LEISURE.value +
    offset.OFFSET_TYPE_MOBILITY.value +
    offset.OFFSET_TYPE_FOOD.value +
    offset.OFFSET_TYPE_SHOPPING.value
  ).toFixed(2);
};
