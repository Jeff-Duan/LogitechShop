package org.lanqiao.Service;

import org.lanqiao.Dao.UpdateMyself2Dao;

public class UpdateMyself2Service {
	public int updateuser(String user_id,String  user_picture,String password,String real_name,String address,String email,String phone,String identity,String qq,String user_name){
		UpdateMyself2Dao daoimpl=new UpdateMyself2Dao();
		int i=daoimpl.updateuser(user_id,  user_picture,password, real_name, address, email,phone,identity,qq,user_name);
		return i;
}
}
