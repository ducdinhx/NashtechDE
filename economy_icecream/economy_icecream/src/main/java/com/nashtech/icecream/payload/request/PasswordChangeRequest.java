package com.nashtech.icecream.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class PasswordChangeRequest {
	@NotBlank
	@Size(min = 6, max = 40)
	private String oldPassword;
	@NotBlank
	@Size(min = 6, max = 40)
	private String nrePassword;



	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNrePassword() {
		return nrePassword;
	}

	public void setNrePassword(String nrePassword) {
		this.nrePassword = nrePassword;
	}

}
