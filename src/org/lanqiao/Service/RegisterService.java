package org.lanqiao.Service;

import org.lanqiao.Dao.RegisterDao;

public class RegisterService {
	//注册
		public void resgist(String tel,String pass,String name,String address){
			RegisterDao daoimpl=new RegisterDao();
			daoimpl.resgis(tel,pass,name,address);
		} 
}
