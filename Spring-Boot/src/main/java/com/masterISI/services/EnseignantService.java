package com.masterISI.services;

import com.masterISI.repositories.EnseignantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnseignantService {
    @Autowired
    private EnseignantRepository enseignantRepository;
}
