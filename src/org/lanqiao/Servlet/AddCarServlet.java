package org.lanqiao.Servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.lanqiao.Model.User;
import org.lanqiao.Service.AddCarService;
@WebServlet("/AddCarServlet")
public class AddCarServlet extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		System.out.println("进入加入购物车servlet");
		
		//获取加入购物车的商品id
		int goods_id=Integer.valueOf(request.getParameter("goods_id"));
		
		try {
			
			HttpSession session=request.getSession();
			User user=(User) session.getAttribute("loginUser");
			String login_name=user.getUser_name();
			
			AddCarService acs=new AddCarService();
			acs.addcar(goods_id,login_name);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
			
			
		
		
	}
	
}
