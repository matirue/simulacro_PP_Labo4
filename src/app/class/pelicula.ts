import { Actor } from "./actor";

export class Pelicula {
    id!: number;
    nombre!: string;
    tipo!: string;
    fechaDeEstreno!: string;
    cantidadDePublico!: number;
    fotoDePelicula!: string;

    actor!: Actor;
}
