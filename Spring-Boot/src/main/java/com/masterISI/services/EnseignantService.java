package com.masterISI.services;

import com.masterISI.models.Enseignant;
import com.masterISI.repositories.EnseignantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnseignantService {
    @Autowired
    EnseignantRepository enseignantRepository;

    public Enseignant getEnseignant(String email) {
        return enseignantRepository.findByEmail(email);
    }
    public Enseignant addEnseignant(Enseignant enseignant) {
        Enseignant enseignantTest = enseignantRepository.findByEmail(enseignant.getEmail());
        if (enseignantTest != null) {
            return null;
        }
        return enseignantRepository.save(enseignant);
    }
    public List<Enseignant> getEnseignants() {
        return enseignantRepository.findAll();
    }
}
