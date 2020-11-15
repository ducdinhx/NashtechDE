package com.nashtech.icecream.service;

import com.nashtech.icecream.model.Catalogue;

import java.util.List;

public interface CatalogueService {
	public List<Catalogue> getAllCatalogues();

	public Catalogue saveCatalogue(Catalogue u);

	public Catalogue getCatalogueById(long id);

	public void deleteCatalogue(long id);

	public boolean updateCatalogue(Catalogue u);


}
