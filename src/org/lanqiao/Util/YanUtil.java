package org.lanqiao.Util;

import java.util.Random;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;


public class YanUtil {
	public int DuanXin(String tel) throws ServerException, ClientException {  
        
        // 设置超时时间-可自行调整  
        System.setProperty("sun.net.client.defaultConnectTimeout", "20000");  
        System.setProperty("sun.net.client.defaultReadTimeout", "20000");  
        // 初始化ascClient需要的几个参数  
        final String product = "Dysmsapi";// 短信API产品名称  
        final String domain = "dysmsapi.aliyuncs.com";// 短信API产品域名  
        // 替换成你的AK  
        final String accessKeyId = "LTAIAFX0Fq84MhCM";// 你的accessKeyId,参考本文档步骤2  
        final String accessKeySecret = "ZwEOUqgMVCtxhM0hklJQKUJLtm7dTz";// 你的accessKeySecret，参考本文档步骤2  
        // 初始化ascClient,暂时不支持多region  
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou",  
                accessKeyId, accessKeySecret);  
        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product,  
                domain);  
        IAcsClient acsClient = new DefaultAcsClient(profile);  
        // 组装请求对象  
        SendSmsRequest request = new SendSmsRequest();  
        // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为20个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式  
        request.setPhoneNumbers(tel);  
        // 必填:短信签名-可在短信控制台中找到  
        request.setSignName("望山跑死马");  
        // 必填:短信模板-可在短信控制台中找到  
        request.setTemplateCode("SMS_90775001"); 
        // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为  
        int  x = new Random().nextInt(1000000); 
        System.out.println(x);
        request.setTemplateParam("{\"name\":\"张三\", \"number\":\"" + x + "\"}");  
        // 可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者  
         request.setOutId("yourOutId");  
        // 请求失败这里会抛ClientException异常  
        SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request); 
        System.out.println("_____________发送SMS_72780019短信收到的响应信息_______________");
        System.out.println("请求的ID:" + sendSmsResponse.getRequestId());
        System.out.println("请求的状态码:" + sendSmsResponse.getCode());
        System.out.println("请求的状态码描述:" + sendSmsResponse.getMessage());
        System.out.println("请求的回执ID:" + sendSmsResponse.getBizId());
        if (sendSmsResponse.getCode() != null  
                && sendSmsResponse.getCode().equals("OK")) {  
            // 请求成功  
            System.out.println("发送成功！");  
            
        }else if(sendSmsResponse.getCode().equals("isv.BUSINESS_LIMIT_CONTROL")){  
            System.out.println("此号码频繁发送验证码，暂时不能获取！");  
        }  
        System.out.println(sendSmsResponse.getCode());
		return x;  
    }  
}