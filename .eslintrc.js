module.exports =  {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "html",
    "json",
    "markdown",
    "prettier"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "singleQuote": true,
        "jsxSingleQuote": true
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-state": "off",
    "react/jsx-curly-newline": "off",
    "no-restricted-globals": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-irregular-whitespace": "off",
    "react/prop-types": "off",
    "react/no-render-return-value": "off",
    "no-unused-expressions": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ]
  },
  overrides: [
    {
      "files": [
        "*.ts",
        "*.tsx",
        "*.d.ts"
      ],
      "rules": {}
    }
  ],
  settings: {
    react: {
      "pragma": "React",
      version: "detect"
    }
  }
};
