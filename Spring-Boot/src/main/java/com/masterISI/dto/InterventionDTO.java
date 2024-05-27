package com.masterISI.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InterventionDTO {
    private EnseignantForIntervDTO enseignant;
    private String moduleIntitule;
    private String intitule;
    private int vhCoursInterv;
    private int vhTDInterv;
    private int vhTPInterv;
    private int evaluationInterv;

}
