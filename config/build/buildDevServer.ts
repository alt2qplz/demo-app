import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/options';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false
    }
  };
};
