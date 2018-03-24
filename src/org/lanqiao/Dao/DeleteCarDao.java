package org.lanqiao.Dao;

import org.lanqiao.Util.JDBC;

public class DeleteCarDao {
	//删除购物车的一行
		public int deletecar(String id){
			String sql="delete from car where car_id=?";
			int list=JDBC.excuteupdate(sql,new Object[]{id});
			return list;
		}

}