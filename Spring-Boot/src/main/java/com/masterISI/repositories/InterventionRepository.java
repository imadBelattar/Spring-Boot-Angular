package com.masterISI.repositories;

import com.masterISI.models.Intervention;
import com.masterISI.models.InterventionId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InterventionRepository extends JpaRepository<Intervention, InterventionId> {
    List<Intervention> findByEnseignantEmail(String email);


}
