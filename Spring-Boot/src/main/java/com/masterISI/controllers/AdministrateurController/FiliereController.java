package com.masterISI.controllers.AdministrateurController;


import com.masterISI.models.Filiere;
import com.masterISI.services.FiliereService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
public class FiliereController {

    private final FiliereService filiereService;
    @GetMapping("/filieres")
    public ResponseEntity<List<Filiere>> getFilieresList() {
        List<Filiere> filieres = filiereService.getAllFilieres();
        return ResponseEntity.ok(filieres);
    }
}
