package com.masterISI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "role", discriminatorType = DiscriminatorType.STRING, length = 20)
@DiscriminatorValue("ENSEIGNANT")
public class Enseignant {
    @Id
    private String email;
    private String nom;
    private String prenom;
    private String password;

    @JsonBackReference
    @OneToMany(mappedBy = "enseignant")
    private List<Intervention> interventions;
}
