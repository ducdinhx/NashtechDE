package com.nashtech.icecream.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.IM_USED)
public class ResourceAlreadyExitsException extends Exception {
    private static final long serialVersionUID = 1L;
    public ResourceAlreadyExitsException(String message) {
        super(message);
    }



}
