package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
