package com.masterISI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Enseignant {
    @Id
    private String email;
    private String nom;
    private String prenom;

    @JsonBackReference
    @OneToMany(mappedBy = "enseignant")
    private List<Intervention> interventions;
}
