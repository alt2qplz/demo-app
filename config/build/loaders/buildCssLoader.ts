import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // включаем модули и добавляем для них настройки
          modules: {
            // хеширование классов только при названии файла с .module.
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // для дев сборки оставим путь до компонента и название класса
            // localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      },
      'sass-loader',
    ],
  };
}
