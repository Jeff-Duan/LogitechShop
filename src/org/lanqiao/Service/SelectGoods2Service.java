package org.lanqiao.Service;

import java.util.ArrayList;
import org.lanqiao.Dao.SelectGoods2Dao;
import org.lanqiao.Model.Goods;

public class SelectGoods2Service {
	public ArrayList<Goods> selectproduct(String kind_name){
		SelectGoods2Dao sgd=new SelectGoods2Dao();
		ArrayList<Goods> goods=sgd.selectproduct(kind_name);
		return goods;
	}
}

