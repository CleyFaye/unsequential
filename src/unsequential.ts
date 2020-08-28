import {INT32_MAX} from "./uint32";

const DEFAULT_MASK = 0x0f26b2c0;

export default class Unsequential {
  private _mask: number;

  public constructor(mask = DEFAULT_MASK) {
    this._mask = mask & INT32_MAX;
  }

  public get mask(): number {
    return this._mask;
  }
}
