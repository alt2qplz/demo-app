import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/options';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.unshift(paths.src); // src - first, node_modules - second
  config!.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify('mock-api'),
      __PROJECT__: JSON.stringify('storybook')
    })
  );

  return config;
};
