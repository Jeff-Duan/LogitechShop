<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="utf-8" />
		<title>首页</title>
		
		<!--外部样式表-->
		<link rel="stylesheet" href="/Logitech/static/prigun/bootstrap-3.3.7-dist/css/bootstrap.css" />
		<!--引入JS文件-->
		<script type="text/javascript" src="/Logitech/static/js/jquery-3.2.1.min.js" ></script>
		<script type="text/javascript" src="/Logitech/static/prigun/bootstrap-3.3.7-dist/js/bootstrap.js" ></script>
		
	</head>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		header{
			margin-bottom: 37%;
			position: relative;
			width: 100%;
			height: 635px;
			z-index: 1;
		}
		#myCarousel{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		#myCarousel-img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		#title{
			position:absolute;
			width: 100%;
			height: 10%;
			top: 3%;
			z-index: 2;
		}
		#tool{
			position:absolute;
			width: 40%;
			height: 100%;
			top:0;
			right: 0;
		}
		#tool a img{
			position:absolute;
			width: 30px;
			height: 30px;
			margin-left: 60%;
			margin-top: 15px;
			z-index: 3;
		}
		#explor{
			position:absolute;
			width: 60%;
			height: 80%;
			top: 10%;
			left: 30px;
			background-color:white;
			z-index: 4;
		}
		#explor a img{
			position:absolute;
			width: 35px;
			height: 30px;
		}
		#explor input{
			position:absolute;
			width:75%;
			height: 40px;
			margin-top: 5px;
			margin-left:40px;
			border: none;
			font-family: "微软雅黑";
			font-size: 20px;
			color: #898989;
		}
		
		
		#menu{
			position:absolute;
			width: 50%;
			height: 10%;
			top: 13%;
			left: 28%;
			z-index: 2;
		}
		#menu-1{
				width: 700px;
				margin:0px auto;
			}
		#menu-1 ul{
				width: 100%;
	 			text-align: center;
				list-style: none;
		}
		#menu-1 ul li a{
				float: left;
	 			width: 120px;
	 			line-height: 30px;
	 			color: white;
	 			text-decoration: none;
	 			position: relative;
		}
		#menu-1 ul li ol a:hover{
				color: gray;
			}
		#menu-1	ol{
				position: absolute;
	 			line-height: 50px;
	 			top: 40px;
	 			list-style: none;
	 			display: none;
		}
		#menu-1 ul li:hover ol{
				display: block;
		}
		#menu-1 ul ol li a{
			background-color:#252A2C;
			float: left;
		}
		
		footer{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 500px;
			background: #252A2C;	
		}
		
		#footer-1{
			position:absolute;
			width: 100%;
			height: 100%;
		}
		#footer-1-1{
			position:absolute;
			width: 100%;
			height: 80%;
			top:0;
		}
		#footer-1-1-1{
			position:absolute;
			width: 100%;
			height: 70%;
			border-bottom: 1px solid whitesmoke;
		}
		#tab div{
			width: 25%;
			height: 25%;
		}
		#footer-1-1-1 a{
			width: 25%;
			height: 25%;
			font-family:"新宋体";
			font-size: 20px;
			color: white;
			text-decoration: none;
		}
		#footer-1-1-2{
			position:absolute;
			width: 100%;
			height: 20%;
			top: 75%;
		}
		#newsletter-email-label{
			position:absolute;
			width: 20%;
			height: 25%;
			top: 5%;
			right:20%;
			font-family: "微软雅黑";
			color: white;
		}
		#newsletter-email{
			position:absolute;
			width: 20%;
			height: 50%;
			bottom: 10%;
			right:20%;
			font-family: "微软雅黑";
			color: white;
			border: none;
		}
		#newsletter-email-button{
			position:absolute;
			width: 4%;
			height: 50%;
			bottom: 10%;
			right:16%;
			background-color: greenyellow;
			border: none;
		}
		#newsletter-email-button input{
			position:absolute;
			width: 30%;
			height: 35%;
			top: 32.5%;
			left: 35%;
		}
		#footer-2{
			position:absolute;
			width: 100%;
			height: 10%;
			bottom: 0;
		}
		#footer-2-1{
			position:absolute;
			width: 100%;
			height: 50%;
			top: 0;
			text-align: center;
			font-family: "微软雅黑";
			color: white;
		}
		#footer-2-2{
			position:absolute;
			width: 100%;
			height: 50%;
			top: 50%;
			text-align: center;
			font-family: "微软雅黑";
			color: white;
		}
	</style>
		
	<body>
		
		<header>
			
			<div id="title">
				<a><center style="padding-top: 10px;"><img src="/Logitech/static/img/标题.png"/></center></a>
				
				<!-- <div id="tool">
					<div id="explor" style="display: none;">
						<a href="#"><img style="margin-top: 10px;margin-left: 5px;" src="/Logitech/static/img/搜索.png" /></a>
						<input type="text" oninput="this.style.color='gray'" onblur="this.style.color='gray'" placeholder="搜索">
						<a href="#"><img style="margin-top: 10px;margin-left: 280px;" src="/Logitech/static/img/关闭.png" /></a>
					</div>
					<a href="#" onclick="explor()"><img src="/Logitech/static/img/搜索(1).png"/></a>
					<a href="/Logitech/jsp/Login.jsp" style="padding-left: 60px;"><img src="/Logitech/static/img/用户.png"/></a>
					<a href="/Logitech/jsp/car.jsp" style="padding-left: 60px;"><img src="/Logitech/static/img/购物车.png"/></a>
				</div> -->
				
			</div>
			<div id="menu" align="center">
				<div id="menu-1" align="center">
				<ul>
					<li><a href="#">鼠标和键盘</a>
						<ol>
							<li style="left: 0px;"><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=1">鼠标</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=2">键盘和键鼠套装</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=3">演示器</a></li>
						</ol>
					</li>
					<li><a href="#">移动</a>
						<ol style="padding-left: 120px;">
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=4">充电支架</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=5">平板电脑保护套</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=6">平板电脑键盘</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=7">智能手机配件</a></li>
						</ol>
					</li>
					<li><a href="#">游戏外设</a>
						<ol style="padding-left: 240px;">
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=8">游戏鼠标</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=9">游戏键盘</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=10">音频/视频</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=11">驾驶</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=12">游戏手柄</a></li>
						</ol>
					</li>
					<li><a href="#">音响</a>
						<ol style="padding-left: 360px;">
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=13">蓝牙音箱</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=14">环绕声系统</a></li>
						</ol>
					</li>
					<li><a href="#">视频</a>
						<ol style="padding-left: 480px;">
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=15">网络摄像头</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=16">会议用摄像头</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=17">耳机麦克风</a></li>
							<li><a href="${pageContext.request.contextPath}/SelectProdoctServlet?kind_id=18">配件</a></li>
						</ol>
					</li>
				</ul>
				</div>
			</div>
			
			
		<!--轮播图-->
		<div id="myCarousel" class="carousel slide" >
		    <!-- 轮播（Carousel）指标 -->
		    <ol class="carousel-indicators">
		        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		        <li data-target="#myCarousel" data-slide-to="1"></li>
		        <li data-target="#myCarousel" data-slide-to="2"></li>
		    </ol>   
		    <!-- 轮播（Carousel）项目 -->
		    <div id="myCarousel-img" class="carousel-inner">
		        <div class="item active" style="width: 100%;height: 100%;">
		            <img src="/Logitech/static/img/hpb.jpg" style="width: 100%;height: 100%;background-repeat: no-repeat;background-size:100% 100%;" alt="First slide">
		        </div>
		        <div class="item" style="width: 100%;height: 100%;">
		            <img src="/Logitech/static/img/home-horiz.jpg" style="width: 100%;height: 100%;background-repeat: no-repeat;background-size:100% 100%;" alt="Second slide">
		        </div>
		        <div class="item" style="width: 100%;height: 100%;">
		            <img src="/Logitech/static/img/spotlight-assets.jpg" style="width: 100%;height: 100%;background-repeat: no-repeat;background-size:100% 100%;" alt="Third slide">
		        </div>
		    </div>
		    <!-- 轮播（Carousel）导航 -->
			
		</div>
			
			
		</header>
		
		<footer>
			
    	<div class="footer-static" id="footer-1">
    		
        <div class="container" id="footer-1-1">
        	
            <div class="row" id="footer-1-1-1">
                <div id="tab" class="col-sm-12 col-sm-offset-0" style="width: 80%;height: 80%;left:10%;top:10%;">
                    <div class="col-md-3">
                        <a href="#">关于罗技</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">联系我们</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">社交网络</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">Ultimate Ears</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">招聘</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">隐私和安全</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">Jaybird</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">投资者(英文)</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">使用条款</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">官方商城</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">新闻中心</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">订阅管理</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">沪ICP备12002604</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#">网站地图</a>
                    </div>
                </div>
            </div>
            
            <div id="footer-1-1-2" class="newsletter-inputs input-group"> 
            <form name="signupForm" id="sign-up-form" role="form" method="post" action="/zh-cn">
            <label id="newsletter-email-label">订阅时事通讯</label>
            <input id="newsletter-email" type="email" class="form-control" oninput="this.style.color='gray'" onblur="this.style.color='gray'" placeholder="您的电子邮件" required>
            <div id="newsletter-email-button">
            	<input  type="image" src="/Logitech/static/img/播放.png"/>
            </div>
            </form>
            </div> 
            
             
            
            </div>
        	</div>
        	
        	<div id="footer-2">
        	<div id="footer-2-1" class="name">中国</div>
            <div id="footer-2-2">&copy; 
            	2017
    			Logitech. 
    			罗技（中国）科技有限公司版权所有
            </div>
            </div>
		
			</footer>
			
			<script type="text/javascript">
			
				$(document).ready(function() {
			    $('.carousel-inner').carousel({
			     interval: 2000
			    })
				});
			
				function explor(){
					$('#explor').show();
				}
				
				
				
				
			</script>
		
	</body>
</html>

