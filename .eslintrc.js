var restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:vue/essential",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "vue",
    "prettier"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  overrides: [{
    files: ["src/**/*"],rules: {
      "no-restricted-globals": ["error"].concat(restrictedGlobals)
    }
  }],
  globals: {
    DEBUG: "readonly"
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.dev.js"
      }
    }
  }
};
