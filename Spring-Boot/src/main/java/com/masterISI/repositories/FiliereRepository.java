package com.masterISI.repositories;

import com.masterISI.models.Filiere;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FiliereRepository extends JpaRepository<Filiere, String> {
    Filiere findByNomFiliere(String filiereNom);
}
