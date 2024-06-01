package com.masterISI.services;

import com.masterISI.dto.EnseignantForIntervDTO;
import com.masterISI.dto.InterventionDTO;
import com.masterISI.exceptions.ResourceNotFoundException;
import com.masterISI.models.Intervention;
import com.masterISI.models.InterventionId;
import com.masterISI.repositories.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InterventionService {
    @Autowired
    InterventionRepository interventionRepository;


    public InterventionDTO convertToInterventionDTO(Intervention intervention){
        InterventionDTO dto = new InterventionDTO();
        dto.setEnseignant(new EnseignantForIntervDTO(intervention.getEnseignant().getEmail(),
                    intervention.getEnseignant().getPrenom()
                         + " " + intervention.getEnseignant().getNom()));
        dto.setModuleIntitule(intervention.getModule().getIntitule());
        dto.setIntitule(intervention.getIntitule());
        dto.setVhCoursInterv(intervention.getVhCoursInterv());
        dto.setVhTDInterv(intervention.getVhTDInterv());
        dto.setVhTPInterv(intervention.getVhTPInterv());
        dto.setEvaluationInterv(intervention.getEvaluationInterv());
        return dto;
    }

    public List<InterventionDTO> getAllInterventions() {
        return interventionRepository.findAll().stream()
                .map(this::convertToInterventionDTO)
                .collect(Collectors.toList());
    }
    public Intervention deleteIntervention(String enseignantEmail, String moduleIntitule) {
        Intervention intervention = interventionRepository.findById(new InterventionId(enseignantEmail, moduleIntitule)).orElse(null);
        if (intervention != null) {
            interventionRepository.delete(intervention);
            return intervention;
        }
        return null;
    }

    public InterventionDTO updateIntervention(InterventionDTO interventionUPD) {
        InterventionId id = new InterventionId(interventionUPD.getEnseignant().getEmail(), interventionUPD.getModuleIntitule());
        Optional<Intervention> optionalIntervention = interventionRepository.findById(id);
        if (!optionalIntervention.isPresent()) {
            throw new ResourceNotFoundException("Intervention not found with id: " + id);
        }
        Intervention intervention = optionalIntervention.get();
        intervention.setIntitule(interventionUPD.getIntitule());
        intervention.setVhCoursInterv(interventionUPD.getVhCoursInterv());
        intervention.setVhTDInterv(interventionUPD.getVhTDInterv());
        intervention.setVhTPInterv(interventionUPD.getVhTPInterv());
        intervention.setEvaluationInterv(interventionUPD.getEvaluationInterv());;
        return this.convertToInterventionDTO(interventionRepository.save(intervention));
    }
}
