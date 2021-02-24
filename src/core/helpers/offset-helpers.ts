export const getOffsetLeisure = (
  shortFlights: number,
  longFlights: number
): number => {
  return Math.round(shortFlights) * 700 + Math.round(longFlights) * 8000;
};
