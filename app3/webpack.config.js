const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    contentBase: [path.join(__dirname, "divsrc"), path.join(__dirname, "dist")],
    port: 3003
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      library: {type: "var", name: "app3"},
      filename: "app3-index.js",
      exposes: {
        "app3": "./src/SomeApp",
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}, "moment": {singleton: true}, "lodash": {singleton: true}},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
