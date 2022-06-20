import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter {
    // export permet de l'exporter pour la récupérer via import
    // implements permet de s'assurer qu'elle suit la structure imposée par HasFormatter, à savoir ici : posséder une méthode format() qui retourne un string
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format() { // details est accessible ici car private accessible dans la définition de la classe
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}