package org.lanqiao.Servlet;

import java.io .IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Model.Message;
import org.lanqiao.Service.DeleteCarService;
import com.google.gson.Gson;
@WebServlet("/DeleteCarServlet")
public class DeleteCarServlet extends HttpServlet{
	@Override 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//获取参数
		req.setCharacterEncoding("utf-8");//解决中文乱码
		
		System.out.println("删除购物车servlet");
		
		String id=req.getParameter("car_id");
		
		
		Gson gson=new Gson();
		String json=null;
		Message message;
		
		try {
			DeleteCarService dcs=new DeleteCarService();
			int row=0;
			row=dcs.deletecar(id);
			if(row!=0){
				message=new Message("删除成功","1");
				json=gson.toJson(message);
			}
			else{
				message=new Message("删除失败","0");
				json=gson.toJson(message);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		resp.setContentType("text/json");
		resp.getWriter().print(json);
		resp.getWriter().close();
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doGet(req, resp);
	}
}


