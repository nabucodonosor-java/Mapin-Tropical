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

import com.mapin.tropical.dto.MarcaDto;
import com.mapin.tropical.entities.Marca;
import com.mapin.tropical.repositories.MarcaRepository;
import com.mapin.tropical.services.exceptions.DatabaseException;
import com.mapin.tropical.services.exceptions.NotFoundException;

@Service
public class MarcaService {

	@Autowired
	private MarcaRepository repository;

	@Transactional(readOnly = true)
	public Page<MarcaDto> findAllPaged(PageRequest pageRequest, String nome) {
		Page<Marca> cidades = repository.findNome(nome, pageRequest);
		return MarcaDto.converter(cidades);
	}

	@Transactional(readOnly = true)
	public MarcaDto findById(Long id) {
		Optional<Marca> optional = repository.findById(id);
		Marca entity = optional.orElseThrow(() -> new NotFoundException("Marca não encontrada!"));
		return new MarcaDto(entity);
	}

	@Transactional
	public MarcaDto insert(MarcaDto dto) {
		Marca entity = new Marca();
		entity.setNome(dto.getNome());
		entity = repository.save(entity);
		return new MarcaDto(entity);
	}

	@Transactional
	public MarcaDto update(Long id, MarcaDto dto) {
		try {

			Marca entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity = repository.save(entity);
			return new MarcaDto(entity);

		} catch (EntityNotFoundException e) {
			throw new NotFoundException("Marca não encontrada!");
		}
	}

	public void delete(Long id) {
		try {

			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {
			throw new NotFoundException("Marca não encontrada!");
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade do DB");
		}
	}
}