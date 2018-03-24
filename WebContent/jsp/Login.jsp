<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html><head lang="en">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
       <title>登录-罗技官方商城</title>

    <link rel="stylesheet" href="/Logitech/static/css/resets.css" type="text/css">
    <link rel="stylesheet" href="/Logitech/static/css/userCommon.css" type="text/css">
    <link rel="stylesheet" href="/Logitech/static/css/logins.css" type="text/css">
	<link rel="stylesheet" href="/Logitech/static/css/layer.css" type="text/css" id="skinlayercss">
</head>

<body>     
 <header class="header-box">
          <div class="container">
                <img src="/Logitech/static/img/罗技.png"/>
          </div>
          <div class="bg"></div>
      </header>

      <section class="login-main">

          <div style="background: url(http://images.wincheers.net/Images/BannerImages/logitech/yonghudenglu/YHDL.jpg) no-repeat center;height:100%;"> </div>
           <div class="login-box">
                    <h4 class="login-title"><span class="name">账户登录</span><a class="link-a" href="/Logitech/jsp/Register.jsp">手机快速注册&gt;</a> </h4>
                    <div class="login-error-info" style="display:none">
                        <i class="icon-error"></i><span id="err"></span>
                    </div>
                    <form id="ff" method="post">
                    <div id="LoginFrom" class="login-form">
                           <div class="form-list ">
                               <input class="input-text" name="name" placeholder="手机号/邮箱/账户名" id="txtUserName" onblur="GetPwdAndChk()" type="text">
                               <i class="icon-login-user"></i>
                               <i class="icon-close"></i>
                           </div>
                            <div class="form-list">
                                <input class="input-text" placeholder="密码" value="" id="txtPassword" class="pw" name="pass" type="password">
                                <i class="icon-login-password"></i>
                                <i class="icon-close"></i>
                            </div>
                            <div class="form-list">
					     	<input type="text" style="width:60%;height:100%;border:1px #BFBFBF;padding-left:15px" name="verifyCode" id="verifyCode" placeholder="请输入验证码",required:true" autocomplete="off" class="easyui-textbox">
					     		<span>
					        	<img alt="验证码" id="verifyCodeImage" onclick="photo()" src="/Logitech/ImageServlet"/> 
					     		</span>
							</div>
                    </div>
                    </form>
                    <div>
                        <p class="login-tool">
                            <label class="label-check"><input type="checkbox" id="chkRememberPwd">自动登录</label>
                        </p>
                         <a class="user-default-btn" onclick="submitForm()" href="javascript:void(0);">登     录</a>
                    </div>
                    <div class="other-login">
                       
                        <form method="post" action="UserLogin.aspx?drUrl=%2fCustomer%2fIndex.aspx" id="ctl00">
<div class="aspNetHidden">
<input name="__EVENTTARGET" id="__EVENTTARGET" value="" type="hidden">
<input name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" type="hidden">

</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['ctl00'];
if (!theForm) {
    theForm = document.ctl00;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


                      
                   
<div class="aspNetHidden">

	<input name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="89AD47D3" type="hidden">
</div><input name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTU3MDk2NDEyMw9kFgICAw8WAh4EVGV4dAW8AjxkaXYgc3R5bGU9J2JhY2tncm91bmQ6IHVybChodHRwOi8vaW1hZ2VzLndpbmNoZWVycy5uZXQvSW1hZ2VzL0Jhbm5lckltYWdlcy9sb2dpdGVjaC95b25naHVkZW5nbHUvWUhETC5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7aGVpZ2h0OjEwMCU7Jz48YSBzdHlsZT0nZGlzcGxheTpibG9jazsgaGVpZ2h0OjEwMCU7JyBocmVmPSdodHRwOi8vc3RvcmUubG9naXRlY2guY29tLmNuL3Byb2R1Y3QvU2FsZXNQcm9tb3Rpb24uYXNweD9zeXNubz0xNTMnIHRhcmdldD0nX2JsYW5rJyB0aXRsZT0n55So5oi355m75b2V55WM6Z2i5bm/5ZGK5L2NJyA+PC9hPiA8L2Rpdj5kZJnvctFX6YJJcyhvslZ+cuVZauZfq9GeMN4o6fF+qN4I" type="hidden"></form>
                         </div>
                </div>
      </section>

      
      <footer class="footer-box">
          <div class="container">
              <p>罗技官方商城由罗技（中国）科技有限公司授权双齐国际贸易（上海）有限公司负责经营 2017&gt; , all rights reserved</p>
              <p>
                  <a href="http://www.logitech.com.cn/zh-cn" target="_blank">罗技官方网站</a>
                  <a href="http://store.logitech.com.cn/help/Contact.aspx" target="_blank">联系方式</a>
                  <a href="http://store.logitech.com.cn/help/Privacy.aspx" target="_blank">隐私声明</a>
                  <a href="http://store.logitech.com.cn/help/Agreement.aspx" target="_blank">用户服务协议</a>
                  <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">沪ICP备10200262号</a>
              </p>
          </div>
      </footer>

<script src="/Logitech/static/js/pc.js" id="zhichiload" mantrace="true"></script>
<script src="/Logitech/static/js/jquery-1.js"></script>
<script src="/Logitech/static/js/jquery.js"></script>
<script src="/Logitech/static/js/switchable.js"></script>
<script src="/Logitech/static/js/blocksit.js"></script>
<script src="/Logitech/static/js/forweb.js"></script>
<script src="/Logitech/static/js/layer.js"></script>
<script src="/Logitech/static/js/common.js"></script>

  	<script>

          $(function () {
              var timers;
              $("#LoginFrom").find(".form-list").find('.icon-close').click(function (e) {
                  // alert();
                  var e = e || window.event;
                  $(this).parent().find(".input-text").focus().val("");
                  e.stopPropagation();
                  e.preventDefault();
                  return false;
              });

              $("#LoginFrom").find(".input-text").on('focus', function () {

                  var that = this;
       
                  $(that).parent().attr("class", "form-list error");
                  
              });


              $("#LoginFrom").find(".input-text").on('blur', function () {
                  var that = this;
                  $(that).off('keyup.input');
                  timers = setTimeout(function () {
                      $(that).parent().attr("class", "form-list");
                  }, 200);
              });
          })

          $(document).ready(function () {
              $(".user-default-btn").click(function () {
                  var CustomerID = $("#txtCustomerID").val();
                  var Pwd = $("#txtPassword").val();
                  var YZM = $("#txtYXYZM").val();
                  if (CustomerID == "") {

                      $("#err").html("请输入账号");
                      $(".login-error-info").show();
                      return;
                  }
                  if (Pwd == "") {
                      $("#err").html("请输入密码");
                      $(".login-error-info").show();
                      return;
                  }
                  if (YZM == "") {
                      layer.alert("请输入验证码!");
                      return;
                  }
                  
              });
              var src = "/AjaxService/Captcha.aspx?CaptchaCode=LgCaptchaCode";
              $("#LoginCaptcha").attr("src", src);
          });

      </script>
	
	<!-- 登陆 -->
	<script>
		function submitForm(){
			$.ajax({
                type: "post",
                url:"/Logitech/LoginServlet",
                data:$('#ff').serialize(), //将表格中内容拼接成字符串      
                dataType:"text",
                async: false,
                error: function(data) {
                	layer.msg('连接错误');
                },
        		success: function (result) {
        			var result=$.parseJSON(result);
					if(result.code==0){
						layer.msg('验证码错误');
					}else if(result.code==100){
						document.location.href = "/Logitech/jsp/Index.jsp"; //如果登录成功则跳到管理界面
						parent.tb_remove();
					}else{
						layer.msg('用户名或密码错误');
					}
				} 
                
            });
			
		}
		
		
	</script> 
	
	<!-- 验证码 -->
	<script>
		function photo(){
			var timstamp=new Date().getTime();
			$("#verifyCodeImage").attr("src",'/Logitech/ImageServlet?random='+timstamp);
		}
	</script>	

<div id="zhichiBtnBox" style="position: fixed; z-index: 2147483583; box-sizing: content-box; top: 50%; margin-top: -104px; width: 40px; border-radius: 0px 5px 5px 0px; left: 0px; background: rgb(15, 146, 237) none repeat scroll 0% 0%; transition: all 0.3s ease-in-out 0.1s;">
	<span id="zhichiCount" style="height: 30px; width: 30px; line-height: 30px; border: 1px solid #FFFFFF; border-radius: 50%; background-color: red; color: #FFFFFF; text-align: center; display: none; position: absolute; bottom: -15px; right: -15px;"></span>
</div>
</body>
</html>
