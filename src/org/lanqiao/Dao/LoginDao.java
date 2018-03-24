package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;
import org.lanqiao.Model.User;
import org.lanqiao.Util.JDBC;

public class LoginDao {
	
		//登录
		public User login(String name,String pass){
			String sql="select * from user where real_name=? and password=?";
			ArrayList<HashMap<String,Object>> list=JDBC.excutequery(sql,new Object[]{name,pass});
			User user=null;
			if(list.size()>0){
				HashMap map=list.get(0);
				user=new User();
				user.setUser_id(String.valueOf(map.get("user_id")));
				user.setUser_name(String.valueOf(map.get("user_name")));
				user.setPassword(String.valueOf(map.get("password")));
				user.setReal_name(String.valueOf(map.get("real_name")));
				user.setAddress(String.valueOf(map.get("address")));
				user.setEmail(String.valueOf(map.get("email")));
				user.setPhone(String.valueOf(map.get("phone")));
				user.setIdentity(String.valueOf(map.get("identity")));
				user.setQq(String.valueOf(map.get("qq")));
			}
			return user;
		}

	
}
