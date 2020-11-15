package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.FAQ;
import com.nashtech.icecream.repository.FAQRepository;
import com.nashtech.icecream.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FAQServiceImpl implements FAQService {

	@Autowired
	private FAQRepository repository;

	@Override
	public List<FAQ> getAllFAQs() {
		return repository.findAll();
	}

	@Override
	public FAQ saveFAQ(FAQ u) {
		return repository.save(u);
	}

	@Override
	public FAQ getFAQById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteFAQ(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateFAQ(FAQ u) {
		if (repository.findById(u.getFaqId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}


}
