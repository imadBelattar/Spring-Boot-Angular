package com.masterISI.controllers.AdministrateurController;


import com.masterISI.models.Intervention;
import com.masterISI.services.InterventionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/intervention")
public class InterventionController {

    private final InterventionService interventionService;

    @GetMapping("/interventions")
    public ResponseEntity<?> getInterventions() {
        return ResponseEntity.ok(interventionService.getAllInterventions());
    }


    @DeleteMapping("/deleteIntervention/{enseignantEmail}/{moduleIntitule}")
    public ResponseEntity<String> deleteIntervention(@PathVariable String enseignantEmail, @PathVariable String moduleIntitule) {
        System.out.println("enseignantEmail = " + enseignantEmail);
        System.out.println("moduleIntitule = " + moduleIntitule);
        Intervention deletedIntervention = interventionService.deleteIntervention(enseignantEmail, moduleIntitule);
        if (deletedIntervention == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Intervention not found !");
        }
        return ResponseEntity.ok("Intervention supprimée avec succès!");
    }

}
