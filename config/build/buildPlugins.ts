import { BuildOptions } from './types/options';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: options.paths.favicon
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project),
    }),
  ];

  if (options.bundleSize) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (options.isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: false
      }),
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return plugins;
};
