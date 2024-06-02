package com.masterISI.services;

import com.masterISI.models.Filiere;
import com.masterISI.repositories.FiliereRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class FiliereService {

    private final FiliereRepository filiereRepository;

    public List<Filiere> getAllFilieres() {
        return filiereRepository.findAll();
    }

    public Filiere getFiliere(String nom) {
        return filiereRepository.findByNomFiliere(nom);
    }
}
