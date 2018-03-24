<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="/Logitech/static/css/pintuer.css">
<link rel="stylesheet" href="/Logitech/static/css/admin.css">
<script src="/Logitech/static/js/jquery.js"></script>
<script src="/Logitech/static/js/pintuer.js"></script>
<script src="/Logitech/static/prigun/layer-v3.0.3/layer/layer.js" ></script>
</head>
<body>
<%-- <% User u = (User)session.getAttribute("user"); %> --%>
<div class="panel admin-panel">
  <div class="panel-head"><strong><span class="icon-key"></span> 修改个人资料</strong></div>
  <div class="body-content">
    <form id="fm" method="post" enctype="multipart/form-data" class="form-x" >
    <div class="form-group">
        <div class="label">
          <label>用户ID：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="user_id" value="${User.user_id}"  readonly/>
          <div class="tips"></div>
        </div>
      </div>
     <%--  <div class="form-group">
        <div class="label">
          <label>上传头像：</label>
        </div>
        <div class="field">
        <td>
          <input id="mygmgvalue" type="hidden" name="user_picture" value="">
          <img id="gmg" alt="上传头像" src="/Logitech/static/images${User.user_picture}" width="240" height="240" />
          <input type="file" id="suoluetu" name="user_picture2" />
          <input id="btn" type="button" style="width:'100%'" value="上传图片" />
          </td>
        </div> 
	</div>   --%>
      </div>
      <div class="form-group">
        <div class="label">
          <label>用户名：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="user_name" value="${User.user_name}"  />
          <div class="tips"></div>
        </div>
      </div>    
      <div class="form-group">
        <div class="label">
          <label>密码：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="password" value="${User.password}" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>真实姓名：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="real_name" value="${User.real_name}" />
          <div class="tips"></div>
        </div>
      </div>    
      <div class="form-group">
        <div class="label">
          <label>地址：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="address" value="${User.address}" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>邮箱：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="email" value="${User.email}" />
          <div class="tips"></div>
        </div>
      </div>
        <div class="form-group">
        <div class="label">
          <label>电话：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="phone" value="${User.phone}" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>身份证：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="identity" value="${User.identity}" />
          <div class="tips"></div>
        </div>
      </div>  
      <div class="form-group">
        <div class="label">
          <label>QQ:</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="qq" value="${User.qq}" />
          <div class="tips"></div>
        </div>
      </div>    
      
		<div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" onclick="save()" type="submit">提交修改</button>   
        </div>
      </div>      
    </form>
  </div>
</div>

<script type="text/javascript">
	function save() {
		alert("进入submit")
		$.ajax({
			url:'/Logitech/UpdateMyself2Servlet',
			data:$("form").serialize(),
			dataType:"text",
			type:"post",
			success:function(result){}
		});
	}
	
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

</body>
</html>