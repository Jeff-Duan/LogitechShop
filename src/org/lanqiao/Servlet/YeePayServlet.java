package org.lanqiao.Servlet;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.lanqiao.Model.User;
import org.lanqiao.Util.PaymentUtil;


/**
 * 易宝支付
 * @author Lanqiao08
 *
 */
@WebServlet("/order/yeepay.jhtml")
public class YeePayServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		String a = (String) ServletActionContext.getRequest().getSession().getAttribute("gourl");
//		System.out.println(a);
//		UUID id = UUID.randomUUID();
//		String uuid =  id.toString().replace("-", "");
		User user=(User)request.getSession().getAttribute("loginUser");
		String userid=user.getUser_id();
		
		
		String price=request.getParameter("order_price");
		String number=request.getParameter("order_number");
		
		
		
		String p0_Cmd = "Buy"; // 业务类型:
		String p1_MerId = "10001126856";// 商户编号:
		
		String p2_Order =number;// 订单编号:
		String p3_Amt = price; // 付款金额:
		String p4_Cur = "CNY"; // 交易币种:
		String p5_Pid = ""; // 商品名称:
		String p6_Pcat = ""; // 商品种类:
		String p7_Pdesc = ""; // 商品描述:
		//String p8_Url = "http://localhost:8080/garbini/order/paystatus.jhtml?orderid="+p2_Order; // 商户接收支付成功数据的地址:
		String p8_Url = "http://192.168.50.253:8080/Logitech/PayMoneyServlet?orderid="+p2_Order; // 商户接收支付成功数据的地址:
		String p9_SAF = ""; // 送货地址:
		String pa_MP = ""; // 商户扩展信息:
		String pd_FrpId = "";// 支付通道编码:
		String pr_NeedResponse = "1"; // 应答机制:
		String keyValue = "69cl522AV6q613Ii4W6u8K6XuW8vM1N6bFgyv769220IuYe9u37N4y7rI4Pl"; // 秘钥
		String hmac = PaymentUtil.buildHmac(p0_Cmd, p1_MerId, p2_Order, p3_Amt,
				p4_Cur, p5_Pid, p6_Pcat, p7_Pdesc, p8_Url, p9_SAF, pa_MP,
				pd_FrpId, pr_NeedResponse, keyValue); 
		
		/*Service ser=new Service();
		ser.deleteCarService(userid);*/
		
		
		
		
		
		
		// 向易宝发送请求:
		StringBuffer sb = new StringBuffer("https://www.yeepay.com/app-merchant-proxy/node?");
		sb.append("p0_Cmd=").append(p0_Cmd).append("&");
		sb.append("p1_MerId=").append(p1_MerId).append("&");
		sb.append("p2_Order=").append(p2_Order).append("&");
		sb.append("p3_Amt=").append(p3_Amt).append("&");
		sb.append("p4_Cur=").append(p4_Cur).append("&");
		sb.append("p5_Pid=").append(p5_Pid).append("&");
		sb.append("p6_Pcat=").append(p6_Pcat).append("&");
		sb.append("p7_Pdesc=").append(p7_Pdesc).append("&");
		sb.append("p8_Url=").append(p8_Url).append("&");
		sb.append("p9_SAF=").append(p9_SAF).append("&");
		sb.append("pa_MP=").append(pa_MP).append("&");
		sb.append("pd_FrpId=").append(pd_FrpId).append("&");
		sb.append("pr_NeedResponse=").append(pr_NeedResponse).append("&");
		sb.append("hmac=").append(hmac);
		// 重定向:向易宝出发:
		response.sendRedirect(sb.toString());
		
	}

	
}
