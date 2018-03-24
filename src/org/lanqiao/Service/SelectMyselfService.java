package org.lanqiao.Service;

import org.lanqiao.Dao.SelectMyselfDao;
import org.lanqiao.Model.User;

public class SelectMyselfService {
	public User queryu(String user_name){
		SelectMyselfDao daoimpl=new SelectMyselfDao();
		User user=daoimpl.queryUser(user_name);
		return user;
		}
}
