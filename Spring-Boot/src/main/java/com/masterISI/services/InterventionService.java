package com.masterISI.services;

import com.masterISI.dto.InterventionDTO;
import com.masterISI.models.Intervention;
import com.masterISI.repositories.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InterventionService {
    @Autowired
    InterventionRepository interventionRepository;


    public InterventionDTO convertToInterventionDTO(Intervention intervention){
        InterventionDTO dto = new InterventionDTO();
        dto.setEnseignantNom(intervention.getEnseignant().getPrenom() + " " + intervention.getEnseignant().getNom());
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
}
