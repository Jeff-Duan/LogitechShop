<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html><head lang="en">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="Keywords" content="罗技商城">
<meta name="Description" content="推着您载着希望的购物车,拿到您最心爱的宝贝,感受最愉快的网购体验,400-6260-228">
<title>注册-罗技官方商城</title>

    <link rel="shortcut icon" href="http://store.logitech.com.cn/pic/favicon.ico" type="/image/x-icon">
    <link rel="stylesheet" href="/Logitech/static/css/resets.css" type="text/css">
    <link rel="stylesheet" href="/Logitech/static/css/userCommon.css" type="text/css">
    <link rel="stylesheet" href="/Logitech/static/css/register.css" type="text/css">
    <script src="/Logitech/static/js/jquery-1.js"></script>
    <link type="text/css" rel="stylesheet" href="/Logitech/static/css/layer.css" id="skinlayercss">
</head>
<body>
            
 <header class="header-box">
          <div class="container">
                <img src="/Logitech/static/img/t.png"/>
          </div>
          <div class="bg"></div>
      </header>

      <section class="container">
      	
          <aside class="register-box">
              <h4 class="register-title">
                  <span class="name">注册</span>
                  <div class="right-text">已是会员，去<a href="/Logitech/jsp/Login.jsp"> 登录&gt;</a></div>
              </h4>
              <!--
                info:信息提示
                ok:验证完成
                error:输入有误
                password: 密码强度
              -->
			<form id="ff" method="post">
              <ul class="from-group-ul">
                  <li class="list ">
                      <div class="from-div-list ok">
                          <label class="label-text">手 机 号</label>
                          <input class="input-text" id="phone" name="tel" placeholder="建议使用常用手机" maxlength="11" type="tel">
                          <i class="icon-ok"></i>
                      </div>
                      <div class="info" id="PhoneInfo"></div>
                  </li>
                  <li class="list error">
                      <div class="from-div-list">
                          <label class="label-text">手机验证码</label>
                          <input class="input-text" id="msg_num" name="yzm" placeholder="请输入手机验证码" maxlength="6" type="text">
                          <i class="icon-ok" style="right:100px;"></i>
                          <a class="get-code" href="#" id="verify_refresh" onclick="getnum()" href="#" >获取验证码</a>
                      </div>
                      <div class="info" id="errs" style="display:none">如果未收到，请再点击获取验证码，重新获取</div>
                  </li>

                  <li class="list ">
                      <div class="from-div-list">
                          <label class="label-text">设置密码</label>
                          <input class="input-text" placeholder="建议至少两种字符组合" maxlength="20" name="pass" id="pwd" type="password">
                          <i class="icon-ok"></i>
                      </div>
                      <div class="info"></div>
                    
                  </li>
                  <li class="list ok">
                      <div class="from-div-list">
                          <label class="label-text">确认密码</label>
                          <input class="input-text" placeholder="请再输入密码" id="password" maxlength="20" type="password">
                          <i class="icon-ok" id="oks" style="display:none"></i>
                      </div>
                      <div class="info">两次密码输入不一致</div>
                  </li>
                  <li class="list ">
                      <div class="from-div-list ok">
                          <label class="label-text">用户名</label>
                          <input class="input-text" id="name" name="uname" placeholder="请填写姓名"  maxlength="11" type="tel">
                          <i class="icon-ok"></i>
                      </div>
                      <div class="info" id="PhoneInfo"></div>
                  </li>
                  <li class="list ">
                      <div class="from-div-list ok">
                          <label class="label-text">地址</label>
                          <input class="input-text" id="address" name="addr" placeholder="请尽量详细" maxlength="11" type="tel">
                          <i class="icon-ok"></i>
                      </div>
                      <div class="info" id="PhoneInfo"></div>
                  </li>
              </ul>
              </form>
              <p class="check-p"><label class="label-text"><input id="ck" checked="checked" type="checkbox">我已经认证阅读<a href="http://store.logitech.com.cn/help/Agreement.aspx">《用户服务协议》</a> ，并完全同意协议中的所有条款。</label></p>
              <!-- <a class="user-default-btn" href="javascript:void(0);" style="background: gray;" class="btn" onclick="validateNum()">验证</a> -->
              <a class="user-default-btn" href="javascript:void(0);" class="btn btn-block btn-flat" id="regist">立即注册</a>
         	
          </aside>
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

 <script type="text/javascript">
	var key;
 	//获取验证码
 	$("#verify_refresh").click(function(){
    	var tel=$("#phone").val();
    	//电话号码
    	$.ajax({
            cache: false,
            type: "POST",
            url:"/Logitech/PhoneServlet",
            data:{tel:tel},// 你的formid
            async: true,
          	success:function(){
            }
    	});
	});
 	$("#regist").click(function(){
    	alert("zhuc点击ajax");
    	var msg_num=$("#msg_num").val();
    	//手机验证码
    	$.ajax({
            cache: false,
            type: "POST",
            url:"/Logitech/RegisterServlet",
            data:$('#ff').serialize(),
            async: true,
            success: function() {
            	layer.msg('注册成功');
            }
    	});
    });
    </script>
<script type="text/javascript" async="" src="/MidProjectShopping/js/vds.js"></script>
<script src="/MidProjectShopping/js/pc.js" id="zhichiload" mantrace="true"></script>



   
    <script src="/Logitech/static/js/jquery.js"></script>
    <script src="/Logitech/static/js/switchable.js"></script>
    <script src="/Logitech/static/js/blocksit.js"></script>
    <script src="/Logitech/static/js/forweb.js"></script>
    <script src="/Logitech/static/js/common.js"></script>
    <script src="/Logitech/static/js/layer.js"></script>
    <script src="/Logitech/static/js/Record.js"></script>

<script type="text/javascript">
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$");
    var enoughRegex = new RegExp("(?=.{6,}).*");
    var CellPhoneReg = new RegExp("^[1][3-8]+\\d{9}");
    var EmailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var urlReferrer = '../Index.aspx';

    //注册
    function RegisterCustomer(obj) {
        var pwd = $("#pwd").val();
        var password = $("#password").val();
        var Code = $("#txtYZM").val();
        if (pwd.length == 0 || password.length == 0) {
            layer.msg("请输入密码");
            return false;
        }
        if (pwd.length < 6) {
            layer.msg("密码长度不能太短");
            return false;
        }
        if (password != pwd) {
            layer.msg("两次输入的密码不一致");
            return false;
        }
        if (!$("#ck").is(":checked")) {
            layer.msg("请接受服务协议");
            return;
        }
        //  var RegisterInfo = GetAllInfo();
        var Code = $('#txtYZM').val().trim();
        // var yxCode = $('#txtYXYZM').val().trim();
        if (Code == "") {
            layer.msg("验证码不能为空!");
            return;
        }
        $.ajax({ //这里使用到Jquery的ajax方法
            type: "POST",
            dataType: "html",
            cache: false,
            url: '/AjaxService/Customer.aspx?action=verificationcode', //请求的处理数据
            data: { "CellPhone": $('#txtCellPhone').val().trim(), "Code": $('#txtYZM').val().trim() },
            success: function (result) {
                if (result != "bohineterror") {
                    if (result == "bohinetsuccess") {
                        $.post("/AjaxService/Customer.aspx?action=Reg", { "Phone": $("#txtCellPhone").val(), "Pwd": $("#pwd").val(), "Code": $("#txtYZM").val().trim() }, function (data) {

                            if (data == "ok") {
                                location.href = "/Customer/RegisterLuck.aspx";
                            } else if (data == "NoCode") {
                                layer.msg("验证码错误！");
                            }else {
                                layer.msg("您已经注册，可直接用原帐号进入");
                            }

                        })
                    } else {
                        //$("#spanYZM").html("您已经注册，可直接用原帐号进入");
                        layer.msg("您已经注册，可直接用原帐号进入");
                    }
                } else {
                    $("#txtYXYZM").val('')
                    CheckCaptcha();
                    //    $("#spanYZM").html("验证码错误!");
                    layer.msg("验证码错误!");
                }
            }
        });
    }

    //获取验证码
    function CheckCaptcha(obj) {
        var src = "/AjaxService/Captcha.aspx?CaptchaCode=LgCaptchaCode" + Math.random();
        $("#imgcode").attr('src', src);
    }
    //function GetAllInfo() {
    //    var registerInfo = "";
    //    var value = "";

    //    //收集邮箱验证码
    //    registerInfo += splitFirst + "ValidCode" + splitSecond + $.trim($("#txtYXYZM").val());;
    //    if ($('#aChange').html() != "使用邮箱注册") //邮箱注册
    //    {
    //        //收集用户名
    //        if (g("txtCustomerID") != null) {
    //            if (CheckRegisterCustomerID("txtCustomerID", false)) {
    //                value = $.trim($("#txtCustomerID").val());
    //                registerInfo += splitFirst + "CustomerID" + splitSecond + value;
    //            }
    //            else
    //                return;
    //        }

    //    } else {
    //        ////收集电话号码
    //        if (g("txtCellPhone") != null) {
    //            if (CheckRegisterCellPhone("txtCellPhone", false)) {
    //                value = g("txtCellPhone").value;
    //                registerInfo += splitFirst + "CellPhone" + splitSecond + value;
    //            } else
    //                return;
    //        }
    //    }

    //    //收集密码
    //    if (g("txtPassword") != null) {
    //        if (CheckPassword("txtPassword")) {
    //            value = $("#txtPassword").val();
    //            registerInfo += splitFirst + "Password" + splitSecond + value;
    //        } else
    //            return;
    //    }
    //    if (registerInfo.length > 0) {
    //        return "success" + registerInfo;
    //    }
    //    else {
    //        return "";
    //    }
    //}

    $(".register-box").find(".input-text").on('focus', function () {

        var that = this;
        var id = $(that).attr("id");
        var value = $("#" + id).val();
        $(that).parent().attr("style", "border:1px solid blue");
        if (id == "txtCellPhone") {
            if (value == "") {
                $(that).parent().parent().attr("class", "list info");
                $(that).parent().parent().find(".info").html("手机号很重要，它可以用来登录和找回密码哦")
            }
        } else if (id == "pwd") {
            if (value == "") {
                $(that).parent().parent().attr("class", "list info");
                $(that).parent().parent().find(".info").html("建议使用数字，字母和符号2种字符以上的组合")
            }
        }
    });

        //$(that).on('keyup.input', function () {
        //    console.log("UP");
        //    // alert("");

        //});
    
    $("#pwd").keyup(function () {
        var value = $("#pwd").val();
        var that = this;

            var html = "";
    
            if (enoughRegex.test(value) == false) {
                $(that).parent().parent().attr("class", "list info");
                html = "安全强度适低，可以使用三种以上的组合来提高安全强度";
            } else if (strongRegex.test(value)) {

                $(that).parent().parent().attr("class", "list info ok");

                html = "安全强度适中，可以使用三种以上的组合来提高安全强度";
            } else if (mediumRegex.test(value)) {
                $(that).parent().parent().attr("class", "list info ok");
                html = "安全强度适高";
            } else {
                $(that).parent().parent().attr("class", "list info ok");
                html = "安全强度适低，可以使用三种以上的组合来提高安全强度";
            }

            $(that).parent().parent().find(".info").html(html);
        

    });

    $(".register-box").find(".input-text").on('blur', function () {
        var that = this;
        var id = $(that).attr("id");
        var value = $("#" + id).val();
        $(that).parent().attr("style", "");
        if (id == "txtCellPhone") {
            if (value != "") {
                if (!CellPhoneReg.test(value)) {

                    $(that).parent().parent().find(".info").html("手机号码格式不正确");
                    $(that).parent().parent().attr("class", "list error");
                    return;
                }
                $.post("/AjaxService/Customer.aspx?action=checkcellphone", { "CellPhone": value }, function (data) {
                    if (data == "bohinetsuccess") {

                        $(that).parent().parent().attr("class","list ok");
                    } else {
                        $(that).parent().parent().find(".info").html("该手机号码已注册过");
                        $(that).parent().parent().attr("class", "list error");
                    }

                })

            } else {
                $(that).parent().parent().attr("class", "list");
            }
        } else if (id == "pwd") {
            if (value != "") {
                if (value.length <6) {
                    $(that).parent().parent().attr("class", "list info error");
                    $(that).parent().parent().find(".info").html("长度不能小于6个字符");
                    return;
                }
                return;
            }
            $(that).parent().parent().attr("class", "list");

        } else if (id == "password") {
            if (value != "") {
                if (value == $("#pwd").val()) {
                    $(that).parent().parent().attr("class", "list ok");
                } else {
                    $(that).parent().parent().attr("class", "list error");
                    $(that).parent().parent().find(".info").html("两次输入的密码不一致")
                }
            }
        }
        $(that).off('keyup.input');
        timers = setTimeout(function () {
      
        }, 200);
    });

    $("#password").blur(function () {

        if ($("#pwd").val().length >= 6) {

            if ($("#pwd").val() == $("#password").val()) {
                $("#oks").show();
            }
        }
    })
    //验证码
$("#getZYM").click(function () {

        var cellphone = $("#txtCellPhone").val();
        var YZM = $("#txtYXYZM").val();
        if (cellphone.length == 0) {
            layer.msg("手机号码不能为空!");
            return;
        }
        else if (!CellPhoneReg.test(cellphone)) {
            layer.msg("手机号码格式不正确！");
            //   $("#spanCellPhone").html("手机号码格式不正确！");
            return;
        }
        var loadIndex = layer.load('请稍等！', 0);
        if (YZM == "") {
            layer.msg("请输入验证码!");
            return;  
        }
        $.post("/AjaxService/Customer.aspx?action=checkcellphone", { "CellPhone": cellphone }, function (data) {
            if (data == "bohinetsuccess") {
                $.post("/AjaxService/Customer.aspx?action=sendcode", { "CustomerID": cellphone, Captcha: YZM }, function (returnVaule) {
                    if (returnVaule == "ok") {
                        layer.close(loadIndex);
                        $("#errs").show();
                        get_code_time();

                    } else {
                        $("#txtYXYZM").val('')
                        CheckCaptcha();
                        layer.msg(returnVaule);
                        layer.close(loadIndex);
                    }
      
                    //   $("#spanYZM").html(returnVaule);
                });
            } else {
                layer.msg("该手机号已注册,快去登录吧！")
                layer.close(loadIndex);
            }
        });
    })


    var wait = 120;
    get_code_time = function () {

        if (wait == 0) {
            //  $("#getZYM").attr("disabled");
            $("#getZYM").html("获取验证码");
            wait = 120;
        } else {
            //   $("#getZYM").attr("disabled", true);
            $("#getZYM").html(wait + "秒后重新获取")
            wait--;
            setTimeout(function () {
                get_code_time()
            }, 1000)
        }
    }
 	
</script>
</body>
</html>