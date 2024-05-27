export interface Intervention {
    intitule: string;
    vhCoursInterv: number;
    vhTDInterv: number;
    vhTPInterv: number;
    evaluationInterv: number;
    moduleIntitule: string;
    enseignant: {
        nom: string;
        email: string;
    };
}
