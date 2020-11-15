package com.nashtech.icecream.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long productId;
	@Column(nullable = false, columnDefinition = "nvarchar(100)")
	private String name;
	@Column(nullable = false, columnDefinition = "nvarchar(100)")
	private String image;
	@Column(nullable = false, columnDefinition = "text")
	private String description;
	@Column(nullable = false, columnDefinition = "text")
	private String detail;
	@Column(nullable = false, columnDefinition = "text")
	private LocalDate uploadDate;
	@Column(nullable = false, columnDefinition = "bigint(20) default 1")
	private long viewNumber;
	@Column(nullable = false, columnDefinition = "bigint(20) default 1")
	private double price;
	@Column(nullable = false, columnDefinition = "tinyint(1) default 0")
	private boolean enableStatus;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "catalogueId")
	private Catalogue catalogue;
	
	public Product() {
	}
	
	public Product(long productId, String name, String image, String description, String detail, LocalDate uploadDate,
			long viewNumber, double price, boolean enableStatus) {
		super();
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.description = description;
		this.detail = detail;
		this.uploadDate = uploadDate;
		this.viewNumber = viewNumber;
		this.price = price;
		this.enableStatus = enableStatus;
	}

	public Product(long productId, String name, String image, String description, String detail, LocalDate uploadDate,
			long viewNumber, double price, boolean enableStatus, Catalogue catalogue) {
		super();
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.description = description;
		this.detail = detail;
		this.uploadDate = uploadDate;
		this.viewNumber = viewNumber;
		this.price = price;
		this.enableStatus = enableStatus;
		this.catalogue = catalogue;
	}

	public Product(long productId, String name, String image, String description, String detail, LocalDate uploadDate,
			long viewNumber, double price, boolean enableStatus, Catalogue catalogue, List<FeedBack> feedbacks,
			List<OrderDetail> orderDetails) {
		super();
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.description = description;
		this.detail = detail;
		this.uploadDate = uploadDate;
		this.viewNumber = viewNumber;
		this.price = price;
		this.enableStatus = enableStatus;
		this.catalogue = catalogue;
		this.feedbacks = feedbacks;
		this.orderDetails = orderDetails;
	}


	@OneToMany(mappedBy = "product", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
			CascadeType.REFRESH })
	private List<FeedBack> feedbacks;
	
	@OneToMany(mappedBy = "product", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
			CascadeType.REFRESH })
	private List<OrderDetail> orderDetails;
	
	public long getProductId() {
		return productId;
	}

	
	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}


	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}


	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public LocalDate getUploadDate() {
		return uploadDate;
	}

	public void setUploadDate(LocalDate uploadDate) {
		this.uploadDate = uploadDate;
	}

	public long getViewNumber() {
		return viewNumber;
	}

	public void setViewNumber(long viewNumber) {
		this.viewNumber = viewNumber;
	}

	public boolean isEnableStatus() {
		return enableStatus;
	}

	public void setEnableStatus(boolean enableStatus) {
		this.enableStatus = enableStatus;
	}

	public Catalogue getCatalogue() {
		return catalogue;
	}

	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
	}

	public List<FeedBack> getFeedbacks() {
		return feedbacks;
	}

	public void setFeedbacks(List<FeedBack> feedbacks) {
		this.feedbacks = feedbacks;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}
	
	
	

}
