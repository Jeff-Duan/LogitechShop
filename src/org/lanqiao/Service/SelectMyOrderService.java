package org.lanqiao.Service;

import java.util.List;
import org.lanqiao.Dao.SelectMyOrderDao;

public class SelectMyOrderService {
	
	public List query(String user_id){
		SelectMyOrderDao daoimpl=new SelectMyOrderDao();
		List list=daoimpl.queryOrder(user_id);
		return list;
		}
	
}
