package com.masterISI.repositories;

import com.masterISI.models.Intervention;
import com.masterISI.models.InterventionId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterventionRepository extends JpaRepository<Intervention, InterventionId> {
}
