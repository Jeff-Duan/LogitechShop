package org.lanqiao.Dao;

import org.lanqiao.Util.JDBC;

public class UpdateMyself2Dao {
	
	public int updateuser(String user_id,String user_picture,String password,String real_name,String address,String email,String phone,String identity,String qq,String user_name){
		String sql="update user set user_name=?,user_picture=?,password=?,real_name=?,address=?,email=?,phone=?,identity=?,qq=? where user_id=?";
		int i=JDBC.excuteupdate(sql,new Object[]{user_name, user_picture,password,real_name,address,email,phone,identity,qq,user_id});
		return i;
	}
	
}
