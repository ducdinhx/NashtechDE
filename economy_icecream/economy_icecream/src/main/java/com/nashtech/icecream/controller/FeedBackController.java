package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.FeedBack;
import com.nashtech.icecream.service.FeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
public class FeedBackController {
	@Autowired
	private FeedBackService service;

	@GetMapping("/feedback")
	public List<FeedBack> getAllFeedBacks() {
		return service.getAllFeedBacks();
	}

	@PostMapping("/feedback")
	public FeedBack saveFeedBack(@RequestBody FeedBack u) {
		return service.saveFeedBack(u);

	}

	@GetMapping("/feedback/{id}")
	public FeedBack getFeedBackById(@PathVariable long id) throws ResourceNotFoundException {
		FeedBack e = service.getFeedBackById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("FeedBack not found for this id" + id);
		}

	}

	@PutMapping("/feedback/{id}")
	public FeedBack updateFeedBack(@PathVariable long id, FeedBack u) throws ResourceNotFoundException {
		if (service.updateFeedBack(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("FeedBack not found for this id" + id);
		}
	}

	@DeleteMapping("/feedback/{id}")
	public Map<String, Boolean> deleteFeedBack(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getFeedBackById(id) != null) {
			service.deleteFeedBack(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("FeedBack not found for this id" + id);
		}

	}


}
