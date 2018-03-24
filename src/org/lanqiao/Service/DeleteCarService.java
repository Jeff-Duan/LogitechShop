package org.lanqiao.Service;

import org.lanqiao.Dao.DeleteCarDao;

public class DeleteCarService {
	//删除购物车的一行
		public int deletecar(String id){
			DeleteCarDao dcd=new DeleteCarDao();
			int row = dcd.deletecar(id);
			return row;
		}

}