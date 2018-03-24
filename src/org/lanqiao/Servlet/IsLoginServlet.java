package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.lanqiao.Model.Message;
import org.lanqiao.Model.User;

import com.google.gson.Gson;
@WebServlet("/IsLoginServlet")
public class IsLoginServlet extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		System.out.println("进入判断是否登录servlet");
		
		try {
			
			HttpSession session=request.getSession(false);
			User user=(User) session.getAttribute("loginUser");
			
			Gson gson=new Gson();
			Message message=new Message();
			String result;
			
			if(user!=null){
				message.setMessage("已登录");
				message.setCode("1");
			}else{
				message.setMessage("未登录");
				message.setCode("0");
			}
			result=gson.toJson(message);
			response.getWriter().print(result);
			response.getWriter().close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
			

	}
	
}

