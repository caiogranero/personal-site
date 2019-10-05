module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 20,
          allowFirstLine: true
        }
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  // required to lint *.vue files
  plugins: ["prettier", "vue"]
};
