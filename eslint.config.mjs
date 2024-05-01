import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    rules: {
      "no-console": "error",
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "off",
      quotes: ["error", "double"],
    },
  }
];
