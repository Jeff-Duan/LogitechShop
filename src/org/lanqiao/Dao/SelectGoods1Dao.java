package org.lanqiao.Dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.lanqiao.Model.Goods;
import org.lanqiao.Util.JDBC;

public class SelectGoods1Dao{
	public ArrayList<Goods> selectproduct(int kind_id){
		
		String sql="select k.kind_name,g.* from goods g,kind k where g.kind_id=k.kind_id and k.kind_id=?";
		ArrayList<HashMap<String,Object>> list=new ArrayList<HashMap<String,Object>>();
		list=JDBC.excutequery(sql,new Object[]{kind_id});
		
		ArrayList<Goods> goods=new ArrayList<Goods>();
		
		if(list.size()>0){
			for(HashMap<String,Object> map:list){
				Goods good=new Goods();
				good.setGoods_id((int)map.get("goods_id"));
				good.setGoods_name(String.valueOf(map.get("goods_name")));
				good.setKind_id((int)map.get("kind_id"));
				good.setKind_name(String.valueOf(map.get("kind_name")));
				good.setPrice( (double) map.get("price"));
				good.setColor(String.valueOf(map.get("color")));
				good.setSize(String.valueOf(map.get("size")));
				good.setCount((int) map.get("count"));
				good.setMonth_sell((int) map.get("month_sell"));
				good.setUpdate(String.valueOf(map.get("update")));
				good.setDowndate(String.valueOf(map.get("downdate")));
				good.setPicture(String.valueOf(map.get("picture")));
				good.setDescrib(String.valueOf(map.get("describ")));
				goods.add(good) ;
			}
		}
		return goods;
		
	}
}
