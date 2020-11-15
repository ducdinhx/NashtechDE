package com.nashtech.icecream.service;

import com.nashtech.icecream.model.FAQ;

import java.util.List;

public interface FAQService {
	public List<FAQ> getAllFAQs();

	public FAQ saveFAQ(FAQ u);

	public FAQ getFAQById(long id);

	public void deleteFAQ(long id);

	public boolean updateFAQ(FAQ u);


}
