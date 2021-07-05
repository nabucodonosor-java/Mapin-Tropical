package com.mapin.tropical.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.mapin.tropical.entities.Modelo;
import com.mapin.tropical.entities.Peca;

public class ModeloDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank
	private String nome;

	private MarcaDto marca;

	private List<PecaDto> pecas = new ArrayList<>();

	public ModeloDto() {
	}

	public ModeloDto(Modelo entity) {
		id = entity.getId();
		marca = new MarcaDto(entity.getMarca());
	}

	public ModeloDto(Modelo entity, Set<Peca> pecas) {
		this(entity);
		pecas.forEach(peca -> this.pecas.add(new PecaDto(peca)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public MarcaDto getMarca() {
		return marca;
	}

	public void setMarca(MarcaDto marca) {
		this.marca = marca;
	}

	public List<PecaDto> getPecas() {
		return pecas;
	}

}
