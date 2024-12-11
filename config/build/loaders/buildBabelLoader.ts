import { BuildOptions } from '../types/options';

export const buildBabelLoader = (options: BuildOptions) => {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // plugins: [ просто для примера
        //   [
        //     "i18next-extract",
        //     {
        //       locales: ['ru', 'en'],
        //       // keyIsDefaultValue: true
        //     }
        //   ],
        // ]
        plugins: [
          options.isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  };
};