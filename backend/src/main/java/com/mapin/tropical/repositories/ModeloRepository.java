package com.mapin.tropical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mapin.tropical.entities.Modelo;

@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Long> {

}
