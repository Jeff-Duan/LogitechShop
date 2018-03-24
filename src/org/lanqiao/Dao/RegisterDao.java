package org.lanqiao.Dao;

import org.lanqiao.Util.JDBC;

public class RegisterDao {
	//注册
		public int resgis(String tel,String pass,String name,String address){
			int result=0;
			String sql="insert into user(user_name,password,address,phone) values(?,?,?,?)";
			result=JDBC.excuteupdate(sql, new Object[]{tel,pass,name,address});
			return result;
		}
}
