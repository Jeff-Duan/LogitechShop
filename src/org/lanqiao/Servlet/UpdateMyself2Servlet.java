package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.lanqiao.Model.Message;
import org.lanqiao.Service.UpdateMyself2Service;

import com.google.gson.Gson;
@WebServlet("/UpdateMyself2Servlet")
public class UpdateMyself2Servlet extends HttpServlet{
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json");

		String user_id=request.getParameter("user_id");
		String user_name=request.getParameter("user_name");
		String user_picture=request.getParameter("user_picture");
		String password=request.getParameter("password");
		String real_name=request.getParameter("real_name");
		String address=request.getParameter("address");
		String email=request.getParameter("email");
		String phone=request.getParameter("phone");
		String identity=request.getParameter("identity");
		String qq=request.getParameter("qq");
		System.out.println(qq);

		
		Message message;
		Gson gson=new Gson();
		try {
			UpdateMyself2Service empservice =new UpdateMyself2Service();
			int i=empservice.updateuser(user_id, user_picture, password, real_name, address, email, phone, identity,qq,user_name);
			
			if(i>0){
				message=new Message("成功","1");
				String result=gson.toJson(message);
				response.getWriter().print(result);
				response.getWriter().close();
			}
			
		} catch (Exception e) {
			
		}
		
	}
	
}
