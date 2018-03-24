package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.lanqiao.Model.User;
import org.lanqiao.Service.SelectMyselfService;
@WebServlet("/SelectMyselfServlet")
public class SelectMyselfServlet extends HttpServlet{
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		System.out.println("进入查询个人信息servlet");
		
		HttpSession session=request.getSession(false);
		User loginuser=(User) session.getAttribute("loginUser");
		String user_name=loginuser.getUser_name();

		SelectMyselfService empService=new SelectMyselfService();
		User user=empService.queryu(user_name);
		request.setAttribute("User",user);
		request.getRequestDispatcher("/jsp/MyselfData.jsp").forward(request, response);
		
	}
	
}
