
/*
// tsc sandbox.ts génère le js correspondant
// tsc sdndbox.ts -w recharche à chaque enregistrement

let character = 'luigi';
let age = 30;
let isBlackBelt = false;

// character = 30; impossible de changer de type str to num ici la déclaration indique que character est du string donc ts le sais

// const circ = (diameter) => {
//     return diameter * Math.PI;
// }

// console.log(circ('hello')); est possible retourne NaN

const circ = (diameter: number) => { // definir le type évite le résultat abérant du desssus (number/string/boolean) en retournant une erreur à la compilation
    return diameter * Math.PI;
}

// arrays
let names = ['lugi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3); impossible car ts a vu que le tableau devait contenir du str
// names[0] = 3;
// names = 'hello' impossible, names est un array pas un string

let mixed = ['ken', 3, 'chun-li', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// possible car la déclaration indique à ts que le tableau peut prendre str num et bool


// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; impossible de changer le type maintenant que ts sais que ça doit être number
// ninja.skills = ['fighting', 'sneaking']; impossible car la propriété n'existe pas
// ninja = ''; impossible c'est un obj
ninja = { // possible de redéfinir l'obj mais en gardant les champs et leurs types
    name: 'yoshi',
    belt: 'orange',
    age: 40
}
*/
/*
// explicit types
let character: string; // precise it will be a string even if the value is unknown for the moment
let age: number;
let isLoggedIn: boolean;

// age = 'luigi' // erreur car j'ai dis number
age = 30;

// arrays
let ninjas: string[];

// /!\ ninjas.push('shaun') impossible car le tableau n'est pas initialisé. Là on a juste dit à ts "il y aura un tableau de string dans le futur" mais il n'est pas initialiser en tant que tableau dans js qui a juste un var ninjas.

// ninjas = [10, 23]; // non car on a mis string
ninjas = ['yoshi', 'mario'];

let tab: string[] = []; // initialise en plus le tableau => push possible

// union types
let mixed: (string | number)[] = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false); // erreur car le tableau n'accepte que string et number d'après ma définition
console.log(mixed);

let uid: string | number; // pas de paranthèses car ce n'est pas devant [] vu que c'est une variable normale ici
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // autorisé car array est un type d'objet, pour être plus précis sur le type d'objet, voir la suite

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black',
    // skills: 'good' // impossible car n'est pas prévu dans ma définition
};
*/
/*
// dynamic types
let age: any = 25; // n'est pas de type number mais any => pourra prendre un booleen dans le futur par exemple. On previent donc que le type ne sera pas fixe ici. => c'est le comportement initial de js en fait, on perd le bénéfice de ts mais c'est parfois utile

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 25 };
console.log(ninja);
*/
/*
// tsc --init  génère un tsconfig.json
// dedans, le paramètre "rootDir" informe que je veux que ts compile les ts de src

// et "outDir" dit d'envoyer les js obtenus dans public

// il sait quoi faire donc j'ai juste à lancer "tsc" sans préciser il va aller regarder où il faut (ou "tsc -w" si besoin)

// /!\ a la fin de tsconfig.json, ajouter "include": ["src"] sinon un ts en dehors de src sera transcris en js et mis dans public aussi. En fait ts regarde la racine et rootDir lui dit qu'il doit en plus rentrer regarder dans src mais pas qu'il doit ignorer le contenu de la racine. Cette commande le permet donc.
*/
/* functions
// let greet = () => {
//     console.log('hello, wolrd');
// };

// greet = 'hello'; // impossible car c'est une fonction

let greet: Function; // /!\ majuscule

// greet = 'hello'; // toujours impossible car c'est une fonction MAIS on peut la définir par la suite 
greet = () => {
    console.log('hello, again');
}

const add = (a: number, b: number, c?: number | string, d: number | string = 10) => {
    console.log(a + b);
    console.log(c);
    console.log(d);

};

add(5, 10);
// add(5, '10'); // impossible b est un number
// add(5); // impossible, il faut un second paramètre => voir c ou d pour un paramètre optionnel de type number ou string dont la valeur est undefined (c avec le ?) ou prédéfini par défaut à 10 (d sans le ? dans ce cas)

add(5, 10, 12, '20');

const minus = (a: number, b: number) => {
    return a - b;
};

let result = minus(10, 7);
// result = 'something else'; // impossible car l'étape du dessus a indiqué à ts que result etait number

const minusTwo = (a: number, b: number): number => {
    return a - b;
};
// cette écriture peut-être utilisée pour indiquer le type du contenu retourné, ts le détermine mais l'avantage ici est juste que les autres dev le voient rapidement sans regarder toute la fonction. Une fonction qui ne renvoie rien a un return de type void
*/

/* Aliases
// exposition du probleme avec les 3 fonctions ci-dessous, la liste des types peut-être longue ET redondante, on peut vouloir définir le type de uid par exemple pour ne pas le répéter chaque fois

const logDetailsOne = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greetOne = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
};

const greetAgainOne = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
};


// exemple ici
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };
    
const logDetailsTwo = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greetTwo = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};

const greetAgainTwo = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};
*/
/* function signature : définie la "forme" d'une fonction ici dans l'exemple 1 on dit que greet sera une fonction de deux paramètres string ne renvoyant rien

// exemple 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);

}

// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);

// } // n'aurait pas marché car le 2nd paramètre doit être string

// exemple 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo; // necessaire d'avoir un else car j'ai dit qu'on retourne un chiffre pas "rien"
    }
}

// exemple 3
let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

logDetails = (ninja: person) => {
    // fonctionne car person respecte ma définition de logDetails
    console.log(`${ninja.name} is ${ninja.age} years old`);
} // aucun rapport mais ts va rajouter le ; manquant ici au cas où
*/
/*

"module": "commonjs", // modifier en "module": "es2015" version qui supporte import

"target": "es6", // on cible les navigateurs supportant es6 (aussi appellé es2015... lol)

Important : maintenant la balise script dans le html doit préciser le type="module"

*/