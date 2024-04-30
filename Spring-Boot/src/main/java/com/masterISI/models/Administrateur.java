package com.masterISI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@PrimaryKeyJoinColumn(name = "email")
public class Administrateur extends Enseignant{
    private String password;
}
