<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
		<div id="head" style="float: right; margin-top: 40px; margin-left: 200px;">
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
	
	

    <section class="cartMain" style="margin-top: 80px; height: 280px; border: solid #CCCCCC;">
        <div class="car-quan">
        	<div class="car-null" style="margin-left: 500px;padding-top: 30px;">
        		<img src="/Logitech/static/img/timg.jpg"/>
        		<img src="/Logitech/static/img/shopcar.png"/>
        	</div>
        	
        	<div class="car-go" style="margin-left: 500px;margin-top: 20px;">
        		<button style="border-radius: 40px;" onclick="index()"><img src="/Logitech/static/img/go.png" /></button>
        	</div>
        </div>
        
        <!--底部-->
        <div class="bar-wrapper">
            <div class="bar-right">
                <div class="piece">已选商品<strong class="piece_num">0</strong>件</div>
                <div class="totalMoney">共计: <strong class="total_text">0.00</strong></div>
                <div class="calBtn"><button style="border:none;" type="submit">结算</button></div>
            </div>
        </div>
    </section>
    
	
    <script src="/Logitech/static/js/jquery-3.2.1.min.js"></script>
    <script src="/Logitech/static/js/carts.js"></script>
    <script type="text/javascript">
    	function index() {
    		window.location.href="/Logitech/jsp/Index.jsp";
		}
    	
    	
    	
    	
    </script>
	
</body>
</html>
