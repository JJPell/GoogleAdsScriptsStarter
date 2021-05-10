import { resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import GasPlugin from 'gas-webpack-plugin';
import { name, version } from './package.json';

const src = resolve(__dirname, 'src');
const build = resolve(__dirname, 'build');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default env => {

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
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false,
      },
      clean: true,
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
      new GasPlugin({
        comments: false,
      })
    ]
  };
};
