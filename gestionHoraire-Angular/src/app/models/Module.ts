import { Filiere } from "./Filiere";


export interface Module {
    intitule: string;
    volumeHoraireCours: number;
    volumeHoraireTD: number;
    volumeHoraireTP: number;
    evaluation: number;
    filiere: Filiere;
}
