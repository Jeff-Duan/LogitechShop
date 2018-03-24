<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!doctype html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>罗技商城</title>
<link rel="stylesheet" type="text/css" href="/Logitech/static/css/styless.css">
<link href="/Logitech/static/css/erji.css" type="text/css" rel="stylesheet" />
<link href="/Logitech/static/css/reserch.css" type="text/css" rel="stylesheet" />
<script src="/Logitech/static/js/jquery-3.2.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/Logitech/static/prigun/layer-v3.0.3/layer/layer.js" type="text/javascript"></script>

</head>
<body>
<div id="wrapper">
<div class="cart-icon-top">
</div>

<div class="cart-icon-bottom">
</div>

<div id="checkout">
	结账
</div>

<div id="info">

</div>

<div id="header">	
	<ul>
        <li><a href="/Logitech/jsp/Index.jsp">首页</a></li>
        <li><a href="/Logitech/jsp/Myself.jsp">个人中心</a></li>
        <li><a href="/Logitech/SelectCarServlet">我的购物车</a></li>
        <li>
        <div id="container">
    		<div class="search bar6">
        <form action="/Logitech/BlurSelectServlet">
            <input placeholder="请输入关键字" name="cname" type="text">
            <button type="submit"></button>
        </form>
    		</div>
    	</div>
        </li>
        <li style="margin-left:10px"><a href="/Logitech/jsp/Login.jsp">登录</a></li>
        <li style="margin-left:10px"><a href="#" onclick="Exit()">安全退出</a></li>   
        <li style="margin-left:10px"><a href="#">关于我们</a></li>                                           
    </ul>		
</div>
<!-- 安全退出 -->	
<script type="text/javascript">
	function Exit(){
		$.post("/Logitech/ExitServlet",function(){
			window.location.href="/Logitech/jsp/Login.jsp";
		});	
	}
</script>


<div id="sidebar">
	<h3>CART</h3>
    <div id="cart">
    	<span class="empty">购物车空空的~</span>       
    </div> 
 <!--  二级菜单导航 -->
    <script>
$(function (){
  $(".left_nav dd").hover(function(){
  $(".nav_right",this).show();
  });
  $(".left_nav dd").mouseleave(function(){
  $(".nav_right",this).hide();
  });
});
</script>
  <div id="kind" class="left_nav">
    <dl>
    <dt>分类</dt>
    <dd>
    <a href="javascript:" class="nav_left">鼠标和键盘</a>
    	<div class="nav_right">
			<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=鼠标">鼠标</a>
			<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=键盘和键鼠套装">键盘和键鼠套装</a>
			<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=演示器">演示器</a>
		</div>
	</dd>
    <dd>
    <a href="javascript:" class="nav_left">移动</a>
    	<div class="nav_right">
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=充电支架">充电支架</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=平板电脑保护套">平板电脑保护套</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=平板电脑键盘">平板电脑键盘</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=智能手机配件">智能手机配件</a>
    	</div>
    </dd>
    <dd>
    <a href="javascript:" class="nav_left">游戏外设</a>
    	<div class="nav_right">
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=游戏鼠标">游戏鼠标</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=游戏键盘">游戏键盘</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=音频/视频">音频/视频</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=驾驶">驾驶</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=游戏手柄">游戏手柄</a>
    	</div>
    </dd>
    <dd>
    <a href="javascript:" class="nav_left">音响</a>
    	<div class="nav_right">
	    	<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=蓝牙音响">蓝牙音响</a>
	    	<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=环绕声系统">环绕声系统</a>
    	</div>
    </dd>
    <dd>
    <a href="javascript:" class="nav_left">视频</a>
    	<div class="nav_right">
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=网络摄像头">网络摄像头</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=会议用摄像头">会议用摄像头</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=耳机麦克风">耳机麦克风</a>
    		<a href="${pageContext.request.contextPath}/SelectGoods2Servlet?kind_name=配件">配件</a>
    	</div>
    </dd>
    <dd>
    <a href="javascript:" class="nav_left">支持</a>
    	<div class="nav_right">
		    <a href="javascript:">支持和下载</a>
		    <a href="javascript:">论坛</a>
    	</div>
    </dd>
    
    </dl>
  </div>

    
<div id="grid-selector">
       <div id="grid-menu">
       	   View:
           <ul>           	   
               <li class="largeGrid"><a href=""></a></li>
               <li class="smallGrid"><a class="active" href=""></a></li>
           </ul>
       </div>
</div>

<div id="grid">

   		<div id="title" style="width:85%;height:80px;top:0;margin-top:0;">
   		<font style="font-size: 40px;font-family:微软雅黑 ;color: black;margin-left: 30px">
   				<c:forEach items="${Goods}" var="goods" begin="0" end="0">
						${goods.kind_name}
				</c:forEach>
   		</font>
   		<hr>
   		</div>
    
  		 <div class="container">
         <div class="row">
        <div class="col-sm-12" style="width: 100%;height: 80%;left:10%;top:10%;">
                
		<c:forEach items="${Goods}" var="goods">
		<div class="col-md-3">
		<div class="product">
		<div class="make3D" style="background_color:gray">
            <div class="product-front">
                <div class="shadow"></div>
                <img src="${pageContext.request.contextPath}/static/Logitechimg/${goods.kind_id}/${goods.picture}" alt="" />
                <div class="image_overlay"></div>
                <div class="add_to_cart"  id="${goods.goods_id}">加入购物车</div>
                <div class="stats">        	
                    <div class="stats-container">
                        <span class="product_price">$${goods.price}</span>
                        <span class="product_name">${goods.goods_name}</span>    
                        <p>${goods.describ}</p>  
                        
                        <div class="product-options">
                        <strong>SIZES</strong>
                        <span>${goods.size}</span>
                        <strong>鼠标颜色</strong>
                        <div class="colors">
                            <div class="c-blue"><span></span></div>
                            <div class="c-red"><span></span></div>
                            <div class="c-white"><span></span></div>
                            <div class="c-green"><span></span></div>
                        </div>
                    	</div>                       
                    </div>                         
                </div>
    	</div>
		</div>	
		</div>
		</div>
		</c:forEach>
	</div>	
		</div>
		</div>
</div>

</div>
</div>
	
<script src="/Logitech/static/js/stopExecutionOnTimeout.js?t=1" type="text/javascript"></script>
<script src="/Logitech/static/js/main.js" type="text/javascript"></script>
</body>
</html>