module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@api": "./src/api",
          "@root": "./src",
        },
      },
    ],
  ],
};
