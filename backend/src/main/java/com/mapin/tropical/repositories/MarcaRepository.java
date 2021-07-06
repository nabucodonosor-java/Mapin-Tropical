package com.mapin.tropical.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mapin.tropical.entities.Marca;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {
	
	@Query("SELECT obj FROM Marca obj WHERE (LOWER(obj.nome) LIKE LOWER(CONCAT('%',:nome,'%'))) ")
	Page<Marca> findNome(String nome, Pageable pageable);

}
