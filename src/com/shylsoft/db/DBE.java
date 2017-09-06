package com.shylsoft.db;

import com.wb.common.Base;
import com.wb.util.DbUtil;
import com.wb.util.JsonUtil;
import com.wb.util.SortUtil;
import com.wb.util.StringUtil;
import com.wb.util.SysUtil;
import com.wb.util.WebUtil;
import java.io.File;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

public class DBE {
	public static void getTree(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String type = request.getParameter("type");
		String jndi = request.getParameter("jndi");
		String schema = request.getParameter("schema");
		String result;
		if ("db".equals(type)) {
			result = getSchemaList(jndi, null);
			if (result == null) {
				result = getTableList(jndi, null, null);
			}
		} else {
			if ("schema".equals(type)) {
				result = getTableList(jndi, schema, null);
			} else {
				result = getDbList();
			}
		}
		WebUtil.send(response, result);
	}

	public static void checkSelectSql(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String sql = request.getParameter("sql");
		String[] roles = (String[]) WebUtil.fetchObject(request, "sys.roles");
		if ((StringUtil.indexOf(roles, "demo") != -1) && (StringUtil.indexOf(roles, "admin") == -1)
				&& ((!sql.startsWith("select * from ")) || (!StringUtil.checkName(sql.substring(14), true))
						|| (sql.substring(14).equalsIgnoreCase("WB_USER")))) {
			SysUtil.accessDenied();
		}
	}

	public static String getDbList() throws Exception {
		JSONObject config = JsonUtil.readObject(new File(Base.path, "wb/system/var.json"));
		HashMap<String, Object> map = new HashMap();

		config = config.optJSONObject("sys").optJSONObject("jndi");
		Set<Map.Entry<String, Object>> es = config.entrySet();

		JSONArray ja = new JSONArray();

		config.remove("default");
		for (Map.Entry<String, Object> e : es) {
			String key = (String) e.getKey();
			map.put(key, ((JSONArray) e.getValue()).optString(0));
		}
		ArrayList<Map.Entry<String, Object>> sortedItems = SortUtil.sortKey(map);
		JSONObject jo = new JSONObject();
		jo.put("text", "default");
		jo.put("jndi", "default");
		jo.put("type", "db");
		jo.put("iconCls", "db_icon");
		ja.put(jo);
		for (Map.Entry<String, Object> e : sortedItems) {
			jo = new JSONObject();
			jo.put("text", e.getKey());
			jo.put("jndi", e.getKey());
			jo.put("type", "db");
			jo.put("iconCls", "db_icon");
			ja.put(jo);
		}
		return ja.toString();
	}

	public static String getTableList(String jndi, String schema, HashSet<String> tables) throws Exception {
		Connection conn = null;
		ResultSet rs = null;
		boolean isFirst = true;
		boolean hasTableDefine = tables != null;
		String[] types = { "TABLE","VIEW" };
		String jndiText = StringUtil.quote(jndi);
		StringBuilder buf = new StringBuilder();

		HashMap<String, String> tableMap = new HashMap();
		try {
			conn = DbUtil.getConnection(jndi);
			rs = conn.getMetaData().getTables(null, schema, null, types);
			while (rs.next()) {
				String tableSchema = StringUtil.opt(rs.getString(2));
				String tableName = rs.getString(3);
				tableMap.put(tableName, tableSchema);
			}
			ArrayList<Map.Entry<String, String>> sortedEntries = SortUtil.sortKey(tableMap);
			buf.append('[');
			for (Map.Entry<String, String> entry : sortedEntries) {
				if (isFirst) {
					isFirst = false;
				} else {
					buf.append(',');
				}
				String tableName = (String) entry.getKey();
				String tableText = StringUtil.quote(tableName);
				String tableSchema = StringUtil.quote((String) entry.getValue());
				buf.append("{\"text\":");
				buf.append(tableText);
				buf.append(",\"type\":\"table\",\"table\":");
				buf.append(tableText);
				buf.append(",\"schema\":");
				buf.append(tableSchema);
				buf.append(",\"jndi\":");
				buf.append(jndiText);
				buf.append(",\"leaf\":true,\"iconCls\":\"");
				String upperTableName = tableName.toUpperCase();
				if ((hasTableDefine) && (tables.contains(upperTableName))) {
					tables.remove(upperTableName);
					buf.append("table_add_icon\"}");
				} else {
					buf.append("table_icon\"}");
				}
			}
			if ((hasTableDefine) && (schema == null)) {
				for (String fullName : tables) {
					fullName = StringUtil.quote(fullName);
					buf.append(",{\"text\":");
					buf.append(fullName);
					buf.append(",\"type\":\"table\",\"table\":");
					buf.append(fullName);
					buf.append(",\"schema\":\"\",\"jndi\":");
					buf.append(jndiText);
					buf.append(",\"leaf\":true,\"iconCls\":\"table_delete_icon\"}");
				}
			}
			buf.append(']');
			return buf.toString();
		} finally {
			DbUtil.close(rs);
			DbUtil.close(conn);
		}
	}

	public static String getSchemaList(String jndi, HashSet<String> tables) throws Exception {
		Connection conn = null;
		ResultSet rs = null;
		String[] types = { "TABLE" };
		String jndiText = StringUtil.quote(jndi);
		StringBuilder buf = new StringBuilder();
		HashMap<String, Boolean> schemaMap = new HashMap();

		boolean isFirst = true;
		boolean hasTableDefine = tables != null;
		try {
			conn = DbUtil.getConnection(jndi);
			rs = conn.getMetaData().getTables(null, null, null, types);
			while (rs.next()) {
				String schema = StringUtil.opt(rs.getString(2));
				String tableName = rs.getString(3);
				String upperTableName = tableName.toUpperCase();
				schemaMap.put(schema, Boolean.valueOf(true));
				if ((hasTableDefine) && (tables.contains(upperTableName))) {
					tables.remove(upperTableName);
				}
			}
			if ((schemaMap.isEmpty()) || ((schemaMap.size() == 1) && (schemaMap.containsKey("")))) {
				return null;
			}
			ArrayList<Map.Entry<String, Boolean>> entryList = SortUtil.sortKey(schemaMap);
			buf.append('[');
			for (Map.Entry<String, Boolean> entry : entryList) {
				String schema = StringUtil.quote((String) entry.getKey());
				if (isFirst) {
					isFirst = false;
				} else {
					buf.append(',');
				}
				buf.append("{\"text\":");
				buf.append(schema);
				buf.append(",\"jndi\":");
				buf.append(jndiText);
				buf.append(",\"schema\":");
				buf.append(schema);
				buf.append(",\"type\":\"schema\",\"iconCls\":\"db_form_icon\"}");
			}
			if (hasTableDefine) {
				for (String fullName : tables) {
					fullName = StringUtil.quote(fullName);
					buf.append(",{\"text\":");
					buf.append(fullName);
					buf.append(",\"type\":\"table\",\"table\":");
					buf.append(fullName);
					buf.append(",\"schema\":\"\",\"jndi\":");
					buf.append(jndiText);
					buf.append(",\"leaf\":true,\"iconCls\":\"table_delete_icon\"}");
				}
			}
			buf.append(']');
			return buf.toString();
		} finally {
			DbUtil.close(rs);
			DbUtil.close(conn);
		}
	}

	public static void downloadBlob(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String jndi = request.getParameter("__jndi");
		String tableName = request.getParameter("__tableName");
		String fieldName = request.getParameter("__fieldName");
		String selectSql = DbUtil.buildSQLs(jndi, tableName, false, 1, null, new JSONObject().put(fieldName, 1), null,
				null)[3];
		ResultSet rs = (ResultSet) DbUtil.run(request, selectSql, jndi);
		DbUtil.outputBlob(rs, request, response, "download");
	}

	public static void uploadBlob(HttpServletRequest request, HttpServletResponse response) throws Exception {
		setBlob(request, false);
	}

	public static void clearBlob(HttpServletRequest request, HttpServletResponse response) throws Exception {
		setBlob(request, true);
	}

	private static void setBlob(HttpServletRequest request, boolean isClear) throws Exception {
		String jndi = WebUtil.fetch(request, "__jndi");
		String tableName = WebUtil.fetch(request, "__tableName");
		String fieldName = WebUtil.fetch(request, "__fieldName");
		if (isClear) {
			request.setAttribute(fieldName, "");
		} else {
			request.setAttribute(fieldName, request.getAttribute("file"));
		}
		String updateSql = DbUtil.buildSQLs(jndi, tableName, false, 1, null, new JSONObject().put(fieldName, 1), null,
				null)[1];
		DbUtil.run(request, updateSql, jndi);
	}
}
