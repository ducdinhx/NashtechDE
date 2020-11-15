package com.nashtech.icecream.service;

import com.nashtech.icecream.model.FeedBack;

import java.util.List;

public interface FeedBackService {
	public List<FeedBack> getAllFeedBacks();

	public FeedBack saveFeedBack(FeedBack u);

	public FeedBack getFeedBackById(long id);

	public void deleteFeedBack(long id);

	public boolean updateFeedBack(FeedBack u);


}
