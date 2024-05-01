package com.masterISI.controllers.AdministrateurController;

import com.masterISI.models.Enseignant;
import com.masterISI.services.AdministrateurService;
import com.masterISI.services.EnseignantService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//this constructor below is required for the dependency injection of services to work
@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/administrateur")
public class AdministrateurController {
    private final EnseignantService enseignantService;
    private final AdministrateurService administrateurService;

    //this method is used to add an enseignant, but it's only for testing purposes.
    @PostMapping("/addEnseignant")
    public Enseignant addEnseignant() {
        Enseignant enseignant = new Enseignant();
        enseignant.setEmail("imad.belattar.dev@gmail.com");
        enseignant.setNom("Belattar");
        enseignant.setPrenom("Imad");
        return enseignantService.addEnseignant(enseignant);
    }

    @GetMapping("/enseignants")
    public List<Enseignant> getEnseignantsList() {
        return enseignantService.getEnseignants();
    }

}
