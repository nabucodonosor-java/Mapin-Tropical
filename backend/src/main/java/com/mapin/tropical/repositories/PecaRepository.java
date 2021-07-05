package com.mapin.tropical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mapin.tropical.entities.Peca;

@Repository
public interface PecaRepository extends JpaRepository<Peca, Long> {

}
