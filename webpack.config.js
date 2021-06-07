/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.tsx
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
  	// the output of the webpack build will be in /build directory
    path: path.resolve(__dirname, 'build'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js',
  },
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.tsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    open: true,
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitError: true,
      emitWarning: true,
    }),
  ],
};
