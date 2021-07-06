package com.mapin.tropical.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.mapin.tropical.entities.Categoria;
import com.mapin.tropical.entities.Marca;
import com.mapin.tropical.entities.Peca;

public class PecaDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank
	private String nome;

	@NotBlank
	private String imgUrl;

	private String descricao;

	private List<MarcaDto> marcas = new ArrayList<>();

	private List<CategoriaDto> categorias = new ArrayList<>();

	public PecaDto() {
	}

	public PecaDto(Peca entity) {
		id = entity.getId();
		nome = entity.getNome();
		imgUrl = entity.getImgUrl();
		descricao = entity.getDescricao();
	}

	public PecaDto(Peca entity, Set<Marca> marcas, Set<Categoria> categorias) {
		this(entity);
		marcas.forEach(marca -> this.marcas.add(new MarcaDto(marca)));
		categorias.forEach(categoria -> this.categorias.add(new CategoriaDto(categoria)));
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

	public List<MarcaDto> getMarcas() {
		return marcas;
	}

	public List<CategoriaDto> getCategorias() {
		return categorias;
	}

}
