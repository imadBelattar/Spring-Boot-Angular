package com.masterISI.models;

import jakarta.persistence.*;
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
    @JoinColumn(name = "enseignant_email")
    private Enseignant enseignant;

    @ManyToOne
    @MapsId("intituleModule")
    @JoinColumn(name = "module_intitule")
    private Module module;

    private String intitule;

    @Column(name = "vh_cours")
    private int vhCoursInterv;

    @Column(name = "vh_td")
    private int vhTDInterv;

    @Column(name = "vh_tp")
    private int vhTPInterv;

    private int evaluationInterv;
}
