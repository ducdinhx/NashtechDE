package com.nashtech.icecream.service;

import com.nashtech.icecream.model.OrderDetail;

import java.util.List;

public interface OrderDetailService {
	public List<OrderDetail> getAllOrderDetails();

	public OrderDetail saveOrderDetail(OrderDetail u);

	public OrderDetail getOrderDetailById(long id);

	public void deleteOrderDetail(long id);

	public boolean updateOrderDetail(OrderDetail u);


}
