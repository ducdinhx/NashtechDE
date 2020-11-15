package com.nashtech.icecream.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Entity
@Table(name = "catalogue")
public class Catalogue implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long catalogueId;
	private String name;
	@OneToMany(mappedBy = "catalogue", cascade = { CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH })
	@JsonIgnore
	private List<Product> products;
	
	public Catalogue() {
		
	}
	

	public Catalogue(String name) {
		
		this.name = name;
	}


	public long getCatalogueId() {
		return catalogueId;
	}

	public void setCatalogueId(long catalogueId) {
		this.catalogueId = catalogueId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	

}
