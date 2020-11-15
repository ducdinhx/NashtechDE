package com.nashtech.icecream.service;

import com.nashtech.icecream.model.Product;

import java.util.List;

public interface ProductService {
	public List<Product> getAllProducts();

	public Product saveProduct(Product u);

	public Product getProductById(long id);

	public void deleteProduct(long id);

	public boolean updateProduct(Product u);

}
