module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "strict": 0,
    "no-console": "warn",
    "quotes": [
      "warn",
      "backtick"
    ],
    "prettier/prettier": "warn",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-extra-semi": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "plugins": [
    "react-hooks"
  ],
  "extends": [
    "eslint:recommended",
    "prettier/standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
