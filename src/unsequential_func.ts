import {clampToInt32, unclampInt32} from "./uint32";
import {uint32ToBits, scrambleBits, bitsToUint32} from "./bitwise";
import {mixInteger, unmixInteger} from "./mixint";

/**
 * Return a non-sequential, unique integer for the given original, sequential
 * integer
 */
export const unsequentialInt = (originalId: number, mask: number): number => {
  const {overload, clamped} = clampToInt32(originalId);
  const bits = uint32ToBits(clamped ^ mask);
  scrambleBits(bits, true);
  const newId = bitsToUint32(bits);
  return mixInteger(newId, overload);
};

/**
 * Convert a non-sequential integer to the original integer
 */
export const ununsequentialInt = (unseqInt: number, mask: number): number => {
  const {extraValue: overload, value: newId} = unmixInteger(unseqInt);
  const bits = uint32ToBits(newId);
  scrambleBits(bits, false);
  const cutOriginalId = bitsToUint32(bits) ^ mask;
  return unclampInt32({
    overload,
    clamped: cutOriginalId,
  });
};

/**
 * Convert number to this base for external representation
 */
const STRING_BASE = 36;

/**
 * Convert a sequential integer to a non-sequential string
 */
export const unsequential = (sequentialInt: number, mask: number): string => unsequentialInt(
  sequentialInt,
  mask,
).toString(STRING_BASE);

/**
 * Convert a non-sequential string to a sequential integer
 */
export const ununsequential = (
  unsequentialStr: string,
  mask: number,
): number => ununsequentialInt(
  parseInt(unsequentialStr, STRING_BASE),
  mask,
);
