const globalizePlugin = require("globalize-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new globalizePlugin({
        production: false,
        developmentLocale: "de",
        supportedLocales: ["de"]
      })
    ]
  });
};
