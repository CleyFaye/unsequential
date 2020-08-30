import {INT32_MAX} from "./uint32";
import {unsequentialInt, unsequential, ununsequential, ununsequentialInt} from "./unsequential_func";

const DEFAULT_MASK = 0x0f26b2c0;

export default class Unsequential {
  private _mask: number;

  public constructor(mask = DEFAULT_MASK) {
    this._mask = mask & INT32_MAX;
  }

  public get mask(): number {
    return this._mask;
  }

  public encodeAsNum(value: number): number {
    return unsequentialInt(value, this._mask);
  }

  public encode(value: number): string {
    return unsequential(value, this._mask);
  }

  public decode(value: number | string): number {
    if (typeof value === "string") {
      return ununsequential(value, this._mask);
    }
    return ununsequentialInt(value, this._mask);
  }
}
