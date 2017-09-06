<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="javax.sql.*"%>
<%@ page import="javax.naming.*"%>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<title>Test JNDI</title>
</head>
<body>
<%
 	InitialContext context = new InitialContext();
 	DataSource ds = (DataSource) context.lookup("YourJndiFullName");
 	ds.getConnection().close();
	out.println("Test JNDI successfully.");
%>
</body>
</html>