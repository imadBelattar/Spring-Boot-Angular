package com.masterISI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@Data
@Entity
public class Filiere {
    @Id
    private String nomFiliere;

    @JsonBackReference
    @OneToMany(mappedBy = "filiere")
    private List<Module> modules;
}
