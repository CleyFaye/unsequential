export const defaultMaskValue = 0x0f26b2c0;
export const testShortMaskValue = 0xdead;
export const testLongMaskValue = 0xffffffff;
export const testLongMaskTruncatedValue = 0x7fffffff;

export const testFixture = {
  [defaultMaskValue.toString()]: [
    {
      original: 0,
      encodedInt: 1015401036049,
      encoded: "cygvk5qp",
    },
    {
      original: 1,
      encodedInt: 1015401068817,
      encoded: "cygvkv0x",
    },
    {
      original: 10,
      encodedInt: 1015401036145,
      encoded: "cygvk5td",
    },
    {
      original: 123,
      encodedInt: 1015401068909,
      encoded: "cygvkv3h",
    },
    {
      original: 0xffffff,
      encodedInt: 1062701076046,
      encoded: "dk74s66m",
    },
    {
      original: 0x0fffffff,
      encodedInt: 56140103086,
      encoded: "psgd8ry",
    },
    {
      original: 0xffffffff,
      encodedInt: 1015403068817,
      encoded: "cygwrq8h",
    },
    {
      original: 0x01ffffffff,
      encodedInt: 1015405068881,
      encoded: "cygxylht",
    },
  ],
  [testShortMaskValue.toString()]: [
    {
      original: 0,
      encodedInt: 1100105321,
      encoded: "i6z2p5",
    },
    {
      original: 1,
      encodedInt: 1070102553,
      encoded: "hp40ex",
    },
    {
      original: 10,
      encodedInt: 1100105353,
      encoded: "i6z2q1",
    },
    {
      original: 123,
      encodedInt: 1070102597,
      encoded: "hp40g5",
    },
    {
      original: 0xffffff,
      encodedInt: 63840100854,
      encoded: "tbsqx2u",
    },
    {
      original: 0x0fffffff,
      encodedInt: 1070401073814,
      encoded: "dnqh5uhi",
    },
    {
      original: 0xffffffff,
      encodedInt: 1070302553,
      encoded: "hp8aqh",
    },
    {
      original: 0x01ffffffff,
      encodedInt: 1070502617,
      encoded: "hpcl3t",
    },
  ],
};
