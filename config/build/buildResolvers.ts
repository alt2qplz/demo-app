import { BuildOptions } from './types/options';
import webpack from 'webpack';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    // Здесь определяются расширения файлов, которые Webpack будет автоматически разрешать при импорте.
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {}, // можно настроить, но для того чтобы просто обращаться без всяких @ и тд, надо оставить пустым
    mainFiles: ['index'] // для каждого модуля главным файлом будет являться index
  };
};
