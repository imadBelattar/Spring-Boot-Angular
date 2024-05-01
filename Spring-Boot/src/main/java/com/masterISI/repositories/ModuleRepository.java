package com.masterISI.repositories;

import com.masterISI.models.Module;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<Module, String> {
}
