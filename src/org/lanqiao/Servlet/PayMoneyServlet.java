package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Service.UpdateOrderService;

@WebServlet("/PayMoneyServlet")
public class PayMoneyServlet extends HttpServlet{
	@Override 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//获取参数
		req.setCharacterEncoding("utf-8");//解决中文乱码
		String id=req.getParameter("orderid");
		UpdateOrderService ser=new UpdateOrderService();
		ser.orderStatic(id);
		
		req.getRequestDispatcher("/jsp/Index.jsp");
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doGet(req, resp);
	}
}
