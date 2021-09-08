const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    contentBase: [path.join(__dirname, "divsrc"), path.join(__dirname, "dist")],
    port: 3002
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
      name: "app2",
      library: {type: "var", name: "app2"},
      filename: "remoteEntry.js",
      exposes: {
        "foo": "./src/App",
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}, "antd": {singleton: true}},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {from: "divsrc"},
      ],
    }),
  ],
};
