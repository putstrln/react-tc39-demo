// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: process.env.BASE_URL,
  },
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});