package com.masterISI.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InterventionDTO {
    private String EnseignantNom;
    private String ModuleIntitule;
    private String intitule;
    private int vhCoursInterv;
    private int vhTDInterv;
    private int vhTPInterv;
    private int evaluationInterv;

}
