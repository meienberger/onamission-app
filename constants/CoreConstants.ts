import { UnitsUnion } from "../core/interfaces";

export const OFFSET_TYPE_HOUSEHOLD = "OFFSET_TYPE_HOUSEHOLD";
export const OFFSET_TYPE_LEISURE = "OFFSET_TYPE_LEISURE";
export const OFFSET_TYPE_MOBILITY = "OFFSET_TYPE_MOBILITY";
export const OFFSET_TYPE_ENERGY = "OFFSET_TYPE_ENERGY";

export type OffsetTypeUnion =
  | "OFFSET_TYPE_HOUSEHOLD"
  | "OFFSET_TYPE_LEISURE"
  | "OFFSET_TYPE_MOBILITY"
  | "OFFSET_TYPE_ENERGY";

export interface OffsetSection {
  title: string;
  type: OffsetTypeUnion;
  unit: UnitsUnion;
}

export const UNIT_CO2: UnitsUnion = "tons CO2/y";
export const UNIT_INDIVIDUALS: UnitsUnion = "Individuals";

export const OFFSET_SECTIONS: OffsetSection[] = [
  {
    title: "👨‍👩‍👦‍👦 Household",
    type: OFFSET_TYPE_HOUSEHOLD,
    unit: UNIT_INDIVIDUALS,
  },
  {
    title: "✈️ Leisure",
    type: OFFSET_TYPE_LEISURE,
    unit: UNIT_CO2,
  },
  {
    title: "🚙 Mobility",
    type: OFFSET_TYPE_MOBILITY,
    unit: UNIT_CO2,
  },
  {
    title: "⚡️ Energy",
    type: OFFSET_TYPE_ENERGY,
    unit: UNIT_CO2,
  },
];
