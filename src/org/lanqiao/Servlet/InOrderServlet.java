package org.lanqiao.Servlet;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Model.Order_detail;
import org.lanqiao.Model.User;
import org.lanqiao.Service.InOrderService;
@WebServlet("/InOrderServlet")
public class InOrderServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		System.out.println("进入结算servlet");
		
		//获取当前用户
		User user=(User) request.getSession().getAttribute("loginUser");
		String user_id=user.getUser_id();
		//获取购物车数据
		String[] car_ids=request.getParameterValues("ck"); 
		
		//产生随机订单号
		java.util.Date now=new java.util.Date();
		String order_number = String.valueOf(now.getTime());
		
		//结算业务
		try {
			
			InOrderService ios=new InOrderService();
			ArrayList<Order_detail> order_details=ios.inorder(car_ids, order_number, user_id);
			
			request.setAttribute("Order_details",order_details);
			request.getRequestDispatcher("/jsp/Order.jsp").forward(request, response);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
			
	}
}
