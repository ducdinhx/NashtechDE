package com.nashtech.icecream.dto;

import java.time.LocalDate;

public class ProductDTO {
	private long productId;
	private String name;
	private String image;
	private String description;
	private String detail;
	private LocalDate uploadDate;
	private long viewNumber;
	private boolean enableStatus;

	public long getProductId() {
		return productId;
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

}
