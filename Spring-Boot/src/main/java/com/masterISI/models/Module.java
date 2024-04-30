package com.masterISI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
@Entity
public class Module {
    @Id
    private String intitule;
    private int volumeHoraireCours;
    private int volumeHoraireTD;
    private int volumeHoraireTP;
    private int evaluation;
    @ManyToOne
    private Filiere filiere;

    @JsonBackReference
    @OneToMany(mappedBy = "module")
    private List<Intervention> interventions;
}
