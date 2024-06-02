package com.masterISI.services;

import com.masterISI.dto.ModuleDTO;
import com.masterISI.models.Filiere;
import com.masterISI.models.Module;
import com.masterISI.repositories.ModuleRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@AllArgsConstructor
@Service
public class ModuleService {
    private final ModuleRepository moduleRepository;
    private final FiliereService filiereService;

    public List<Module> getAllModules() {
        return moduleRepository.findAll();
    }

    @Transactional
    public Module updateModule(ModuleDTO moduleDTO) {
        if(!validateModule(moduleDTO)) return null;
        if(moduleRepository.findByIntitule(moduleDTO.getIntitule()) == null) return null;
        Filiere f = filiereService.getFiliere(moduleDTO.getFiliereNom());
        if(f == null) return null;
        Module m = new Module();
        m.setIntitule(moduleDTO.getIntitule());
        m.setVolumeHoraireCours(moduleDTO.getVhCours());
        m.setVolumeHoraireTD(moduleDTO.getVhTD());
        m.setVolumeHoraireTP(moduleDTO.getVhTP());
        m.setEvaluation(moduleDTO.getEvaluation());
        m.setFiliere(f);
        return moduleRepository.save(m);
    }

    private boolean validateModule(ModuleDTO moduleDTO) {
        if(moduleDTO.getVhTD() <= 0 || moduleDTO.getVhTP() <= 0 || moduleDTO.getVhCours() <= 0 || moduleDTO.getEvaluation() <= 0) return false;
        return moduleDTO.getIntitule() != null && moduleDTO.getFiliereNom() != null;
    }








}
