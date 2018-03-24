<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>购物车</title>
    <link rel="stylesheet" href="/Logitech/static/css/reset.css">
    <link rel="stylesheet" href="/Logitech/static/css/carts.css">
</head>
<body>
	<div id="logo"style="width: 1250px;" >
		<img src="/Logitech/static/img/luoji.png" height="100px" width="300px" style="margin-left: 70px;"/>
		<div id="head" style="float: right; margin-top: 40px; margin-right: 0;">
		<ul style="text-decoration: none;">
        <li style="float: left;margin-left: 100px; font-size: 20px;font-family: 新宋体"><a href="/Logitech/jsp/Index.jsp"><b>首页</b></a></li>
        <li style="float: left;padding-left: 30px; font-size: 20px; font-family: 新宋体"><a href="#"><b>个人中心</b></a></li>
        <li style="float: left; padding-left: 30px; font-size: 20px; font-family: 新宋体"><a href="#" onclick="Exit()"><b>安全退出</b></a></li>                                              
   		</ul>
		</div>
	</div>
	
	<!-- 安全退出 -->	
	<script type="text/javascript">
		function Exit(){
			$.post("/Logitech/ExitServlet",function(){
				window.location.href="/Logitech/jsp/Login.jsp";
			});	
		}
	</script>

	
			
	<form action="/Logitech/InOrderServlet">
    <section class="cartMain">
        <div class="cartMain_hd">
            <ul class="order_lists cartTop">
                <li class="list_chk">
                    <!--所有商品全选-->
                    <input type="checkbox" id="all" class="whole_check">
                    <label for="all"></label>
                    	全选
                </li>
                <li class="list_con">商品信息</li>
                <li class="list_info">商品参数</li>
                <li class="list_price">单价</li>
                <li class="list_amount">数量</li>
                <li class="list_sum">金额</li>
                <li class="list_op">操作</li>
            </ul>
        </div>
        
		
        <c:forEach items="${data}" var="shop">
        <div class="cartBox">
            <div class="order_content">
                <ul class="order_lists">
                    <li class="list_chk">
                        <input type="checkbox" id="${shop['car_id']}" name="ck" value="${shop['car_id']}" class="son_check">
                        <label for="${shop['car_id']}"></label>
                    </li>
                    <li class="list_con">
                        <div class="list_img">
                        <a href="javascript:;"><img src="${pageContext.request.contextPath}/static/Logitechimg/${shop['kind_id']}/${shop['picture']}" alt=""></a>
                        </div>
                        <div class="list_text">
                        <a href="#">${shop['goods_name']}</a>
                        </br>
                        <p>描述：${shop['describ']}</p></div>
                        
                    </li>
                    <li class="list_info">
                        <p>规格：${shop['specification']}</p>
                        <p>尺寸：${shop['size']}</p>
                    </li>
                    <li class="list_price">
                        <p class="price">￥${shop['price']}</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty">-</a>
                            <input type="text" value="${shop['goods_count']}" class="sum">
                            <a href="javascript:;" class="plus">+</a>
                        </div>
                    </li>
                    <li class="list_sum">
                        <p class="sum_price">￥${shop['price']}</p>
                    </li>
                    <li class="list_op">
                        <p class="del"><a id="${shop['car_id']}" href="#" class="delBtn">移除商品</a></p>
                    </li>
                </ul>
            </div>
        </div>
	</c:forEach>
	



        <!--底部-->
        <div class="bar-wrapper">
            <div class="bar-right">
                <div class="piece">已选商品<strong class="piece_num">0</strong>件</div>
                <div class="totalMoney">共计: <strong class="total_text">0.00</strong></div>
                <div class="calBtn"><button style="border:none;" type="submit">结算</button></div>
            </div>
        </div>
    </section>
    
    </form>
    
    
    <section class="model_bg"></section>
    <section class="my_model">
        <p class="title">删除宝贝<span class="closeModel">X</span></p>
        <p>您确认要删除该宝贝吗？</p>
        <div class="opBtn"><a href="javascript:;" class="dialog-sure">确定</a><a href="javascript:;" class="dialog-close">关闭</a></div>
    </section>
	
    <script src="/Logitech/static/js/jquery-3.2.1.min.js"></script>
    <script src="/Logitech/static/js/carts.js"></script>

	
</body>
</html>