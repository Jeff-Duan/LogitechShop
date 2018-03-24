package org.lanqiao.Servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.lanqiao.Model.User;
import org.lanqiao.Service.UpdateMyself1Service;
@WebServlet("/UpdateMyself1Servlet")
public class UpdateMyself1Servlet extends HttpServlet{
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		
		HttpSession session=request.getSession(false);
		User loginuser=(User) session.getAttribute("loginUser");
		String user_name=loginuser.getUser_name();
		UpdateMyself1Service empService=new UpdateMyself1Service();
		User user=empService.queryu(user_name);
		request.setAttribute("User",user);
		request.getRequestDispatcher("/jsp/UpdateMyself.jsp").forward(request, response);;
		
	}
	
}
