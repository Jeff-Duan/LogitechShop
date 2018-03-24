package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.lanqiao.Util.JDBC;

public class SelectCarDao {
		//查询购物车
		public List selectcar(String id){
			String sql="SELECT g.goods_name,g.kind_id,g.picture,g.describ,g.specification,g.size,g.price,c.car_id,c.goods_count FROM car c , goods g WHERE c.goods_id=g.goods_id and user_id=? and c.order_number is null; ";
			ArrayList<HashMap<String,Object>> list=JDBC.excutequery(sql,new Object[]{id});
			return list;
		}
	
}
