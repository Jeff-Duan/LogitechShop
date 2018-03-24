package org.lanqiao.Service;
import java.util.List;
import org.lanqiao.Dao.BlurSelectDao;

public class BlurSelectService {
	//模糊查询
		public List query(String name){
			System.out.println(name);
			BlurSelectDao daoimpl=new BlurSelectDao();
			List row = daoimpl.queryDemp(name);
			return row;
		}
}
