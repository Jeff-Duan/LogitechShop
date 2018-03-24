package org.lanqiao.Service;

import java.util.List;

import org.lanqiao.Dao.SelectCarDao;


public class SelectCarService {
	
		//查询购物车
		public List selectcar(String id){
			SelectCarDao scd=new SelectCarDao();
			List list = scd.selectcar(id);
			return list;
		}
	
}
