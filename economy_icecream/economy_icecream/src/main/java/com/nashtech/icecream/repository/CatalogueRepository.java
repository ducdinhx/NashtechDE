package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.Catalogue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogueRepository extends JpaRepository<Catalogue, Long> {

}
