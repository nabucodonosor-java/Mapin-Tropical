package com.mapin.tropical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mapin.tropical.entities.Marca;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {

}
