package com.masterISI.controllers.AdministrateurController;

import com.masterISI.models.Enseignant;
import com.masterISI.models.InterventionId;
import com.masterISI.models.Module;
import com.masterISI.models.Intervention;
import com.masterISI.services.AdministrateurService;
import com.masterISI.services.EnseignantService;
import com.masterISI.services.ModuleService;
import com.masterISI.services.InterventionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdministrateurController {

    private final EnseignantService enseignantService;
    private final ModuleService moduleService;
    private final InterventionService interventionService;
    private final AdministrateurService administrateurService;

    // Add a new enseignant
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/enseignants")
    public ResponseEntity<Enseignant> addEnseignant(@RequestBody Enseignant enseignant) {
        Enseignant savedEnseignant = enseignantService.addEnseignant(enseignant);
        return new ResponseEntity<>(savedEnseignant, HttpStatus.CREATED);
    }

    // Add a new module
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/modules")
    public ResponseEntity<Module> addModule(@RequestBody Module module) {
        Module savedModule = moduleService.addModule(module);
        return new ResponseEntity<>(savedModule, HttpStatus.CREATED);
    }

    // Add a new intervention
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/interventions")
    public ResponseEntity<Intervention> addIntervention(@RequestBody Intervention intervention) {
        System.out.println("recieved intervention :\n " );
        System.out.println(intervention);
        Intervention savedIntervention = interventionService.addIntervention(intervention);

        return new ResponseEntity<>(savedIntervention, HttpStatus.CREATED);
    }

    // Get list of all enseignants
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/enseignants")
    public ResponseEntity<List<Enseignant>> getEnseignantsList() {
        List<Enseignant> enseignants = enseignantService.getEnseignants();
        return new ResponseEntity<>(enseignants, HttpStatus.OK);
    }

    // Get list of all modules
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/modules")
    public ResponseEntity<List<Module>> getModulesList() {
        List<Module> modules = moduleService.getModules();
        return new ResponseEntity<>(modules, HttpStatus.OK);
    }

    // Get list of all interventions
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/interventions")
    public ResponseEntity<List<Intervention>> getInterventionsList() {
        List<Intervention> interventions = interventionService.getInterventions();
        return new ResponseEntity<>(interventions, HttpStatus.OK);
    }

    // Get interventions by enseignant's email
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/interventions/{email}")
    public ResponseEntity<List<Intervention>> getInterventionsByEnseignantEmail(@PathVariable String email) {
        List<Intervention> interventions = interventionService.getInterventionsByEnseignantEmail(email);
        return new ResponseEntity<>(interventions, HttpStatus.OK);
    }

    // Update an existing intervention
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update")
    public ResponseEntity<Intervention> updateIntervention(@RequestBody Intervention intervention) {
        InterventionId id = intervention.getInterventionId();
        Intervention updatedIntervention = interventionService.updateIntervention(id, intervention);
        return new ResponseEntity<>(updatedIntervention, HttpStatus.OK);
    }

    // Update an existing module
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/modules/{intitule}")
    public ResponseEntity<Module> updateModule(@PathVariable String intitule, @RequestBody Module module) {
        Module updatedModule = moduleService.updateModule(intitule, module);
        if (updatedModule != null) {
            return new ResponseEntity<>(updatedModule, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get module by intitule
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/modules/{intitule}")
    public ResponseEntity<Module> getModuleById(@PathVariable String intitule) {
        Optional<Module> module = moduleService.getModuleById(intitule);
        return module.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}


