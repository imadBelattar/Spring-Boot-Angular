import { Enseignant } from "./Enseignant";
import { InterventionId } from "./InterventionId";
import { Module } from "./Module";

export interface Intervention {
    interventionId: InterventionId;
    enseignant: Enseignant;
    module: Module;
    intitule: string;
    vhCoursInterv: number;
    vhTDInterv: number;
    vhTPInterv: number;
    evaluationInterv: number;
}