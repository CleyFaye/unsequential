import {stringOffset} from "./string";

const MAX_DIGIT_FOR_EXTRA_VALUE = 9;
const MIDDLE_OF_STRING = 2;

/**
 * Mix an integer value in the middle of another
 */
export const mixInteger = (value: number, extraValue: number): number => {
  const valueStr = value.toString();
  const insertPosition = Math.floor(valueStr.length / MIDDLE_OF_STRING);
  const res = `${valueStr.substr(0, insertPosition)
  }0${stringOffset(extraValue.toString(MAX_DIGIT_FOR_EXTRA_VALUE), 1)}0${
    valueStr.substr(insertPosition)}`;
  return parseInt(res, 10);
};

/**
 * Unmix an integer value from the middle of another
 */
export const unmixInteger = (
  value: number,
): {
  value: number,
  extraValue: number,
} => {
  const valueStr = value.toString();
  const startIndex = Math.floor(valueStr.length / MIDDLE_OF_STRING);
  const beginExtract = valueStr.lastIndexOf("0", startIndex - 1);
  const endExtract = valueStr.indexOf("0", startIndex);
  const extraValueStr = valueStr.substring(beginExtract + 1, endExtract);
  const extraValue = parseInt(stringOffset(extraValueStr, -1), MAX_DIGIT_FOR_EXTRA_VALUE);
  const originalValueStr = valueStr.substr(0, beginExtract)
    + valueStr.substr(endExtract + 1);
  const originalValue = parseInt(originalValueStr, 10);
  return {
    extraValue,
    value: originalValue,
  };
};
