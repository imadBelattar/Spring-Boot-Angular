package com.masterISI.controllers.AdministrateurController;

import com.masterISI.dto.InterventionDTO;
import com.masterISI.exceptions.InterventionAlreadyExistsException;
import com.masterISI.exceptions.ValidationException;
import com.masterISI.models.Enseignant;
import com.masterISI.models.Intervention;
import com.masterISI.services.AdministrateurService;
import com.masterISI.services.EnseignantService;
import com.masterISI.services.InterventionService;
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
    private final InterventionService interventionService;
    private final AdministrateurService administrateurService;

    @GetMapping("/enseignant/{email}")
    public ResponseEntity<?> getEnseignant(@PathVariable String email) {
        Enseignant enseignant = enseignantService.getEnseignant(email);
        return enseignant != null ? ResponseEntity.ok(enseignant) :  ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Enseignant not found");
    }

    @GetMapping("/enseignants")
    public ResponseEntity<List<Enseignant>> getEnseignantsList() {
        return ResponseEntity.ok(enseignantService.getAllEnseignants());

    }
    @PostMapping("/createIntervention")
    public ResponseEntity<String> addIntervention(@RequestBody Intervention intervention) {
        
        try {
            interventionService.addIntervention(intervention);
            return ResponseEntity.status(HttpStatus.CREATED).body("Intervention créée avec succès !");
        } catch (InterventionAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur inattendue est survenue : " + e.getMessage());
        }
    }


    @PutMapping("/update")
    public ResponseEntity<InterventionDTO> updateIntervention(@RequestBody InterventionDTO intervention) {
        System.out.println(intervention);
        InterventionDTO updatedIntervention = interventionService.updateIntervention(intervention);
        return new ResponseEntity<>(updatedIntervention, HttpStatus.OK);
    }


}
