<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import="java.util.ArrayList" import="java.util.HashMap" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script src="/Logitech/static/js/jquery.js" type="text/javascript" charset="utf-8"></script> 
		<link rel="stylesheet" type="text/css" href="/Logitech/static/css/bootstrap-3.3.2.min.css"/>
	</head>
	<body>
		<div class="text-center">

	 	<table class="table table-striped table-bordered table-hover" style="float: right; width: 1170px;">
	 		
	 		<thead>
		 		<tr class="tableHead">
		 			<th>订单ID</th>
		 			<th>订单时间</th>
		 			<th>订单号</th>
		 			<th>收货人</th>
		 			<th>收货人电话</th>
		 			<th>收货人地址</th>
		 			<th>是否支付</th>
		 		</tr>
	 		</thead>
	 		
	 		<tbody>
 					<%
					ArrayList<HashMap<String,Object>>   list=(ArrayList<HashMap<String,Object>> )request.getAttribute("data");
							for(int i=0;i<list.size();i++){
								HashMap<String,Object>  map=(HashMap<String,Object>) list.get(i);
						%>
	 				<tr>
		 			<td><%=map.get("order_id") %></td>
		 			<td><%=map.get("order_time") %></td>
		 			<td><%=map.get("order_number") %></td>
		 			<td><%=map.get("receive_name") %></td>
		 			<td><%=map.get("receive_phone") %></td>
		 			<td><%=map.get("receive_address") %></td>
		 			<td><%=map.get("ispay") %></td>
		 			</tr>
		 			<%
					}
					%>
	 			</tbody>
	 	</table>
	 	</div>
	</body>
</html>
