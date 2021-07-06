package com.mapin.tropical.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mapin.tropical.entities.Categoria;
import com.mapin.tropical.entities.Marca;
import com.mapin.tropical.entities.Peca;

@Repository
public interface PecaRepository extends JpaRepository<Peca, Long> {
	
	@Query("SELECT DISTINCT obj FROM Peca obj INNER JOIN obj.categorias cat WHERE "
			+ "(COALESCE(:categorias) IS NULL OR cat IN :categorias) AND "
			+ "(LOWER(obj.nome) LIKE LOWER(CONCAT('%',:nome,'%'))) ")
	Page<Peca> findByCategorias(List<Categoria> categorias, String nome, Pageable pageable);
	
	@Query("SELECT obj FROM Peca obj JOIN FETCH obj.categorias WHERE obj IN :pecas")
	List<Peca> findByCategorias(List<Peca> pecas);
	
	@Query("SELECT DISTINCT obj FROM Peca obj INNER JOIN obj.marcas m WHERE "
			+ "(COALESCE(:marcas) IS NULL OR m IN :marcas) AND "
			+ "(LOWER(obj.nome) LIKE LOWER(CONCAT('%',:nome,'%'))) ")
	Page<Peca> findByMarcas(List<Marca> marcas, String nome, Pageable pageable);
	
	@Query("SELECT obj FROM Peca obj JOIN FETCH obj.marcas WHERE obj IN :pecas")
	List<Peca> findByMarcas(List<Peca> pecas);

}
