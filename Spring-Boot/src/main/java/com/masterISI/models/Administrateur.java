package com.masterISI.models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

@NoArgsConstructor
@Data
@Entity
@DiscriminatorValue("ADMINISTRATEUR")
@CrossOrigin(origins = "http://localhost:4200")
public class Administrateur extends Enseignant {}