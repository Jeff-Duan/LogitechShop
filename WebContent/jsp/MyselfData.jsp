<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>个人资料</title>  
    <link rel="stylesheet" href="/Logitech/static/css/pintuer.css">
    <link rel="stylesheet" href="/Logitech/static/css/admin.css">
    <script src="/Logitech/static/js/jquery.js"></script>
    <script src="/Logitech/static/js/pintuer.js"></script>  
    <script type="text/javascript">
    
    $(document).ready(function(){
		$("#btn").click(function(){
			//传入一个非query对象
			var data = new FormData($("#fm")[0]); 
		    $.ajax({
		        type:'POST',
		        url:"/Logitech/uploadImagesServlet",
		        cache: false,
		        data: data,
		        contentType: false,  
		        processData: false,
		        async: true,
		        success: function(data){
		        	alert(111)
		        	var im=$.parseJSON(data);
		        	$("#gmg").attr("src",im.url);
		        	$("#mygmgvalue").val(im.image);
		        },
		        error: function(){
		            alert("error");
		        }
		    });
		});
	});
    
    </script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong><span class="icon-pencil-square-o"></span> 个人资料</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" >
      <div class="form-group" style="display:none">
        <div class="label">
          <label>副加标题：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="sentitle" value="" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>用户头像：</label>
        </div>
        <%-- <div class="field">
          <input type="text" class="input" name="user_pictuer" value="${User.user_picture}" readonly/>
          <div class="tips"></div>
        </div> --%>
         <div class="form-group">
        <div class="label">
          <label>修改头像：</label>
        </div>
        <div class="field">
        <td>
        <input id="mygmgvalue" type="hidden" name="user_picture" value="">
          <img id="gmg" alt="上传头像" src="/Logitech/static/img/bg.jpg" width="240" height="240" />
          <input type="file" id="suoluetu" name="user_picture2" />
          <input id="btn" type="button" style="width:'100%'" value="上传图片" />
          </td>
        </div> 
	</div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>用户ID：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="user_id" value="${User.user_id}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>用户名：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="user_name" value="${User.user_name}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>密码：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="password" value="${User.password}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group" >
        <div class="label">
          <label>真实姓名：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="real_name" value="${User.real_name}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>地址：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="address" value="${User.address}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>邮箱：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="email" value="${User.email}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>电话：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="phone" value="${User.phone}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
     
      <div class="form-group">
        <div class="label">
          <label>身份证：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="identity" value="${User.identity}" readonly/>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>QQ：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="QQ" value="${User.qq}" readonly/>
          <div class="tips"></div>
        </div>
      </div>  
    </form>
  </div>
</div>
</body></html>