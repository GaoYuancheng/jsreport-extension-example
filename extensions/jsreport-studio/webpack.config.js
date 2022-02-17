const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // index: './src/index.js',
    // print: './src/print.js',
    index: path.resolve(__dirname, "./src/index.jsx"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: [path.resolve(__dirname,"../node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react"]],
          },
        },
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  externals: [
    ({context, request}, callback) => {
      if (request === 'jsreport-studio') {
        return callback(null, 'Studio')
      }

      callback()
    }
  ],
};
