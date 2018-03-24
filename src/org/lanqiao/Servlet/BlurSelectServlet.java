package org.lanqiao.Servlet;
import java.io .IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Service.BlurSelectService;
@WebServlet("/BlurSelectServlet")
public class BlurSelectServlet extends HttpServlet{
	@Override 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//获取参数
		req.setCharacterEncoding("utf-8");//解决中文乱码
		String name=req.getParameter("cname");
		BlurSelectService ser=new BlurSelectService();
		List list=ser.query(name);
		System.out.println(list.size());
		req.setAttribute("Goods", list);
		req.getRequestDispatcher("/jsp/Main.jsp").forward(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doGet(req, resp);
	}
}

