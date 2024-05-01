package com.masterISI.repositories;

import com.masterISI.models.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministrateurRepository extends JpaRepository<Administrateur, String> {
}
