const path = require('path'); // require car webpack fonctionne sous node
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  }, // charger ces fichiers (chemin relatif)
  devtool: 'inline-source-map', // permet d'indiquer la source des erreurs
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    // sortir un fichier bundle.js dans __dirname/dist (__dirname etant le dossier courant), path.resolve le transforme en chemin absolu, necessaire ici
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
