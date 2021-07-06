package com.mapin.tropical.services;

import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.mapin.tropical.dto.CategoriaDto;
import com.mapin.tropical.dto.MarcaDto;
import com.mapin.tropical.dto.PecaDto;
import com.mapin.tropical.dto.UriDto;
import com.mapin.tropical.entities.Categoria;
import com.mapin.tropical.entities.Marca;
import com.mapin.tropical.entities.Peca;
import com.mapin.tropical.repositories.CategoriaRepository;
import com.mapin.tropical.repositories.MarcaRepository;
import com.mapin.tropical.repositories.PecaRepository;
import com.mapin.tropical.services.exceptions.DatabaseException;
import com.mapin.tropical.services.exceptions.NotFoundException;

@Service
public class PecaService {

	@Autowired
	private PecaRepository repository;

	@Autowired
	private MarcaRepository marcaRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private S3Service s3Service;

	@Transactional(readOnly = true)
	public Page<PecaDto> findAllPagedByMarcas(PageRequest pageRequest, Long marcaId, String nome) {
		List<Marca> listMarcas = (marcaId == 0) ? null : Arrays.asList(marcaRepository.getOne(marcaId));
		Page<Peca> page = repository.findByMarcas(listMarcas, nome, pageRequest);
		repository.findByMarcas(page.toList());
		return page.map(x -> new PecaDto(x, x.getMarcas(), x.getCategorias()));
	}

	@Transactional(readOnly = true)
	public Page<PecaDto> findAllPagedByCategorias(PageRequest pageRequest, Long categoriaId, String nome) {
		List<Categoria> listCategorias = (categoriaId == 0) ? null
				: Arrays.asList(categoriaRepository.getOne(categoriaId));
		Page<Peca> page = repository.findByCategorias(listCategorias, nome, pageRequest);
		repository.findByCategorias(page.toList());
		return page.map(x -> new PecaDto(x, x.getMarcas(), x.getCategorias()));
	}

	@Transactional(readOnly = true)
	public PecaDto findById(Long id) {
		Optional<Peca> optional = repository.findById(id);
		Peca entity = optional.orElseThrow(() -> new NotFoundException("Peça não encontrada!"));
		return new PecaDto(entity, entity.getMarcas(), entity.getCategorias());
	}

	@Transactional
	public PecaDto insert(PecaDto dto) {
		Peca entity = new Peca();
		copyToEntity(entity, dto);
		entity = repository.save(entity);
		return new PecaDto(entity);
	}
	
	@Transactional
	public PecaDto update(Long id, PecaDto dto) {
		
		try {
			
			Peca entity = repository.getOne(id);
			copyToEntity(entity, dto);
			entity = repository.save(entity);
			return new PecaDto(entity);
			
			
		} catch (EntityNotFoundException e) {
			throw new NotFoundException("Peça não encontrada!");
		}
		
	}
	
	public void delete(Long id) {
		try {
			
			repository.deleteById(id);
			
		} catch (EmptyResultDataAccessException e) {
			throw new NotFoundException("Peça não encontrada!");
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação no DB");
		}
	}

	private void copyToEntity(Peca entity, PecaDto dto) {

		entity.setNome(dto.getNome());
		entity.setImgUrl(dto.getImgUrl());
		entity.setDescricao(dto.getDescricao());

		entity.getCategorias().clear();
		entity.getMarcas().clear();

		for (CategoriaDto catDto : dto.getCategorias()) {
			Categoria cat = categoriaRepository.getOne(catDto.getId());
			entity.getCategorias().add(cat);
		}

		for (MarcaDto mDto : dto.getMarcas()) {
			Marca marca = marcaRepository.getOne(mDto.getId());
			entity.getMarcas().add(marca);
		}

	}

	public UriDto uploadFile(MultipartFile file) {

		URL url = s3Service.uploadFile(file);

		return new UriDto(url.toString());
	}

}
