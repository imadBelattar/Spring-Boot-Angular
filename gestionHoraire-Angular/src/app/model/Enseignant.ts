import { Intervention } from "./Intervention";

export interface Enseignant {
    email: string;
    nom: string;
    prenom: string;
    interventions: Intervention[];
}
