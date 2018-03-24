package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;
import org.lanqiao.Model.Order_detail;
import org.lanqiao.Util.JDBC;

public class InOrderDao {
	//结算方法
	public ArrayList<Order_detail> inorder(String[] car_ids,String order_number,String user_id){
		
		System.out.println(car_ids.length);
		System.out.println(order_number);
		System.out.println(user_id);
		
		//订单表插入订单信息
		String sql1="insert into db_order(user_id,order_time,order_number)values(?,sysdate(),?)";
			JDBC.excuteupdate(sql1, new Object[]{Integer.valueOf(user_id),order_number});
		
		//订单明细表循环插入明细数据
		String sql2="insert into order_detail(order_number,goods_name,goods_id,goods_count,goods_price,order_detail_price)values(?,(select goods_name from goods where goods_id=(select goods_id from car where car_id=?)),(select goods_id from car where car_id=?),(select goods_count from car where car_id=?),(select price from goods where goods_id=(select goods_id from car where car_id=?)),(select (select price from goods where goods_id=(select goods_id from car where car_id=?))*(select goods_count from car where car_id=?)));";
		for(String car_id:car_ids){
			JDBC.excuteupdate(sql2, new Object[]{order_number,car_id,car_id,car_id,car_id,car_id,car_id});
		}
		
		//订单表插入订单总价
		String sql3="update db_order set order_price=(select sum(order_detail_price) from order_detail where order_number=?) where order_number=?";
		JDBC.excuteupdate(sql3, new Object[]{order_number,order_number});
		
		
		//购物车表更新订单号
		String sql4="update car set order_number=? where car_id=?";
		for(String car_id:car_ids){
			JDBC.excuteupdate(sql4, new Object[]{order_number,car_id});
		}
		
		//查询订单明细转发给订单JSP
		String sql5="select g.kind_id,g.picture,d.*,db.order_price from order_detail d,goods g,db_order db where d.goods_id=g.goods_id and d.order_number=db.order_number and d.order_number=?";
		ArrayList<HashMap<String, Object>> list=JDBC.excutequery(sql5, new Object[]{order_number});
		
		ArrayList<Order_detail> order_details=new ArrayList<Order_detail>();
		
		if(list.size()>0){
			for(HashMap<String,Object> map:list){
				Order_detail order_detail=new Order_detail();
				order_detail.setOrder_detail_id((int)map.get("order_detail_id"));
				order_detail.setOrder_number(String.valueOf(map.get("order_number")));
				order_detail.setGoods_name(String.valueOf(map.get("goods_name")));
				order_detail.setGoods_picture(String.valueOf(map.get("picture")));
				order_detail.setGoods_id((int)map.get("goods_id"));
				order_detail.setGoods_kind_id((int)map.get("kind_id"));
				order_detail.setGoods_count((int)map.get("goods_count"));
				order_detail.setGoods_price((double)map.get("goods_price"));
				order_detail.setOrder_detail_price((double)map.get("order_detail_price"));
				order_detail.setOrder_price((double)map.get("order_price"));
				order_details.add(order_detail);
			}
		}
		
		return order_details;
		
	}
}
