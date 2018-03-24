package org.lanqiao.Service;

import org.lanqiao.Dao.LoginDao;
import org.lanqiao.Model.User;

public class LoginService {
		//登录
		public User login(String name,String pass){
			LoginDao daoimpl=new LoginDao();
			User user = daoimpl.login(name,pass);
			return user;
		}
}
