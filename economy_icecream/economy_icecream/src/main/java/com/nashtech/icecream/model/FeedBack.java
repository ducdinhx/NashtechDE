package com.nashtech.icecream.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

@Entity
@Table(name = "feedback")
public class FeedBack implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "bigint(20)")
	private long feedbackId;
	
	@Column(columnDefinition = "nvarchar(100)", nullable = false)
	private String title;
	
	@Column(columnDefinition = "text", nullable = false)
	private String content;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "product")
	@JsonIgnore
	private Product product;

	public FeedBack() {
	}

	public FeedBack(long feedbackId, String title, String content, User user) {
		super();
		this.feedbackId = feedbackId;
		this.title = title;
		this.content = content;
		this.user = user;
	}

	public long getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(long feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	

}
