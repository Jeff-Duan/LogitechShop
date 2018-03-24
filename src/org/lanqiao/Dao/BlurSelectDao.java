package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.lanqiao.Util.JDBC;

public class BlurSelectDao {
	//模糊查询
		public List queryDemp(String name){
			System.out.println(1);
			String sql="SELECT * FROM goods where goods_name like '%"+name+"%';";
			ArrayList<HashMap<String,Object>> list=JDBC.excutequery(sql,null);
			System.out.println(list.size()+1);
			return list;
		}
}
