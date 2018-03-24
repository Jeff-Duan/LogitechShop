package org.lanqiao.Model;

public class User {
	private String user_id;
	private String user_name;
	private String password;
	private String real_name;
	private String address;
	private String email;
	private String phone;
	private String identity;
	private String qq;
	private String user_picture;
	
	public User(){
		
	}
	
	public User(String user_id, String user_name, String password, String real_name, String address, String email,
			String phone, String identity, String qq, String user_picture) {
		this.user_id = user_id;
		this.user_name = user_name;
		this.password = password;
		this.real_name = real_name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.identity = identity;
		this.qq = qq;
		this.user_picture = user_picture;
	}
	public String getUser_picture() {
		return user_picture;
	}
	public void setUser_picture(String user_picture) {
		this.user_picture = user_picture;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getReal_name() {
		return real_name;
	}
	public void setReal_name(String real_name) {
		this.real_name = real_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getIdentity() {
		return identity;
	}
	public void setIdentity(String identity) {
		this.identity = identity;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
}