const path = require("path");
const HmtlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    open: true,
    hot: true,
  },

  entry: path.resolve(__dirname, "src", "JavaScript", "index.js"),

  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HmtlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({ filename: "bundle.[contenthash].css" }),
  ],

  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [require("postcss-preset-env")] },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
