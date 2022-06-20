const path = require('path'); // require car webpack fonctionne sous node

module.exports = {
  mode: 'development',
  entry: './src/index.js', // commencer par le fichier index.js (chemin relatif)
  output: {
    // sortir un fichier bundle.js dans __dirname/dist (__dirname etant le dossier courant), path.resolve le transforme en chemin absolu, necessaire ici
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
