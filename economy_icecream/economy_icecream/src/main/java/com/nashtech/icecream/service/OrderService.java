package com.nashtech.icecream.service;

import com.nashtech.icecream.model.Order;

import java.util.List;

public interface OrderService {
	public List<Order> getAllOrders();

	public Order saveOrder(Order u);

	public Order getOrderById(long id);

	public void deleteOrder(long id);

	public boolean updateOrder(Order u);


}
