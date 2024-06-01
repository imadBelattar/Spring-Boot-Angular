import { InterventionHt } from "./interventionHt";

export interface Enseignant {
    email: string;
    nom: string;
    prenom: string;
    interventions: InterventionHt[];
}
