package com.mapin.tropical.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mapin.tropical.dto.CategoriaDto;
import com.mapin.tropical.entities.Categoria;
import com.mapin.tropical.repositories.CategoriaRepository;
import com.mapin.tropical.services.exceptions.DatabaseException;
import com.mapin.tropical.services.exceptions.NotFoundException;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository repository;
	
	@Transactional(readOnly = true)
	public Page<CategoriaDto> findAllPaged(PageRequest pageRequest, String nome) {
		Page<Categoria> categorias = repository.findNome(nome, pageRequest);
		return CategoriaDto.converter(categorias);
	}
	
	@Transactional(readOnly = true)
	public CategoriaDto findById(Long id) {
		Optional<Categoria> optional = repository.findById(id);
		Categoria categoria = optional.orElseThrow(() -> new NotFoundException("Categoria não encontrada!"));
		return new CategoriaDto(categoria);
	}
	
	@Transactional
	public CategoriaDto insert(CategoriaDto dto) {
		Categoria entity = new Categoria();
		entity.setNome(dto.getNome());
		entity = repository.save(entity);
		return new CategoriaDto(entity);
	}
	
	@Transactional
	public CategoriaDto update(Long id, CategoriaDto dto) {
		try {
			
			Categoria entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity = repository.save(entity);
			return new CategoriaDto(entity);
			
		} catch (EntityNotFoundException e) {
			throw new NotFoundException("Categoria não encontrada!");
		}
	}
	
	public void delete(Long id) {
		try {
			
			repository.deleteById(id);
			
		} catch (EmptyResultDataAccessException e) {
			throw new NotFoundException("Especialidade não encontrada!");
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade do DB");
		}
	}
}
