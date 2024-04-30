package com.masterISI.repositories;

import com.masterISI.models.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnseignantRepository extends JpaRepository<Enseignant, String> {
}
