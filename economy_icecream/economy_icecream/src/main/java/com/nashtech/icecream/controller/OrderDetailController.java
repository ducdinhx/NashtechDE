package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.OrderDetail;
import com.nashtech.icecream.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
public class OrderDetailController {
	@Autowired
	private OrderDetailService service;

	@GetMapping("/orderdetail")
	public List<OrderDetail> getAllOrderDetails() {
		return service.getAllOrderDetails();
	}

	@PostMapping("/orderdetail")
	public OrderDetail saveOrderDetail(@RequestBody OrderDetail u) {
		return service.saveOrderDetail(u);

	}

	@GetMapping("/orderdetail/{id}")
	public OrderDetail getOrderDetailById(@PathVariable long id) throws ResourceNotFoundException {
		OrderDetail e = service.getOrderDetailById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("OrderDetail not found for this id" + id);
		}

	}

	@PutMapping("/orderdetail/{id}")
	public OrderDetail updateOrderDetail(@PathVariable long id, OrderDetail u) throws ResourceNotFoundException {
		if (service.updateOrderDetail(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("OrderDetail not found for this id" + id);
		}
	}

	@DeleteMapping("/orderdetail/{id}")
	public Map<String, Boolean> deleteOrderDetail(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getOrderDetailById(id) != null) {
			service.deleteOrderDetail(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("OrderDetail not found for this id" + id);
		}

	}


}
