// classes
/* la méthode "développée"
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number; // ici public pour l'exemple car par défaut c'est le cas, private ne serait pas accessible en dehors de la classe elle même, readonly est accessible de partout mais non modifiable

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() { // details est accessible ici car private accessible dans la définition de la classe
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
*/
/* la méthode "raccourcie" (nécessite de préciser le modificateur d'accès : public/private/readonly) */
import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
    // export permet de l'exporter pour la récupérer via import
    // implements permet de s'assurer qu'elle suit la structure imposée par HasFormatter, à savoir ici : posséder une méthode format() qui retourne un string
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() { // details est accessible ici car private accessible dans la définition de la classe
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}