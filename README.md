# github-wq9w61-6n8dyd

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-wq9w61-6n8dyd)

1/ tsc --init : initialise ts et crée tsconfig.json
2/ tsconfig -> changer target en 'es6' et module en 'es2015'
3/ npm init : initialise Node Package Management et crée package.json
4/ npm install webpack webpack-cli ts-loader -D (-cli est pour utiliser webpack en ligne de commande, ts-loader pour que webpack sache compiler du ts, -D car ça ne sert que lors du dev, en production par besoin de les avoir dans le site web)
5/ npm install typescript -D : nécessaire même s'il y a déjà une installation globale
6/ faire un dossier src/ où on va mettre notre code en ts
7/ faire un dossier public/ (ou dist/) où on va être rangé notre code compilé en js dans un seul fichier optimisé, notre html...
8/ créer un webpack.config.js qui va permettre de dire à webpack ce qu'on veut faire exactement. Y définir entry, output et rules
9/ dans package.json ajouter "build": "webpack" dans script pour lui dire "qd je lance la commande 'build' tu lance webpack (il sait qu'il doit consulter webpack.config.ts avant)
10/ npm run build : run permet de lancer n'importe quel script de l'objet script de package.json, ici on veut lancer celui qui est nommé build.

Ca marche !... MAIS on voudrait que celà soit automatisé pour que cela recompile quand on save et pouvoir voir le rendu du site en live comme lorsque on utilise pas webpack. Pour ça :

11/ npm install webpack-dev-server -D
12/ dans package.json ajouter le script "serve": "webpack-dev-server"
13/ npm run serve : pour l'instant webpack recompile le code à chaque fois mais en mémoire, il relance psa build, si on regarde bundle.js lui il change pas
14/ ajouter "publicPath: 'public'" dans l'output de webpack.config.js pour dire à webpack que ce qu'il compile pour le dev server doit être sauvé dans le dossier public
