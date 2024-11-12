import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = (env, argv) => {
  return {
    entry: {
      main: path.resolve(__dirname, 'src/index.tsx'), // Update entry to TypeScript
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, `build/`),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'], // Resolve TypeScript files
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, // Test for both .ts and .tsx files
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader', // Use ts-loader for TypeScript files
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CopyPlugin([
        {
          from: 'public',
          to: './',
        },
      ]),
    ],
  };
};
