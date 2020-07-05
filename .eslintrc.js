module.exports = {

    //parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    "parser": "babel-eslint",
    "rules": {
      "strict": 0,
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "trailingComma": "all",
          "bracketSpacing": false,
          "printWidth": 120,
          "tabWidth": 2,
          "semi": false
        }]
    },
    parserOptions: {
  
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  
      sourceType: "module", // Allows for the use of imports
  
      ecmaFeatures: {
  
        jsx: true // Allows for the parsing of JSX
  
      }
  
    },
  
    settings: {
  
      react: {
  
        version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
  
      }
  
    },
  
    extends: [
  
      "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
      "plugin:@typescript-eslint/recommended" ,
      "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      "plugin:prettier/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  
    ],
  

  
  };