package com.masterISI.controllers.AdministrateurController;


import com.masterISI.models.Module;
import com.masterISI.services.ModuleService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
