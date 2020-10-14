module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  "plugins": [
    "prettier",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    "react/prop-types": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "root": true
}
