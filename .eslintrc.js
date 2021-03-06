module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "airbnb-base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "import/extensions": [2, {
            "js": "never",
            "ts": "never",
            "json": "never"
        }],
        "import/prefer-default-export": 0,
        "indent": [2, 2],
        "lines-between-class-members": 0,
        "no-console": 0,
        "space-before-function-paren": [2, "always"],
        "camelcase": 0
    }
};