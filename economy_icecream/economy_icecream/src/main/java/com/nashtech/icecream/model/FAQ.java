package com.nashtech.icecream.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class FAQ implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long faqId;

	@Column(columnDefinition = "nvarchar(255)", nullable = false)
	private String question;
	@Column(columnDefinition = "text", nullable = false)
	private String answer;

	public FAQ() {
	}

	public FAQ(Long faqId, String question, String answer) {
		super();
		this.faqId = faqId;
		this.question = question;
		this.answer = answer;
	}

	public Long getFaqId() {
		return faqId;
	}

	public void setFaqId(Long faqId) {
		this.faqId = faqId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

}
