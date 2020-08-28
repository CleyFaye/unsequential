/**
 * Offset all characters in a string
 */
export const stringOffset = (str: string, offset: number): string => str
  .split("")
  .map(chr => String.fromCharCode(chr.charCodeAt(0) + offset))
  .join("");
