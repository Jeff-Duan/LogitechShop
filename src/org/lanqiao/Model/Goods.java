package org.lanqiao.Model;

public class Goods {
	private int goods_id;
	private String goods_name;
	private int kind_id;
	private String kind_name;
	private double price;
	private String color;
	private String update;
	private String downdate;
	private int count;
	private String size;
	private int month_sell;
	private String picture;
	private String describ;
	
	
	public Goods(){
		
	}
	
	public Goods(int goods_id, String goods_name, int kind_id, String kind_name, double price, String color,
			String update, String downdate, int count, String size, int month_sell, String picture, String describ) {
		this.goods_id = goods_id;
		this.goods_name = goods_name;
		this.kind_id = kind_id;
		this.kind_name = kind_name;
		this.price = price;
		this.color = color;
		this.update = update;
		this.downdate = downdate;
		this.count = count;
		this.size = size;
		this.month_sell = month_sell;
		this.picture = picture;
		this.describ = describ;
	}



	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
	
	public String getKind_name() {
		return kind_name;
	}

	public void setKind_name(String kind_name) {
		this.kind_name = kind_name;
	}
	
	
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
	public String getGoods_name() {
		return goods_name;
	}
	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	public int getKind_id() {
		return kind_id;
	}
	public void setKind_id(int kind_id) {
		this.kind_id = kind_id;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getUpdate() {
		return update;
	}
	public void setUpdate(String update) {
		this.update = update;
	}
	public String getDowndate() {
		return downdate;
	}
	public void setDowndate(String downdate) {
		this.downdate = downdate;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getMonth_sell() {
		return month_sell;
	}
	public void setMonth_sell(int month_sell) {
		this.month_sell = month_sell;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getDescrib() {
		return describ;
	}
	public void setDescrib(String describ) {
		this.describ = describ;
	}
	
	
	
}
