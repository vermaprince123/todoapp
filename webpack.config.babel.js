import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = () => {
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
    devServer: {
      port: 3004,
      devMiddleware: {},
      static: {
        directory: path.join(__dirname, `build/`),
        watch: false,
      },
      https: true,
      historyApiFallback: true,
      allowedHosts: 'all',
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
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-window|react-virtualized-auto-sizer|react-router-dom|)[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
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
