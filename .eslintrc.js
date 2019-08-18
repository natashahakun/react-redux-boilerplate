module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "globals": { "fetch": false },
    "env": {
        "browser": true,
        "node": true
    },
	"rules": {
        "arrow-parens": 0,
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "import/prefer-default-export": false,
        "import/no-useless-path-segments": false,
        "import/no-cycle": false,
        "jsx-a11y/label-has-for": false, // deprecated in version 6.1 in favor of label-has-associated-control
        "jsx-a11y/label-has-associated-control": true,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": false // configuration conflict with react-scripts start entry file
    }
}
