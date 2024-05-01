package com.masterISI.services;

import com.masterISI.repositories.AdministrateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministrateurService {
    @Autowired
    AdministrateurRepository administrateurRepository;
}
