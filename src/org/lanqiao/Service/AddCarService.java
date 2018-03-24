package org.lanqiao.Service;

import org.lanqiao.Dao.AddCarDao;

public class AddCarService {
	public void addcar(int goods_id,String login_name){
		AddCarDao acd=new AddCarDao();
		acd.addcar(goods_id,login_name);
	}
}

