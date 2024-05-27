package com.masterISI.services;

import com.masterISI.models.Intervention;
import com.masterISI.models.InterventionId;
import com.masterISI.models.ResourceNotFoundException;
import com.masterISI.repositories.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InterventionService {

    @Autowired
    private InterventionRepository interventionRepository;

    public Intervention createIntervention(Intervention intervention) {
        // Example of business logic: Check if the intervention is valid before saving
        if (intervention.getVhCoursInterv() < 0 || intervention.getVhTDInterv() < 0 || intervention.getVhTPInterv() < 0) {
            throw new IllegalArgumentException("Volume horaire should be non-negative");
        }

        // Add any other business logic/validation here

        return interventionRepository.save(intervention);
    }
    public Intervention addIntervention(Intervention intervention) {
        try {
            // Validate the intervention object
            if (intervention.getInterventionId() == null) {
                throw new IllegalArgumentException("InterventionId is required");
            }
            return interventionRepository.save(intervention);
        } catch (Exception e) {
            // Log the error
            e.printStackTrace();
            throw new RuntimeException("Error saving intervention: " + e.getMessage());
        }
    }
    public List<Intervention> getInterventions() {
        return interventionRepository.findAll();
    }


    public List<Intervention> getInterventionsByEnseignantEmail(String email) {
        return interventionRepository.findByEnseignantEmail(email);
    }

    public Intervention updateIntervention(InterventionId id, Intervention interventionDetails) {
        Optional<Intervention> optionalIntervention = interventionRepository.findById(id);
        if (!optionalIntervention.isPresent()) {
            throw new ResourceNotFoundException("Intervention not found with id: " + id);
        }

        Intervention intervention = optionalIntervention.get();
        intervention.setIntitule(interventionDetails.getIntitule());
        intervention.setVhCoursInterv(interventionDetails.getVhCoursInterv());
        intervention.setVhTDInterv(interventionDetails.getVhTDInterv());
        intervention.setVhTPInterv(interventionDetails.getVhTPInterv());
        intervention.setEvaluationInterv(interventionDetails.getEvaluationInterv());

        return interventionRepository.save(intervention);
    }


}