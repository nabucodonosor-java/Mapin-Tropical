package com.mapin.tropical.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.mapin.tropical.entities.Marca;

public class MarcaDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank
	private String nome;

	public MarcaDto() {
	}

	public MarcaDto(Marca entity) {
		id = entity.getId();
		nome = entity.getNome();
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

}
