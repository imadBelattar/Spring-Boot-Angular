package com.masterISI.services;

import com.masterISI.models.Module;
import com.masterISI.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {
    @Autowired
    ModuleRepository moduleRepository;

   public List<Module> getAllModules() {
        return moduleRepository.findAll();
    }
}
