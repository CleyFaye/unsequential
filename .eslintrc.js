const eslintConfig = require("@cley_faye/eslint-config");
module.exports = eslintConfig(
  {
    promise: false,
    typescript: "./tsconfig.json",
  }
);
