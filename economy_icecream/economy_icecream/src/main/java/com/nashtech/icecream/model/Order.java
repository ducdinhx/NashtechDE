package com.nashtech.icecream.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long order_id;
	@Column(columnDefinition = "datetime", nullable = false)
	private Date orderDate;
	
	@Enumerated(EnumType.STRING)
	@Column
	private EOrderStatus status;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	@OneToOne(mappedBy = "order")
	@JsonIgnore
	private OrderDetail orderDetail;

	public Order() {
	}
	
	public Order( Date orderDate, EOrderStatus status, User user, OrderDetail orderDetail) {
		this.orderDate = orderDate;
		this.status = status;
		this.user = user;
		this.orderDetail = orderDetail;
	}


	public EOrderStatus getStatus() {
		return status;
	}



	public void setStatus(EOrderStatus status) {
		this.status = status;
	}



	public OrderDetail getOrderDetail() {
		return orderDetail;
	}



	public void setOrderDetail(OrderDetail orderDetail) {
		this.orderDetail = orderDetail;
	}



	public long getOrder_id() {
		return order_id;
	}

	public void setOrder_id(long order_id) {
		this.order_id = order_id;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
