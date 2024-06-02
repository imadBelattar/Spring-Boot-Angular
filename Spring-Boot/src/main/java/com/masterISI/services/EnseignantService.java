package com.masterISI.services;

import com.masterISI.models.Enseignant;
import com.masterISI.repositories.EnseignantRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class EnseignantService {

    private final EnseignantRepository enseignantRepository;

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
    public List<Enseignant> getAllEnseignants() {
        return enseignantRepository.findAll();
    }
}
