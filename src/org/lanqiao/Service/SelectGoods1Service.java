package org.lanqiao.Service;

import java.util.ArrayList;

import org.lanqiao.Dao.SelectGoods1Dao;
import org.lanqiao.Model.Goods;

public class SelectGoods1Service {
	public ArrayList<Goods> selectproduct(int kind_id){
		SelectGoods1Dao sgd=new SelectGoods1Dao();
		ArrayList<Goods> goods=sgd.selectproduct(kind_id);
		return goods;
	}
}