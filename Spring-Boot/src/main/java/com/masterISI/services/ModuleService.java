package com.masterISI.services;

import com.masterISI.models.Module;
import com.masterISI.repositories.ModuleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public Module addModule(Module module) {
        return moduleRepository.save(module);
    }

    public List<Module> getModules() {
        return moduleRepository.findAll();
    }

    public Optional<Module> getModuleById(String intitule) {
        return moduleRepository.findById(intitule);
    }

    public Module updateModule(String intitule, Module moduleDetails) {
        return moduleRepository.findById(intitule).map(module -> {
            module.setVolumeHoraireCours(moduleDetails.getVolumeHoraireCours());
            module.setVolumeHoraireTD(moduleDetails.getVolumeHoraireTD());
            module.setVolumeHoraireTP(moduleDetails.getVolumeHoraireTP());
            module.setEvaluation(moduleDetails.getEvaluation());
            module.setFiliere(moduleDetails.getFiliere());
            return moduleRepository.save(module);
        }).orElse(null);
    }
}
