module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [
          ".js",
          ".ios.js",
          ".android.js"
        ],
        "alias": {
          "cwd": "babelrc",
          "@app": "./src",
          "@components": "./src/components",
          "@services": "./src/services",
          "@actions": "./src/actions",
          "@store": "./src/store",
          "@constants": "./src/constants",
          "@screens": "./src/screens",
          "@styles": "./src/styles",
          "@routes": "./src/routes",
          "@images": "./src/assets/images",
          "@langs": "./src/assets/langs",
          "@utils": "./src/utils"          
        }
      }
    ]
  ]
};
