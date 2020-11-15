package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.Product;
import com.nashtech.icecream.repository.ProductRepository;
import com.nashtech.icecream.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;

	@Override
	public List<Product> getAllProducts() {
		return repository.findAll();
	}

	@Override
	public Product saveProduct(Product u) {
		return repository.save(u);
	}

	@Override
	public Product getProductById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteProduct(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateProduct(Product u) {
		if (repository.findById(u.getProductId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}

}
