package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.Order;
import com.nashtech.icecream.repository.OrderRepository;
import com.nashtech.icecream.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository repository;

	@Override
	public List<Order> getAllOrders() {
		return repository.findAll();
	}

	@Override
	public Order saveOrder(Order u) {
		return repository.save(u);
	}

	@Override
	public Order getOrderById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteOrder(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateOrder(Order u) {
		if (repository.findById(u.getOrder_id()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}


}
