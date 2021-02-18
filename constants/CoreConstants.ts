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
}

export const OFFSET_SECTIONS: OffsetSection[] = [
  {
    title: "👨‍👩‍👦‍👦 Houehold",
    type: OFFSET_TYPE_HOUSEHOLD,
  },
  {
    title: "✈️ Leisure",
    type: OFFSET_TYPE_LEISURE,
  },
  {
    title: "🚙 Mobility",
    type: OFFSET_TYPE_MOBILITY,
  },
  {
    title: "⚡️ Energy",
    type: OFFSET_TYPE_ENERGY,
  },
];
