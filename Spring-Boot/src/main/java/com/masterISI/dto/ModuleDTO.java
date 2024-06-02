package com.masterISI.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleDTO {
    private String intitule;
    private int vhCours;
    private int vhTD;
    private int vhTP;
    private int evaluation;
    private String filiereNom;
}
