package com.masterISI.controllers.AdministrateurController;

import com.masterISI.models.Enseignant;
import com.masterISI.services.AdministrateurService;
import com.masterISI.services.EnseignantService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//this constructor below is required for the dependency injection of services to work
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/administrateur")
public class AdministrateurController {
    private final EnseignantService enseignantService;
    private final AdministrateurService administrateurService;

    //this method is used to add an enseignant, but it's only for testing purposes.
    @PostMapping("/addEnseignant")
    public Enseignant addEnseignant() {
        Enseignant enseignant = new Enseignant();
        enseignant.setEmail("test@uca.ac.ma");
        enseignant.setNom("test");
        enseignant.setPrenom("test");
        enseignant.setPassword("test");
        return enseignantService.addEnseignant(enseignant);
    }

    @GetMapping("/enseignant/{email}")
    public ResponseEntity<?> getEnseignant(@PathVariable String email) {
        Enseignant enseignant = enseignantService.getEnseignant(email);
        return enseignant != null ? ResponseEntity.ok(enseignant) :  ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Enseignant not found");
    }

    @GetMapping("/enseignants")
    public ResponseEntity<List<Enseignant>> getEnseignantsList() {
        return ResponseEntity.ok(enseignantService.getEnseignants());

    }

    @GetMapping("/interventions")
    public ResponseEntity<?> getInterventions() {
        return ResponseEntity.ok(administrateurService.getAllInterventions());
    }
}
