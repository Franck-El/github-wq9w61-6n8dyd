const path = require('path'); // require car webpack fonctionne sous node
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // charger ce fichier (chemin relatif)
  devtool: 'inline-source-map', // permet d'indiquer la source des erreurs
  devServer: { // necessite webpack-dev-server, permet de recharger au fur et à mesure des modifications (attention ne build pas, c'est juste en memoire)
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // sortir un fichier bundle.js dans __dirname/dist (__dirname etant le dossier courant), path.resolve le transforme en chemin absolu, necessaire ici
    filename: '[name].bundle.js', // [name] car il y aura un bundle par entry
    path: path.resolve(__dirname, 'dist'),
    clean: true, // nettoie le ./dist si des fichiers deviennent inutiles
  },
  optimization: { // necessaire si multiples 'entry'
    runtimeChunk: 'single',
  },
};
