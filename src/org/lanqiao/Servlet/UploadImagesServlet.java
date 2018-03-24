package org.lanqiao.Servlet;

import java.io.IOException;

import java.util.Date;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.lanqiao.Util.BeanJsonUtil;

import com.jspsmart.upload.File;
import com.jspsmart.upload.SmartUpload;
import com.jspsmart.upload.SmartUploadException;




/**
 * Servlet
 * @author Lanqiao08
 *
 */
@WebServlet("/uploadImagesServlet")
public class UploadImagesServlet extends  HttpServlet  {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SmartUpload  smartUpload=new  SmartUpload();
		smartUpload.initialize(getServletConfig(),request, response);
		smartUpload.setMaxFileSize(2*240*240);
		smartUpload.setAllowedFilesList("jpg,png,gif");
		try {
			smartUpload.upload();
		} catch (SmartUploadException e) {
			e.printStackTrace();
		}
		
		//String pic=  smartUpload.getRequest().getParameter("info");
		
		File file = smartUpload.getFiles().getFile(0); 
		String fileName = file.getFileName();  
        String suffix = fileName.substring(fileName.lastIndexOf("."));
		String webPath =request.getServletContext().getRealPath("/");
		String address="";
		String image="";
		if(!file.isMissing()){
			
			
			String picname = new Date().getTime() + ""; 
			String imgurls=picname+suffix;
			HttpSession session=request.getSession();
			session.setAttribute("imgurl",imgurls);
			
			java.io.File webFile=new java.io.File(webPath+"/images");
			if(!webFile.exists()){
				webFile.mkdirs();
			}
			
			address="/images/"+picname+"."+file.getFileExt();
			image=picname+"."+file.getFileExt();
			try {
				
				file.saveAs(address, File.SAVEAS_VIRTUAL);
			} catch (SmartUploadException e) {
				
				e.printStackTrace();
			}
		}
		//�޸����֮�󣬰�ͼƬ·�� ���浽���ݿ���
		String   project    =request.getContextPath();
		System.out.println(project+address);
		HashMap  map=new HashMap();
		map.put("url", project+address);
		map.put("image", image);
		BeanJsonUtil.writeJson(response, map);
	
	}
}
