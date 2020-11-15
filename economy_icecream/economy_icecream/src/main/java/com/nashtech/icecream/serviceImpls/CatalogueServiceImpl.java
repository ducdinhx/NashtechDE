package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.Catalogue;
import com.nashtech.icecream.repository.CatalogueRepository;
import com.nashtech.icecream.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CatalogueServiceImpl implements CatalogueService {

	@Autowired
	private CatalogueRepository repository;

	@Override
	public List<Catalogue> getAllCatalogues() {
		return repository.findAll();
	}

	@Override
	public Catalogue saveCatalogue(Catalogue u) {
		return repository.save(u);
	}

	@Override
	public Catalogue getCatalogueById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteCatalogue(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateCatalogue(Catalogue u) {
		if (repository.findById(u.getCatalogueId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}


}
