package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.FeedBack;
import com.nashtech.icecream.repository.FeedbackRepository;
import com.nashtech.icecream.service.FeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FeedBackServiceImpl implements FeedBackService {

	@Autowired
	private FeedbackRepository repository;

	@Override
	public List<FeedBack> getAllFeedBacks() {
		return repository.findAll();
	}

	@Override
	public FeedBack saveFeedBack(FeedBack u) {
		return repository.save(u);
	}

	@Override
	public FeedBack getFeedBackById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteFeedBack(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateFeedBack(FeedBack u) {
		if (repository.findById(u.getFeedbackId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}
}
