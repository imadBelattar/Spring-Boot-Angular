package com.masterISI.controllers.AdministrateurController;


import com.masterISI.dto.ApiResponse;
import com.masterISI.dto.InterventionDTO;
import com.masterISI.models.Intervention;
import com.masterISI.services.InterventionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/intervention")
public class InterventionController {

    private final InterventionService interventionService;

    @GetMapping("/interventions")
    public ResponseEntity<ApiResponse<List<InterventionDTO>>> getInterventions() {
        List<InterventionDTO> interventions = interventionService.getAllInterventions();
        return ResponseEntity.ok(new ApiResponse<>(true,"Liste des interventions",interventions));
    }


    @DeleteMapping("/deleteIntervention/{enseignantEmail}/{moduleIntitule}")
    public ResponseEntity<String> deleteIntervention(@PathVariable String enseignantEmail, @PathVariable String moduleIntitule) {
        Intervention deletedIntervention = interventionService.deleteIntervention(enseignantEmail, moduleIntitule);
        if (deletedIntervention == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Intervention non trouvée !");
        }
        return ResponseEntity.ok("Intervention supprimée avec succès!");
    }

}
