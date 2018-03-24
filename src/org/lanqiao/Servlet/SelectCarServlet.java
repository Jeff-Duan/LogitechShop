package org.lanqiao.Servlet;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.lanqiao.Model.User;
import org.lanqiao.Service.SelectCarService;
@WebServlet("/SelectCarServlet")
public class SelectCarServlet extends HttpServlet{
	@Override 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//获取参数
		req.setCharacterEncoding("utf-8");//解决中文乱码
		
		System.out.println("查询购物车servlet");
		
		User user= (User)req.getSession().getAttribute("loginUser");
		String userId=user.getUser_id();

		SelectCarService scs=new SelectCarService();
		List list=scs.selectcar(userId);
		
		if(list.size()>0){
			
			req.setAttribute("data", list);
			req.getRequestDispatcher("jsp/Car.jsp").forward(req, resp);
			
		}else{
			
			req.setAttribute("data", list);
			req.getRequestDispatcher("jsp/NullCar.jsp").forward(req, resp);
			
		}

		
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doGet(req, resp);
	}
}
