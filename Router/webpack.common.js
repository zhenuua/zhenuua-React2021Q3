const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
    //CopyPlugin
    new CopyPlugin({
      patterns: [{ from: "src/asset" }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   include: path.resolve(__dirname, 'public'),
      //   use: 'html-loader',
      // },
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "assets/[name].[hash][ext]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  target: "web",
};
