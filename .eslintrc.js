module.exports = {
    "extends": [
        "standard",
        "plugin:vue/base"
    ],
    "plugins": [
        "html"
    ],
    "parser": "babel-eslint",
    
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
    },
    "env": {
        "es6": true
    },
    "rules": {
        "semi": ["warn", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "arrow-parems": 0,
        "generator-star-spacing": 0,
        "no-new": 0
    }
    
}