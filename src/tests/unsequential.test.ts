import Unsequential from "../unsequential";
import {deepStrictEqual} from "assert";
import {defaultMaskValue, testShortMaskValue, testLongMaskValue, testLongMaskTruncatedValue, testFixture} from "./data";

const testCtor = () => {
  it("Use default mask value", () => {
    const instance = new Unsequential();
    deepStrictEqual(
      instance.mask,
      defaultMaskValue,
    );
  });
  it("Use provided mask value", () => {
    const instance = new Unsequential(testShortMaskValue);
    deepStrictEqual(
      instance.mask,
      testShortMaskValue,
    );
  });
  it("Truncate mask value to 31 bits", () => {
    const instance = new Unsequential(testLongMaskValue);
    deepStrictEqual(
      instance.mask,
      testLongMaskTruncatedValue,
    );
  });
};

const testEncodeAsNum = () => {
  Object.keys(testFixture).forEach(maskStr => {
    const mask = parseInt(maskStr, 10);
    const instance = new Unsequential(mask);
    describe(`Using mask "${maskStr}"`, () => {
      const fixture = testFixture[maskStr];
      fixture.forEach(fixtureDef => {
        it(`Original: ${fixtureDef.original}`, () => {
          const encodedInt = instance.encodeAsNum(fixtureDef.original);
          deepStrictEqual(encodedInt, fixtureDef.encodedInt);
        });
      });
    });
  });
};

const testEncode = () => {
  Object.keys(testFixture).forEach(maskStr => {
    const mask = parseInt(maskStr, 10);
    const instance = new Unsequential(mask);
    describe(`Using mask "${maskStr}"`, () => {
      const fixture = testFixture[maskStr];
      fixture.forEach(fixtureDef => {
        it(`Original: ${fixtureDef.original}`, () => {
          const encoded = instance.encode(fixtureDef.original);
          deepStrictEqual(encoded, fixtureDef.encoded);
        });
      });
    });
  });
};

const testDecode = () => {
  Object.keys(testFixture).forEach(maskStr => {
    const mask = parseInt(maskStr, 10);
    const instance = new Unsequential(mask);
    describe(`Using mask "${maskStr}"`, () => {
      const fixture = testFixture[maskStr];
      fixture.forEach(fixtureDef => {
        it(`Encoded number: ${fixtureDef.encodedInt}`, () => {
          const decoded = instance.decode(fixtureDef.encodedInt);
          deepStrictEqual(decoded, fixtureDef.original);
        });
      });
      fixture.forEach(fixtureDef => {
        it(`Encoded string: ${fixtureDef.encoded}`, () => {
          const decoded = instance.decode(fixtureDef.encoded);
          deepStrictEqual(decoded, fixtureDef.original);
        });
      });
    });
  });
};

describe("Unsequential class", () => {
  describe("ctor", testCtor);
  describe("encodeAsNum()", testEncodeAsNum);
  describe("encode()", testEncode);
  describe("decode()", testDecode);
});
