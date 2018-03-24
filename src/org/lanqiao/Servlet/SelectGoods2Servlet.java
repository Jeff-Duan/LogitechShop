package org.lanqiao.Servlet;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Model.Goods;
import org.lanqiao.Service.SelectGoods2Service;

@WebServlet("/SelectGoods2Servlet")
public class SelectGoods2Servlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		
		System.out.println("查询展示商品servlet2");
		
		
		
		try {
			
			String kind_name=request.getParameter("kind_name");
			
			SelectGoods2Service sgs=new SelectGoods2Service();
			ArrayList<Goods> goods=sgs.selectproduct(kind_name);
			
			request.setAttribute("Goods", goods);
			request.getRequestDispatcher("jsp/Main.jsp").forward(request, response);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
