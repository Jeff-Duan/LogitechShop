package org.lanqiao.Util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * ����Ѷ���ת����Json�����ǰ��
  * @desc: TODO
  * @author songzhantao
  * @date 2016��8��27�� ����8:48:26
 */
public class BeanJsonUtil {


	public  static void    writeJson(HttpServletResponse response,Object  object){
		//������ת����json
		response.setCharacterEncoding("utf-8");
		Gson  gson=new Gson();
		String    json =  gson.toJson(object);
		//��json���͵�ǰ��
		PrintWriter pw=null;
		try {
			pw = response.getWriter();
			pw.print(json);
			pw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	
	}  
	
}
