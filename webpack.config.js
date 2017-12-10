const path = require('path');

module.exports = {
  entry: [
    './src/client/main.css',
    './src/client/main.ts'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: path.join('assets', 'bundle.js')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        use: ['ng-annotate-loader', 'ts-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000
  },
};
