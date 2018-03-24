package org.lanqiao.Service;

import org.lanqiao.Dao.UpdateOrderDao;

public class UpdateOrderService {
	//修改订单状态
		public void orderStatic(String id){
			UpdateOrderDao daoimpl=new UpdateOrderDao();
			daoimpl.orderStaticDao(id);
			
		}
}
