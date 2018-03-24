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
import org.lanqiao.Service.LoginService;
import com.google.gson.Gson;
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	@Override 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//获取参数
				req.setCharacterEncoding("utf-8");//解决中文乱码
				String name=req.getParameter("name");
				String pass=req.getParameter("pass");
				String yzm1=req.getParameter("verifyCode");
				
				
				String yzm2=(String) req.getSession(false).getAttribute("verifyCode");
				Message message=new Message();
				Gson gson=new Gson();
				try {
					LoginService ser=new LoginService();
					User user=ser.login(name,pass);
					boolean bool=false;
					if(yzm1.equals(yzm2)){
						bool=true;
						if(user!=null){
							message.setMessage("登陆成功");
							message.setCode("100");
							//登录信息放到session中
							HttpSession Loginsession =req.getSession();
							Loginsession.setAttribute("loginUser", user);
						}else{
							message.setMessage("用户名或密码错误");
							message.setCode("50");
						}
						
					}else{
						message.setMessage("验证码错误");
						message.setCode("0");
					}
						
				} catch (Exception e) {
					
				}
				String result=gson.toJson(message);
				resp.setContentType("text/json");
				resp.getWriter().print(result);
				resp.getWriter().close();
			}

			@Override
			protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
				this.doGet(req, resp);
			}
}

