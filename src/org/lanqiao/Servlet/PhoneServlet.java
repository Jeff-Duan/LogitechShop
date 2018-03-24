package org.lanqiao.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.lanqiao.Util.YanUtil;
import com.aliyun.mns.common.ClientException;
import com.aliyuncs.exceptions.ServerException;
@WebServlet("/PhoneServlet")
public class PhoneServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PhoneServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String tel=request.getParameter("tel");
		YanUtil dunxin=new YanUtil();	
		try {
			int YZM=dunxin.DuanXin(tel);
			HttpSession session2=request.getSession();
			session2.setAttribute("YZM", YZM);
		} catch (ClientException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ServerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (com.aliyuncs.exceptions.ClientException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
}