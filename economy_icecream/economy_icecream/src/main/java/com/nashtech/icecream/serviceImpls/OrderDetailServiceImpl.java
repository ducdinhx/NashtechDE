package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.OrderDetail;
import com.nashtech.icecream.repository.OrderDetailRepository;
import com.nashtech.icecream.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {
	@Autowired
	private OrderDetailRepository repository;

	@Override
	public List<OrderDetail> getAllOrderDetails() {
		return repository.findAll();
	}

	@Override
	public OrderDetail saveOrderDetail(OrderDetail u) {
		return repository.save(u);
	}

	@Override
	public OrderDetail getOrderDetailById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteOrderDetail(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateOrderDetail(OrderDetail u) {
		if (repository.findById(u.getOrderDetailId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}

}
