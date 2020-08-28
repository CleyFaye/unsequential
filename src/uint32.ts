/**
 * Max value for a 31 bits unsigned integer.
 *
 * We have to clamp all values at that, because JS perform bitwise operations on 32bits signed
 * integers.
 */
export const INT32_MAX = 0x7fffffff;

/**
 * Convert a signed int32 value into an uint32 value
 */
export const asUint32 = (int32Value: number): number => int32Value < 0
  ? int32Value + INT32_MAX
  : int32Value;

export interface ClampValue {
  overload: number,
  clamped: number,
}

/**
 * Clamp a value that can't fit into 31 bits and return the number of time
 * it goes over.
 */
export const clampToInt32 = (value: number): ClampValue => {
  const overload = Math.floor(value / INT32_MAX);
  const clamped = value % INT32_MAX;
  return {
    overload,
    clamped,
  };
};

/**
 * Reverse operation of clampToInt32()
 */
export const unclampInt32 = (
  {overload, clamped}: ClampValue,
): number => (INT32_MAX * overload) + clamped;
