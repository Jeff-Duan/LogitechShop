<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>个人管理中心</title>  
    <link rel="stylesheet" href="/Logitech/static/css/pintuer.css"> 
    <link rel="stylesheet" href="/Logitech/static/css/admin.css"> 
    <script src="/Logitech/static/js/myselfjquery.js"></script>   
</head>
<body style="background-color:gray;">
<div class="header bg-main">
  <div class="logo margin-big-left fadein-top">
    <h1><img src="/Logitech/static/img/y.jpg" class="radius-circle rotate-hover" height="50" alt="" />个人管理中心</h1>
  </div>
  
  <div class="head-l">
  <a class="button button-little bg-green" href="/Logitech/jsp/Index.jsp" target="_blank"><span class="icon-home"></span> 前台首页</a>
    &nbsp;&nbsp;
  <a class="button button-little bg-red" href="/Logitech/jsp/Login.jsp"><span class="icon-power-off"></span> 退出登录</a> 
  </div>
</div> 

<div class="leftnav">
  <div class="leftnav-title"><strong><span class="icon-list"></span>菜单列表</strong></div>
  <h2><span class="icon-user"></span>基本设置</h2>
  <ul style="display:block">
    <li><a href="/Logitech/SelectMyOrderServlet" target="right"><span class="icon-caret-right"></span>我的订单</a></li>
    <li><a href="/Logitech/SelectMyselfServlet" target="right"><span class="icon-caret-right"></span>个人资料</a></li>
  </ul>   
  <h2><span class="icon-pencil-square-o"></span>栏目管理</h2>
  <ul>
    <li><a href="/Logitech/UpdateMyself1Servlet" target="right"><span class="icon-caret-right"></span>修改资料</a></li>        
  </ul>  
</div>
<script type="text/javascript">
$(function(){
  $(".leftnav h2").click(function(){
	  $(this).next().slideToggle(200);	
	  $(this).toggleClass("on"); 
  })
  $(".leftnav ul li a").click(function(){
	    $("#a_leader_txt").text($(this).text());
  		$(".leftnav ul li a").removeClass("on");
		$(this).addClass("on");
  })
});
</script>
<div class="admin">
  <iframe scrolling="auto" rameborder="0" src="/Logitech/SelectMyselfServlet" name="right" width="100%" height="100%"></iframe>
</div>
</body>
</html>