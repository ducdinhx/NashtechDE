package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.Catalogue;
import com.nashtech.icecream.service.CatalogueService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/api/task")
public class CatalogueController {
	
	private CatalogueService service;

	public CatalogueController(CatalogueService service) {
		this.service = service;
	}

	@GetMapping("/catalogue")
	public List<Catalogue> getAllCatalogues() {
		return service.getAllCatalogues();
	}

	@PostMapping("/catalogue")
	public Catalogue saveCatalogue(@RequestBody Catalogue u) {
		return service.saveCatalogue(u);

	}

	@GetMapping("/catalogue/{id}")
	public Catalogue getCatalogueById(@PathVariable long id) throws ResourceNotFoundException {
		Catalogue e = service.getCatalogueById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("Catalogue not found for this id" + id);
		}

	}

	@PutMapping("/catalogue/{id}")
	public Catalogue updateCatalogue(@PathVariable long id, Catalogue u) throws ResourceNotFoundException {
		if (service.updateCatalogue(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("Catalogue not found for this id" + id);
		}
	}

	@DeleteMapping("/catalogue/{id}")
	public Map<String, Boolean> deleteCatalogue(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getCatalogueById(id) != null) {
			service.deleteCatalogue(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("Catalogue not found for this id" + id);
		}

	}

}
