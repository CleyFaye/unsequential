# @cley\_faye/unsequential
Create a seemingly non-sequential (but reversible) sequence of unique
identifiers.

## Purpose

The goal of this library is to be able to produce non-sequential identifiers
that maps to a sequence of numeric identifier.
The non-sequential identifiers are made using a deterministic permutation and
a mask, meaning it's not "encryption" and a determined individual could most
likely deduce the actual numeric identifier.

Non-sequential identifiers can be either large numbers, or strings made of
letters and numbers (like `3lkpbnsrd`).

If you want to encrypt your identifiers so that no-one can reverse them, this
is not the right library for you.
It is more about making a compromise with readable data and "not starting a
sequence at 0".

## Installation

Using `npm` or similar:

```bash
npm install @cley_faye/unsequential
```

## Usage

You have to first initialize the generator by providing a mask.
(a default mask value can be used if you do not care).

This can usually be done in a separate unit on the side, so all your codebase
uses the game generator.

```JavaScript
import Unsequential from "@cley_faye/unsequential";

// Initialization using a mask
const unseq = new Unsequential(0x03f56a2c);

// Get the numeric identifier for value 34
const numValue = unseq.encodeAsNum(34);

// Get the string identifier for value 1664
const strValue = unseq.encode(1664);

// Decode above identifiers
const decodedFromNum = unseq.decode(numValue);
const decodedFromStr = unseq.decode(strValue);
```

## Documentation

The default export is a class (usually named `Unsequential`).
The constructor takes only one argument, the mask to use.
If the value provided does not fit in 31 bits it will be truncated.

Instances of this class exposes three methods:
- encodeAsNum(value: number): number
  encode a value and return the numeric representation of the encoded identifier
- encode(value: number): string
  encode a value and return the string representation of the encoded identifier
- decode(value: string | number): number
  Decode a previously encoded identifier and return the original value

