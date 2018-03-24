package org.lanqiao.Service;

import org.lanqiao.Dao.UpdateMyself1Dao;
import org.lanqiao.Model.User;

public class UpdateMyself1Service {
	
	public User queryu(String user_name){
		UpdateMyself1Dao daoimpl=new UpdateMyself1Dao();
		User user=daoimpl.queryUser(user_name);
		return user;
		}
	
}
