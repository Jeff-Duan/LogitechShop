package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.lanqiao.Util.JDBC;

public class SelectMyOrderDao {
	
	public List queryOrder(String user_id){
		String sql="select * from db_order where user_id=?";
		ArrayList<HashMap<String,Object>> list=JDBC.excutequery(sql,new Object[]{user_id});
		return list;
	}
	
}
