package com.masterISI.controllers.AdministrateurController;

import com.masterISI.services.EnseignantService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//this constructor below is required for the dependency injection of services to work
@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/administrateur")
public class AdministrateurController {
    private final EnseignantService enseignantService;

}
