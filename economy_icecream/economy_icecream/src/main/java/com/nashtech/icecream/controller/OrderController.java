package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.Order;
import com.nashtech.icecream.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
public class OrderController {
	@Autowired
	private OrderService service;

	@GetMapping("/order")
	public List<Order> getAllOrders() {
		return service.getAllOrders();
	}

	@PostMapping("/order")
	public Order saveOrder(@RequestBody Order u) {
		return service.saveOrder(u);

	}

	@GetMapping("/order/{id}")
	public Order getOrderById(@PathVariable long id) throws ResourceNotFoundException {
		Order e = service.getOrderById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("Order not found for this id" + id);
		}

	}

	@PutMapping("/order/{id}")
	public Order updateOrder(@PathVariable long id, Order u) throws ResourceNotFoundException {
		if (service.updateOrder(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("Order not found for this id" + id);
		}
	}
	

	@DeleteMapping("/order/{id}")
	public Map<String, Boolean> deleteOrder(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getOrderById(id) != null) {
			service.deleteOrder(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("Order not found for this id" + id);
		}

	}


}
