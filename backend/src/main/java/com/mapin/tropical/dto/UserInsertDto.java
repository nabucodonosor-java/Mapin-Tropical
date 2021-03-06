package com.mapin.tropical.dto;


import com.mapin.tropical.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDto extends UserDto {
	private static final long serialVersionUID = 1L;

	private String password;

	public UserInsertDto() {
	}

	public UserInsertDto(String password) {
		super();
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}