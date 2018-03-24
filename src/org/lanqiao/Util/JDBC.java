package org.lanqiao.Util;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Properties;

public class JDBC {
	private static final String DRIVER="driver";
	private static final String URL="url";
	private static final String NAME="name";
	private static final String PASSWD="passwd";
	static Properties ppt=new Properties();
	
	//本地变量  或者线程变量
	static  ThreadLocal<Connection>   container=new  ThreadLocal<Connection>();
	
	static{
		try {
			//通过类加载器 加载在类跟路径下的属性配置文件
			ppt.load(JDBC.class.getClassLoader().getResourceAsStream("jdbc.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	static{
		//1.加载驱动
		try {
			Class.forName(ppt.getProperty(DRIVER));
			System.out.println("驱动加载成功");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static Connection getconnection(){
		//2.获取连接
		Connection  conn =container.get();
		try {
			if(conn==null ||conn.isClosed()){
				conn=DriverManager.getConnection(ppt.getProperty(URL),ppt.getProperty(NAME),ppt.getProperty(PASSWD));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
	
	//----------DQL语句
	public static ArrayList<HashMap<String,Object>> excutequery(String sql,Object[] obj){
		ArrayList<HashMap<String,Object>>  list=new  ArrayList<HashMap<String,Object>>();
		//3.预编译SQL语句
		Connection conn =getconnection();
		PreparedStatement pst=null;
		ResultSet  rs=null;
		try {
			pst  =	conn.prepareStatement(sql);

			if(obj!=null){
				for(int i =0;i<obj.length;i++){
					pst.setObject(i+1, obj[i]);
				}
			}
			rs =  pst.executeQuery();
			//解析ResultSet 解析成HashMap 和ArrayList的组合  一条数据HashMap 多条数据是ArrayList
			int count = rs.getMetaData().getColumnCount(); //获取列的数量
			while(rs.next()){
				HashMap<String ,Object>  row =new  HashMap<String ,Object> ();
				for(int i=0;i<count;i++){
					String key =rs.getMetaData().getColumnLabel(i+1);
					Object  value =rs.getObject(key);
					row.put(key, value);
				}
				list.add(row);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			if(rs!=null){
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(pst!=null){
				try {
					pst.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return  list;
	}
	//----------DML语句
		public static int excuteupdate(String sql,Object[] obj){
			Connection conn =	getconnection();
			PreparedStatement pst=null;
			int s=0;
			//3.预编译SQL语句
			try {
				pst=conn.prepareStatement(sql);
				//4.设置参数
				if(obj!=null){
					for(int i=0;i<obj.length;i++){
						pst.setObject(i+1,obj[i]);
					}
				}
				//5.执行SQL
				s=pst.executeUpdate();
				//6.解析结果集
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				if(pst!=null){
					try {
						pst.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}
			}
			return s;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	
}
