package com.masterISI.controllers.AdministrateurController;

import com.masterISI.models.Enseignant;
import com.masterISI.services.EnseignantService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
public class EnseignantController {
    private final EnseignantService enseignantService;


    @GetMapping("/enseignants")
    public ResponseEntity<List<Enseignant>> getEnseignantsList() {
        List<Enseignant> enseignants = enseignantService.getAllEnseignants();
        return ResponseEntity.ok(enseignants);
    }

    @GetMapping("/enseignantRole/{email}")
    public ResponseEntity<String> getEnseignantRole(@PathVariable String email) {
        String role = enseignantService.getRoleByEmail(email);
        return ResponseEntity.ok(role);
    }

}
