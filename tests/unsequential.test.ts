import Unsequential from "../src/unsequential";
import {deepStrictEqual} from "assert";

describe("Unsequential class", function() {
  describe("ctor", function() {
    it("Use default mask value", function() {
      const instance = new Unsequential();
      deepStrictEqual(
        instance.mask,
        0x0f26b2c0,
      );
    });
    it("Use provided mask value", function() {
      const instance = new Unsequential(0xdead);
      deepStrictEqual(
        instance.mask,
        0xdead,
      );
    });
    it("Truncate mask value to 31 bits", function() {
      const instance = new Unsequential(0xffffffff);
      deepStrictEqual(
        instance.mask,
        0x7fffffff,
      );
    });
  });
});
