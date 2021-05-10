const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const { name, version } = require('./package.json');

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

module.exports = env => {

  const defaultOutputFilename = `${name}-${version}`
  const entryFilename = env.entryFilename;
  const outputFilename = env.outputFilename || defaultOutputFilename;

  return {
    mode: 'none',
    performance: { hints: false },
    context: __dirname,
    entry: `${src}/${entryFilename}`,
    output: {
      filename: `${outputFilename}.js`,
      path: build,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: undefined,
      }),
      new GasPlugin({
        comments: false,
      })
    ]
  };
};
