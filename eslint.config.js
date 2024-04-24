import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    rules: {
      "astro/no-unused-css-selector": "error",
      semi: "off",
      "astro/semi": ["error", "always", { omitLastInOneLineBlock: true }],
    },
  },
];
