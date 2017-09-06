package com.shylsoft.excel;

import java.io.*;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wb.tool.DataOutput;
import com.wb.tool.ExcelObject;
import com.wb.util.StringUtil;
import com.wb.util.SysUtil;
import com.wb.util.WebUtil;
import org.apache.commons.io.IOUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONArray;
import org.json.JSONObject;

public class ExcelUtils {
	
	public static void getExcel(HttpServletRequest request, HttpServletResponse response) throws Exception{
		String filename = request.getParameter("filename");
		String title = request.getParameter("title");
		String jsonStr = request.getParameter("jsonStr");

		JSONObject jsonObject = null;
		try{
			jsonObject = new JSONObject(jsonStr);
		}catch (Exception e){
			e.printStackTrace();
		}
		String webRootPath = request.getServletContext().getRealPath("/");
		String path  = webRootPath + "/wb/system/excel/demo/form-report1.xlsx";
		XSSFWorkbook wb = new XSSFWorkbook(path);
		XSSFSheet sheet = wb.getSheetAt(0);
		

		int rowIndex = sheet.getLastRowNum();
		for(int i=0;i<rowIndex;i++){
			XSSFRow row = sheet.getRow(i);
			if(row == null){
				continue;
			}
			int cellIndex = row.getLastCellNum();
			int arrIndex = 0;
			for(int j=0;j<cellIndex;j++){
				XSSFCell cell = row.getCell(j);
				if(cell != null && cell.getStringCellValue()!= null && !cell.getStringCellValue().equals("") && cell.getStringCellValue().startsWith("{") && cell.getStringCellValue().endsWith("}")){
					String key = cell.getStringCellValue().substring(1,cell.getStringCellValue().length()-1);
					// == null ? "": cell.setCellValue(jsonObject.getString(key));
					if(!jsonObject.isNull(key)){
						cell.setCellValue(jsonObject.getString(key));
					}
					;
				}
			}
		}

		/*FileOutputStream fileOut = null;
		File dir = new File(webRootPath + "/download/excel");
		if(!dir.exists()){
			dir.mkdirs();
		}*/

		/*fileOut = new FileOutputStream(dir + "/"+SysUtil.getId()+".xlsx");
		wb.write(fileOut);
		fileOut.close();*/

		response.reset();
		response.setContentType("application/vnd.ms-excel");        //改成输出excel文件
		response.setHeader("Content-disposition","attachment; filename=quotation sheet.xlsx" );
		wb.write(response.getOutputStream());
		response.flushBuffer();
	}
	
	public static void main(String[] args) throws Exception {
		String path = "/Users/Jenner/Desktop/系统详细业务需求书-V1.1.xlsx";
		
		ExcelObject object  =  new ExcelObject();
		
		String ret = object.excelToJson(new FileInputStream(path), true);

		System.out.println(ret);
		
		
//		String jsonStr = "{\"TO\":\"aa\"}";
//		JSONObject jsonObject = null;
//		try{
//			jsonObject = new JSONObject(jsonStr);
//		}catch (Exception e){
//			e.printStackTrace();
//		}
//
//		
//		XSSFWorkbook wb = new XSSFWorkbook(path);
//        XSSFSheet sheet = wb.getSheetAt(0);
//
//        int rowIndex = sheet.getLastRowNum();
//        for(int i=0;i<rowIndex;i++){
//			XSSFRow row = sheet.getRow(i);
//			if(row == null){
//				continue;
//			}
//        	int cellIndex = row.getLastCellNum();
//        	int arrIndex = 0;
//        	for(int j=0;j<cellIndex;j++){
//				XSSFCell cell = row.getCell(j);
//				if(cell != null && cell.getStringCellValue()!= null && !cell.getStringCellValue().equals("") && cell.getStringCellValue().startsWith("{") && cell.getStringCellValue().endsWith("}")){
//					String key = cell.getStringCellValue().substring(1,cell.getStringCellValue().length()-1);
//					// == null ? "": cell.setCellValue(jsonObject.getString(key));
//					if(!jsonObject.isNull(key)){
//						cell.setCellValue(jsonObject.getString(key));
//					}
//					;
//				}
//			}
//		}
//
//		FileOutputStream fileOut = null;
//		fileOut = new FileOutputStream("g:/aaa.xlsx");
//		wb.write(fileOut);
//		fileOut.close();

	}
}
