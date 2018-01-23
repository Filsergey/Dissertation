// https://eslint.org/docs/user-guide/configuring
/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential", "airbnb-base"],
  // required to lint *.vue files
  plugins: ["vue"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "off",
      {
        js: "never",
        vue: "never"
      }
    ],
    skipBlankLines: true,
    ignoreComments: true,
    "no-new": 0,
    "no-trailing-spaces": 0,
    "no-multiple-empty-lines": 0,
    quotes: 0,
    semi: 0,
    "comma-dangle": 0,
    indent: 0,
    "space-before-function-paren": 0,
    "prefer-arrow-callback": 0,
    "no-console": 0,
    "func-names": 0,
    "max-len": 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
