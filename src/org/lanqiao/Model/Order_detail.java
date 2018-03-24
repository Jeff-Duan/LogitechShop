package org.lanqiao.Model;

public class Order_detail {
	private int order_detail_id;
	private String order_number;
	private String goods_name;
	private String goods_picture;
	private int goods_id;
	private int goods_kind_id;
	private int goods_count;
	private double goods_price;
	private double order_detail_price;
	private double order_price;
	public Order_detail(){
		
	}
	
	public Order_detail(int order_detail_id, String order_number, String goods_name, String goods_picture, int goods_id,int goods_kind_id,
			int goods_count, double goods_price, double order_detail_price, double order_price) {
		this.order_detail_id = order_detail_id;
		this.order_number = order_number;
		this.goods_name = goods_name;
		this.goods_picture = goods_picture;
		this.goods_id = goods_id;
		this.goods_count = goods_count;
		this.goods_price = goods_price;
		this.order_detail_price = order_detail_price;
		this.order_price = order_price;
		this.goods_kind_id=goods_kind_id;
	}






	public int getGoods_kind_id() {
		return goods_kind_id;
	}

	public void setGoods_kind_id(int goods_kind_id) {
		this.goods_kind_id = goods_kind_id;
	}

	public double getOrder_detail_price() {
		return order_detail_price;
	}






	public void setOrder_detail_price(double order_detail_price) {
		this.order_detail_price = order_detail_price;
	}






	public double getOrder_price() {
		return order_price;
	}






	public void setOrder_price(double order_price) {
		this.order_price = order_price;
	}






	public String getGoods_picture() {
		return goods_picture;
	}

	public void setGoods_picture(String goods_picture) {
		this.goods_picture = goods_picture;
	}

	public String getGoods_name() {
		return goods_name;
	}

	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	
	public int getOrder_detail_id() {
		return order_detail_id;
	}
	public void setOrder_detail_id(int order_detail_id) {
		this.order_detail_id = order_detail_id;
	}
	public String getOrder_number() {
		return order_number;
	}
	public void setOrder_number(String order_number) {
		this.order_number = order_number;
	}
	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
	public int getGoods_count() {
		return goods_count;
	}
	public void setGoods_count(int goods_count) {
		this.goods_count = goods_count;
	}
	public double getGoods_price() {
		return goods_price;
	}
	public void setGoods_price(double goods_price) {
		this.goods_price = goods_price;
	}
	
	
	
}
