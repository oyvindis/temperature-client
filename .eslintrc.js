module.exports =  {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jest: true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }
    ]
  },
  settings: {
    react: {
      "pragma": "React",
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
