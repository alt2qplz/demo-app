import { BuildOptions } from './types/options';
import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i, // картинки и шрифты
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(options.isDev);

  const typeScriptLoader = {
    test: /\.tsx?$/, // регулярка для поиска файлов, которые надо пропустить через лоадер regex101.com
    use: 'ts-loader', // сам лоадер
    exclude: /node_modules/, // исключаем папку node_modules
  };

  const babelLoader = buildBabelLoader(options);

  return [
    svgLoader,
    fileLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader
  ];
};
