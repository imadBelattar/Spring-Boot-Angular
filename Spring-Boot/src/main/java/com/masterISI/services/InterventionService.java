package com.masterISI.services;

import com.masterISI.repositories.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterventionService {
    @Autowired
    InterventionRepository interventionRepository;
}
