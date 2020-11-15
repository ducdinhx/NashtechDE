package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
