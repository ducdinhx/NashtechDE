package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.Product;
import com.nashtech.icecream.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*", "http://localhost:3000"}, allowedHeaders = "*")
@RequestMapping("/api/task")
public class ProductController {
	@Autowired
	private ProductService service;

	@GetMapping("/product")
	public List<Product> getAllProducts() {
		return service.getAllProducts();
	}

	@PostMapping("/product")
	public Product saveProduct(@RequestBody Product u) {
		return service.saveProduct(u);

	}

	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable long id) throws ResourceNotFoundException {
		Product e = service.getProductById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("Product not found for this id" + id);
		}
	}

	@PutMapping("/product/{id}")
	public Product updateProduct(@PathVariable long id, Product u) throws ResourceNotFoundException {
		if (service.updateProduct(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("Product not found for this id" + id);
		}
	}

	@DeleteMapping("/product/{id}")
	public Map<String, Boolean> deleteProduct(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getProductById(id) != null) {
			service.deleteProduct(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("Product not found for this id" + id);
		}

	}

}
