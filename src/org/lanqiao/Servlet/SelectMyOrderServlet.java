package org.lanqiao.Servlet;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.lanqiao.Model.User;
import org.lanqiao.Service.SelectMyOrderService;
@WebServlet("/SelectMyOrderServlet")
public class SelectMyOrderServlet extends HttpServlet{
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		HttpSession session=request.getSession(false);
		User user=(User) session.getAttribute("loginUser");
		String user_id=user.getUser_id();
		
		SelectMyOrderService empService=new SelectMyOrderService();
		List list=empService.query(user_id);
		request.setAttribute("data", list);
		request.getRequestDispatcher("/jsp/MyOrder.jsp").forward(request, response); 
	}
	
}
