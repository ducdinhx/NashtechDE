package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.FAQ;
import com.nashtech.icecream.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = {"*","http://localhost:3000"})
@RestController
@RequestMapping("/api/task")
public class FAQController {
	@Autowired
	private FAQService service;

	@GetMapping("/faq")
	@PreAuthorize("hasRole('USER') or hasRole('STAFF') or hasRole('ADMIN')")
	public List<FAQ> getAllFAQs() {
		return service.getAllFAQs();
	}

	@PostMapping("/faq")
	public FAQ saveFAQ(@RequestBody FAQ u) {
		return service.saveFAQ(u);

	}

	@GetMapping("/faq/{id}")
	public FAQ getFAQById(@PathVariable long id) throws ResourceNotFoundException {
		FAQ e = service.getFAQById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("FAQ not found for this id" + id);
		}

	}

	@PutMapping("/faq/{id}")
	public FAQ updateFAQ(@PathVariable long id, FAQ u) throws ResourceNotFoundException {
		if (service.updateFAQ(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("FAQ not found for this id" + id);
		}
	}

	@DeleteMapping("/faq/{id}")
	public Map<String, Boolean> deleteFAQ(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getFAQById(id) != null) {
			service.deleteFAQ(id);
			Map<String, Boolean> response = new HashMap<String, Boolean>();
			response.put("deleted", Boolean.TRUE);
			return response;
		} else {
			throw new ResourceNotFoundException("FAQ not found for this id" + id);
		}

	}

}
