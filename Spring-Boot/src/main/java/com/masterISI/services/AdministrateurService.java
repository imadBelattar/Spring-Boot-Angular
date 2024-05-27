package com.masterISI.services;

import com.masterISI.dto.InterventionDTO;
import com.masterISI.models.Intervention;
import com.masterISI.repositories.AdministrateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministrateurService {
    private final AdministrateurRepository administrateurRepository;
    private final InterventionService interventionService;

    public AdministrateurService(AdministrateurRepository administrateurRepository, InterventionService interventionService) {
        this.administrateurRepository = administrateurRepository;
        this.interventionService = interventionService;
    }


}
