package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedBack, Long> {

}
