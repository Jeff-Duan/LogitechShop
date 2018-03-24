package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.lanqiao.Util.JDBC;

public class AddCarDao {
	public void addcar(int goods_id,String login_name){
		
		String sql1="select 1 from car where goods_id=? and user_id=(select user_id from user where user_name=?)";
		ArrayList<HashMap<String,Object>> list=JDBC.excutequery(sql1, new Object[]{goods_id,login_name});
		
		if(list.size()>0){
			System.out.println("该商品已存在，数量+1");
			String sql2="update car set goods_count=goods_count+1 where goods_id=? and user_id=(select user_id from user where user_name=?)";
			JDBC.excuteupdate(sql2,new Object[]{goods_id,login_name});
			
		}else{
			System.out.println("该商品未存在，即将插入");
			String sql3="insert into car(user_id,goods_id,adddate)values((select user_id from user where user_name=?),?,sysdate())";
			JDBC.excuteupdate(sql3,new Object[]{login_name,goods_id});
			
		}
		
	}
}
