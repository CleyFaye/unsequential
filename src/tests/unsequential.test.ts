import Unsequential from "../unsequential";
import {deepStrictEqual} from "assert";

const testCtor = () => {
  it("Use default mask value", () => {
    const instance = new Unsequential();
    deepStrictEqual(
      instance.mask,
      0x0f26b2c0,
    );
  });
  it("Use provided mask value", () => {
    const instance = new Unsequential(0xdead);
    deepStrictEqual(
      instance.mask,
      0xdead,
    );
  });
  it("Truncate mask value to 31 bits", () => {
    const instance = new Unsequential(0xffffffff);
    deepStrictEqual(
      instance.mask,
      0x7fffffff,
    );
  });
};

const testEncodeAsNum = () => {

};

describe("Unsequential class", () => {
  describe("ctor", testCtor);
  describe("encodeAsNum()", testEncodeAsNum);
});
