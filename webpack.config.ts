import webpack from 'webpack';
import path from  'path';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/options';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode: BuildMode = env.mode;
  const port = env.port;
  const isDev = mode === 'development';
  const bundleSize = !!env.bundleSize;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const webpackConfig: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port,
    bundleSize,
    apiUrl,
    project: 'frontend'
  });

  return webpackConfig;
};
