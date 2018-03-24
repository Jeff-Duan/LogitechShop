package org.lanqiao.Dao;

import org.lanqiao.Util.JDBC;

public class UpdateOrderDao {
	//修改订单状态
		public void orderStaticDao(String id){
			String sql="update db_order set db_order.ispay=1 where order_number=?";
			JDBC.excuteupdate(sql,new Object[]{id});
		}

}
