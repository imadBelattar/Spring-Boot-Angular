package com.masterISI.controllers.AdministrateurController;


import com.masterISI.dto.ModuleDTO;
import com.masterISI.models.Module;
import com.masterISI.services.ModuleService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
public class ModuleController {
    private final ModuleService moduleService;
    @GetMapping("/modules")
    public ResponseEntity<List<Module>> getModulesList() {
        List<Module> modules = moduleService.getAllModules();
        return ResponseEntity.ok(modules);
    }

    @PutMapping("/updateModule")
    public ResponseEntity<Module> updateModule(@RequestBody ModuleDTO module) {
        Module updatedModule = moduleService.updateModule(module);
        if (updatedModule != null) {
            return new ResponseEntity<>(updatedModule, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
