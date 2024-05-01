package com.masterISI.services;

import com.masterISI.repositories.FiliereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FiliereService {
    @Autowired
    FiliereRepository filiereRepository;
}
