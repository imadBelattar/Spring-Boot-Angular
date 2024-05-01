package com.masterISI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
@Entity
public class Module {
    @Id
    private String intitule;
    @Column(name = "vh_cours")
    private int volumeHoraireCours;
    @Column(name = "vh_td")
    private int volumeHoraireTD;
    @Column(name = "vh_tp")
    private int volumeHoraireTP;
    private int evaluation;
    @ManyToOne
    @JoinColumn(name = "filiere_nom")
    private Filiere filiere;

    @JsonBackReference
    @OneToMany(mappedBy = "module")
    private List<Intervention> interventions;
}
