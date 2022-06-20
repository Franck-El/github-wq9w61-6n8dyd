/*
//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// Ne s'utilise pas comme une classe pour créer une instance mais juste pour préciser la structure d'un objet. S'il est dit de type IsPerson, il comprend obligatoirement ces champs. Mais c'est plus une sorte de mémo car ça reste dans ts, en js l'objet est de type objet et a différents champs, la classe n'existe pas. Du coup on peut avoir la même structure mais définir des comportement différents dans les fonctions alors que tous les objets d'une classe auraient les mêmes fonctions

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);

    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    // ici on voit l'intérêt. dans le js person est une variable comme les autres mais avoir indiqué IsPerson ici permet d'être sûr que l'objet aura bien la forme attendue et qu'il possèdera donc le champ name
    console.log('hello ', person.name);
}

greetPerson(me)

let someone: IsPerson;

console.log(me);

*/
import './styles.css';
import { makeBody } from './html';
import { Invoice } from './classes/Invoice'
import { ListTemplate } from './classes/ListTemplate';
// ceci est possible car on a mis le export dans Invoice.ts, car on a renseigner le type module dans html et car on a modifier tsconfig dans les champs target et module en inscrivant es6 et es2015. MAIS 1/ n'est supporté que par les nouveaux navigateurs et 2/ tout n'est pas réuni en un fichier donc le navigateur doit mutliplier les requêtes => les risques d'échec. Webpack s'en occupera et résolvera ainsi ces 2 points noirs, voir les leçons webpack
import { Payment } from './classes/payment';
import { HasFormatter } from './interfaces/HasFormatter';

/*
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne); // oui on peut car on a dit que docOne était de type HasFormatter, ce qu'attend justement le tableau, on est sûr comme ça que le tableau aura que ce qu'on attend
docs.push(docTwo);

console.log(docs);
*/
makeBody();

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi';
// invTwo.amount = 400;
// Ces deux modifications sont possibles car les champs sont publiques or on préfererais qu'il soit impossible de les modifier, qu'ils soient privés ou au moins accessible en lecture uniquement

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});


// const anchor = document.querySelector('a');

// console.log(anchor.href); // retourne une erreur car ts au moment du développement ne sais pas que anchor va récupérer un objet ayant ce champ, peut se résoudre à l'aide d'un if

// if (anchor) {
//     console.log(anchor.href);

// }

// peut aussi se résoudre de la manière suivante :
// const anchor = document.querySelector('a')!; // ! = "je sais que ça va renvoyer quelque chose et je sais quoi donc ne met pas l'erreur"
// console.log(anchor.href);

// /!\ les deux ci-dessous visent le même objet mais avec le second si on ne précise pas ts ne sais pas que la classe new-item-form est appliquée à un form et que le type est HTMLFormElement or c'est utile pour la complétion intellisens si pratique
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement; // aller chercher l'id type, c'est une balise select donc HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    // on crée le bon objet de la bonne classe en fonction du choix de l'utilisateur
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        // remplacer par tuple
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values); // erreur si values n'est pas un tuple car on sait pas si l'ordre sera respecté et la fonction va alors réagir on sait pas comment => hyper pratique pour éviter les bêtises
    } else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});

// GENERICS
/*
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.name); // impossible car ts ne sais pas que l'objet retourné par la fonction possède cette propriété vu qu'on ne l'a pas précisé on a juste dit "la fonciton prend un obj en paramètre" C'est l'intérêt de ts donc on le blâme pas mais il faut trouver un moyen de pouvoir le faire malgré tout.


const addUID = <T>(obj: T) => { // <T> permet à ts de mémoriser le type de l'input comme ça il connait le type de l'output
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });
let docTwo = addUID('hello') // autorisé car <T> ne précise pas que c'est un objet

console.log(docOne.name); // possible mainenant grâce à <T>


const addUID = <T extends object>(obj: T) => { // <T> permet à ts de mémoriser le type de l'input comme ça il connait le type de l'output en spécifiant ici toutefois qu'on aura à faire à un objet donc il y a aussi à retenir le type des propriétés mais au moins c'est un objet
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello') // n'est plus autorisé grâce à extends, ce n'est pas un objet

console.log(docOne.name); // possible mainenant grâce à <T>



const addUID = <T extends { name: string }>(obj: T) => { // <T> permet à ts de mémoriser le type de l'input comme ça il connait le type de l'output en spécifiant ici toutefois qu'on aura à faire à un objet donc il y a aussi à retenir le type des propriétés mais au moins c'est un objet
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 }); // okay car on a dit que c'était un objet avec au miminum la propriété name étant un string

console.log(docOne.name);

// with interface
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T; // ici on ne veut pas définir un type car on veut rester flexible et pouvoir récupérer plusieurs types. L'ajout de <T> et T le permet. "any" aurait marché aussi mais n'aurait pas permis de retenir le type en passant la souris dessus on aurait pas plus de renseignement que "any"
    lol: any;
}

const docThree: Resource<object> = { // je lui dis que T est le type objet ici
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' },
    lol: { name: 'kiki' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet', 'roll'],
    lol: '12'
}

console.log(docThree, docFour);

const docFive: Resource<{ name: string }> = { // je lui dis que T est le type objet ici
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' },
    lol: { name: 'kiki' }
};

console.log(docFive.data.name); // pas possible avec docThree car j'ai dit que T était un objet, j'ai pas parlé du contenu, d'ailleurs intellisens retrouve name ici et pas avec docThree

console.log(docThree.lol.name);
console.log(docFive.lol.name);
// avec any c'est possible mais on pas l'info du contenu donc aucune erreur si on se trompe, d'où l'intérêt d'être plus restrictif avec <T>
*/

// ENUMS
// dans l'exemple du dessus, resourceType 3 pourrait être un livre, resourceType 4 une video, etc. les ENUMS permettent justement ça en faisant du remplacement. Utile s'il y a beaucoup d'option possible car sinon il faut mémoriser que video c'est 4, livre 3, son 2 et ainsi de suite. Là on va pouvoir nommer et TS remplacera par les bonnes valeurs indiquées une bonne fois pour toutes.

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = { // je lui dis que T est le type objet ici
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
}

console.log(docOne, docTwo);

// tuples

let arr = ['ryu', 25, true];
arr[0] = false; // possible car l'instanciation dit que arr prend string, number et boolean
arr[1] = 'yoshi';

let tup: [string, number, boolean] = ['ryu', 25, true]; // plus contraignant dit que le premier est un string , le second un nombre, le troisième un boolean. l'ordre n'est pas interchangeable et le nomnbre d'éléments doit être respecté obligatoirement.
