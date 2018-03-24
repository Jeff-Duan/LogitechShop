package org.lanqiao.Service;
import java.util.ArrayList;

import org.lanqiao.Dao.InOrderDao;
import org.lanqiao.Model.Order_detail;

public class InOrderService {
	public ArrayList<Order_detail> inorder(String[] car_ids,String order_number,String user_id){
		InOrderDao iod=new InOrderDao();
		ArrayList<Order_detail> order_details=iod.inorder(car_ids, order_number, user_id);
		return order_details;
	}
}
