/* eslint-disable @typescript-eslint/no-magic-numbers */
import {asUint32} from "./uint32";

/**
 * Convert an integer into an array of 32 bits
 */
export const uint32ToBits = (value: number): Array<boolean> => [
  Boolean(value & (1 << 0)),
  Boolean(value & (1 << 1)),
  Boolean(value & (1 << 2)),
  Boolean(value & (1 << 3)),
  Boolean(value & (1 << 4)),
  Boolean(value & (1 << 5)),
  Boolean(value & (1 << 6)),
  Boolean(value & (1 << 7)),
  Boolean(value & (1 << 8)),
  Boolean(value & (1 << 9)),
  Boolean(value & (1 << 10)),
  Boolean(value & (1 << 11)),
  Boolean(value & (1 << 12)),
  Boolean(value & (1 << 13)),
  Boolean(value & (1 << 14)),
  Boolean(value & (1 << 15)),
  Boolean(value & (1 << 16)),
  Boolean(value & (1 << 17)),
  Boolean(value & (1 << 18)),
  Boolean(value & (1 << 19)),
  Boolean(value & (1 << 20)),
  Boolean(value & (1 << 21)),
  Boolean(value & (1 << 22)),
  Boolean(value & (1 << 23)),
  Boolean(value & (1 << 24)),
  Boolean(value & (1 << 25)),
  Boolean(value & (1 << 26)),
  Boolean(value & (1 << 27)),
  Boolean(value & (1 << 28)),
  Boolean(value & (1 << 29)),
  Boolean(value & (1 << 30)),
  Boolean(value & (1 << 31)),
];

// eslint-disable-next-line complexity
export const bitsToInt32 = (
  bits: Array<boolean>,
): number => (bits[0] ? 1 << 0 : 0) + (bits[1] ? 1 << 1 : 0)
  + (bits[2] ? 1 << 2 : 0) + (bits[3] ? 1 << 3 : 0)
  + (bits[4] ? 1 << 4 : 0) + (bits[5] ? 1 << 5 : 0)
  + (bits[6] ? 1 << 6 : 0) + (bits[7] ? 1 << 7 : 0)
  + (bits[8] ? 1 << 8 : 0) + (bits[9] ? 1 << 9 : 0)
  + (bits[10] ? 1 << 10 : 0) + (bits[11] ? 1 << 11 : 0)
  + (bits[12] ? 1 << 12 : 0) + (bits[13] ? 1 << 13 : 0)
  + (bits[14] ? 1 << 14 : 0) + (bits[15] ? 1 << 15 : 0)
  + (bits[16] ? 1 << 16 : 0) + (bits[17] ? 1 << 17 : 0)
  + (bits[18] ? 1 << 18 : 0) + (bits[19] ? 1 << 19 : 0)
  + (bits[20] ? 1 << 20 : 0) + (bits[21] ? 1 << 21 : 0)
  + (bits[22] ? 1 << 22 : 0) + (bits[23] ? 1 << 23 : 0)
  + (bits[24] ? 1 << 24 : 0) + (bits[25] ? 1 << 25 : 0)
  + (bits[26] ? 1 << 26 : 0) + (bits[27] ? 1 << 27 : 0)
  + (bits[28] ? 1 << 28 : 0) + (bits[29] ? 1 << 29 : 0)
  + (bits[30] ? 1 << 30 : 0) + (bits[31] ? 1 << 31 : 0);

/**
 * Convert an array of 32 bits to an integer
 */
export const bitsToUint32 = (bits: Array<boolean>): number => asUint32(bitsToInt32(bits));

/**
 * Swap two bits
 */
export const swapBits = (
  bitsArray: Array<boolean>,
  id1: number,
  id2: number,
): void => {
  const temp = bitsArray[id1];
  bitsArray[id1] = bitsArray[id2];
  bitsArray[id2] = temp;
};

/**
 * Shift the bits to the left/right
 */
export const shiftBits = (
  bitsArray: Array<boolean>,
  idStart: number,
  idEnd: number,
  left: boolean,
): void => {
  if (left) {
    const temp = bitsArray[idStart];
    for (let i = idStart; i < idEnd; ++i) {
      bitsArray[i] = bitsArray[i + 1];
    }
    bitsArray[idEnd] = temp;
  } else {
    const temp = bitsArray[idEnd];
    for (let i = idEnd; i > idStart; --i) {
      bitsArray[i] = bitsArray[i - 1];
    }
    bitsArray[idStart] = temp;
  }
};

/**
 * Scramble bits around
 */
export const scrambleBits = (
  bitsArray: Array<boolean>,
  forward: boolean,
): void => {
  if (forward) {
    shiftBits(bitsArray, 0, 16, true);
    shiftBits(bitsArray, 17, 30, false);
  }
  swapBits(bitsArray, 0, 6);
  swapBits(bitsArray, 1, 20);
  shiftBits(bitsArray, 2, 5, forward);
  swapBits(bitsArray, 7, 13);
  shiftBits(bitsArray, 9, 12, !forward);
  swapBits(bitsArray, 8, 14);
  shiftBits(bitsArray, 15, 19, forward);
  shiftBits(bitsArray, 21, 29, !forward);
  if (!forward) {
    shiftBits(bitsArray, 0, 16, false);
    shiftBits(bitsArray, 17, 30, true);
  }
};
