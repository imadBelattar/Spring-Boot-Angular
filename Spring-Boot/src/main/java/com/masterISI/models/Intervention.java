package com.masterISI.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Intervention {
    @EmbeddedId
    private InterventionId interventionId;

    @ManyToOne
    @MapsId("emailEnseignant")
    private Enseignant enseignant;

    @ManyToOne
    @MapsId("intituleModule")
    private Module module;

    private String intitule;
    private int vhCoursInterv;
    private int vhTDInterv;
    private int vhTPInterv;
    private int evaluationInterv;
}
