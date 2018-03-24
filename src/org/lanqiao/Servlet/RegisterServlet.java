package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.lanqiao.Service.RegisterService;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet{
	
	
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");//解决中文乱码
		String tel=request.getParameter("tel");
		String name=request.getParameter("uname");
		String pass=request.getParameter("pass");
		String address=request.getParameter("addr");
		String num=request.getParameter("yzm");
		System.out.println(tel+name+pass+address+num);
		
		HttpSession session3=request.getSession();
		int  nn= (int) session3.getAttribute("YZM");
		RegisterService ser=new RegisterService();
		boolean bool=false;
		System.out.println("zhucelimianlasdsas");
		System.out.println(num+nn);
		if(num.equals(new String().valueOf(nn))){
			System.out.println("注册成功");
			ser.resgist(tel,name,pass,address);
			
		}
		response.getWriter().print(bool);
		response.getWriter().close();
	}
}