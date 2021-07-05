package com.mapin.tropical.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.mapin.tropical.entities.Modelo;
import com.mapin.tropical.entities.Peca;

public class PecaDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank
	private String nome;

	@NotBlank
	private String imgUrl;

	private String descricao;

	private List<ModeloDto> modelos = new ArrayList<>();

	public PecaDto() {
	}

	public PecaDto(Peca entity) {
		id = entity.getId();
		nome = entity.getNome();
		imgUrl = entity.getImgUrl();
		descricao = entity.getDescricao();
	}

	public PecaDto(Peca entity, Set<Modelo> modelos) {
		modelos.forEach(modelo -> this.modelos.add(new ModeloDto(modelo)));
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

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<ModeloDto> getModelos() {
		return modelos;
	}

}
