// Refer to the official webpack guides: https://webpack.js.org/guides/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PixiJS and Webpack Template", // TODO: Update to the desired browser title.
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map", // TODO: Use for "development" builds.
  mode: "development", // TODO: Use for "development" builds.
  // mode: "production", // TODO: Use for "production" builds.
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
